const http = require("http");
const fs = require("fs/promises");

const DB_FILE = "./books.json";

async function readFile() {
  try {
    const data = await fs.readFile(DB_FILE, "utf-8");
    return JSON.parse(data || "[]");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(DB_FILE, "[]");
      return [];
    }
    throw err;
  }
}

async function writeFile(data) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data, null, 2));
}

function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => (body += chunk.toString()));

    req.on("end", () => {
      if (!body.trim()) return resolve(null);
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON in request body"));
      }
    });
  });
}

const server = http.createServer(async (req, res) => {
  try {
    if (req.url !== "/books") {
      return sendJson(res, 404, { error: "Route not found. Use /books" });
    }

    if (req.method === "GET") {
      const books = await readFile();
      return sendJson(res, 200, books);
    }

    const body = await getRequestBody(req);

    if (req.method === "POST") {
      if (!body) return sendJson(res, 400, { error: "Request body cannot be empty" });

      const { id, name, price } = body;

      if (id === undefined || name === undefined || price === undefined) {
        return sendJson(res, 400, { error: "Missing required fields: id, name, price" });
      }

      const books = await readFile();

      if (books.some((b) => b.id === id)) {
        return sendJson(res, 409, { error: `Book with id ${id} already exists` });
      }

      books.push({ id, name, price });
      await writeFile(books);

      return sendJson(res, 201, books);
    }

    if (req.method === "PUT") {
      if (!body) return sendJson(res, 400, { error: "Request body cannot be empty" });

      const { id, name, price } = body;

      if (id === undefined) {
        return sendJson(res, 400, { error: "Missing required field: id" });
      }

      const books = await readFile();
      const index = books.findIndex((b) => b.id === id);

      if (index === -1) {
        return sendJson(res, 404, { error: `Book with id ${id} not found` });
      }

      const existing = books[index];
      const nameChanged = name !== undefined && name !== existing.name;
      const priceChanged = price !== undefined && price !== existing.price;

      if (!nameChanged && !priceChanged) {
        return sendJson(res, 400, {
          error: "No changes detected. Update name or price with a different value.",
        });
      }

      if (name !== undefined) existing.name = name;
      if (price !== undefined) existing.price = price;

      books[index] = existing;
      await writeFile(books);

      return sendJson(res, 200, books);
    }

    if (req.method === "DELETE") {
      if (!body) return sendJson(res, 400, { error: "Request body cannot be empty" });

      const { id } = body;

      if (id === undefined) {
        return sendJson(res, 400, { error: "Missing required field: id" });
      }

      const books = await readFile();
      const index = books.findIndex((b) => b.id === id);

      if (index === -1) {
        return sendJson(res, 404, { error: `Book with id ${id} not found` });
      }

      books.splice(index, 1);
      await writeFile(books);

      return sendJson(res, 200, books);
    }

    return sendJson(res, 405, {
      error: "Method not allowed. Use GET, POST, PUT, or DELETE.",
    });
  } catch (err) {
    return sendJson(res, 500, { error: err.message });
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});