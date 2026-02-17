const http = require('http');

const items = [];

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (items.length === 0) {
            res.statusCode = 204;
            return res.end('no items found');
        }
    } else {
        res.status = 405;
        return res.end('Only GET requests are allowed');
    }
});

server.listen(3000);