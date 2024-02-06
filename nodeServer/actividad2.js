// Haz que el bucle anterior se ejecute tras un retardo de 2 segundos (pista: hay una función 
// JavaScript para indicarle que ejecute una función al cabo de cierto tiempo).

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  function imprimir(params) {
    for (let i = 0; i < 10; i++) {
      console.log("Node.js es muy chulo");
    }
  }
  setTimeout(imprimir, 2000);

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});