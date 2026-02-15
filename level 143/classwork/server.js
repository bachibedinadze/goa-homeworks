import http from "http";

const frontendUrl = "https://example.com";

const server = http.createServer((req, res) => {
  console.log("Request URL:", req.url);

  const fullUrl = new URL(req.url, frontendUrl);

  console.log("hostname:", fullUrl.hostname);
  console.log("pathname:", fullUrl.pathname);
  console.log("searchParams:", fullUrl.searchParams.toString());

  res.end("OK");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});