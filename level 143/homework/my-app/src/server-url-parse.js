const http = require("http");
const { URL } = require("url");
const querystring = require("querystring");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Build full URL (needed because req.url is only path + query)
  const fullUrl = new URL(req.url, `http://${req.headers.host}`);

  // Extract pathname
  const pathname = fullUrl.pathname;

  // Extract query parameters using URLSearchParams
  const queryParams = {};
  for (const [key, value] of fullUrl.searchParams.entries()) {
    queryParams[key] = value;
  }


  const rawQueryString = fullUrl.search.replace("?", "");
  const manualParsedQuery = querystring.parse(rawQueryString);

  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;

  res.end(
    `Parsed URL Info\n\n` +
      `Pathname: ${pathname}\n\n` +
      `--- Query Params (URLSearchParams) ---\n` +
      `${JSON.stringify(queryParams, null, 2)}\n\n` +
      `--- Query Params (querystring.parse) ---\n` +
      `${JSON.stringify(manualParsedQuery, null, 2)}\n\n` +
      `Example access:\n` +
      `name = ${manualParsedQuery.name || "(not provided)"}\n`
  );
});

server.listen(PORT, () => {
  console.log(`URL Parser Server running at http://localhost:${PORT}`);
});