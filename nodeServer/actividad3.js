// 3. Haz que muestre el mensaje "Soy un pesado que se ejecuta cada 2 segundos" cada dos segundos (pista: otra función JavaScript)..

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  function imprimir(params) {
    console.log("Soy un pesado que se ejecuta cada 2 segundos");
  }
  setInterval(imprimir, 2000);

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
