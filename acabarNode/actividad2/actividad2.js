const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const data = fs.readFileSync('Diseno-fijo.html', 'utf8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.setHeader('Content-Type', 'image.png');  
    res.end(data);
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
