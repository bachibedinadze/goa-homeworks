const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const method = req.method;

  res.setHeader("Content-Type", "text/plain");

  if (method === "GET") {
    res.statusCode = 200;
    res.end("GET request received!");
  } else if (method === "POST") {
    res.statusCode = 200;
    res.end("POST request received!");
  } else if (method === "PUT") {
    res.statusCode = 200;
    res.end("PUT request received!");
  } else if (method === "DELETE") {
    res.statusCode = 200;
    res.end("DELETE request received!");
  } else {
    res.statusCode = 405;
    res.end(`Unsupported method: ${method}`);
  }
});

server.listen(PORT, () => {
  console.log(`Server running successfully on http://localhost:${PORT}`);
});