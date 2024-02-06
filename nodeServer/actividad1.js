// Crea un programa en node.js que utilice un bucle para mostrar el mensaje "Node.js es muy chulo" diez veces por la consola.

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  for (let i = 0; i < 10; i++) {
    console.log("Node.js es muy chulo");
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});