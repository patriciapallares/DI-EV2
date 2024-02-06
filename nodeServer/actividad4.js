//  Utiliza    fs.readFileSync()      para mostrar el contenido de un fichero en la web.

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  try {
    // Lee el contenido del archivo de manera síncrona
    const data = fs.readFileSync('hola.txt', 'utf8');

    // Configura la respuesta HTTP con el contenido del archivo
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
  } catch (error) {
    // Maneja los errores al leer el archivo
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error al leer el archivo');
    console.error('Error al leer el archivo:', error);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
