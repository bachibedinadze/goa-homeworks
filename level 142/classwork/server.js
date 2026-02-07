const http = require('http');

const server = http.createServer((req, res) => {
    res.end('ბაჩი ბედინაძე')
})

server.listen(3000, () => {
    console.log('სერვერი გაეშვა პორტ 3000-ზე');
});