
const processId = process.pid;
const processTitle = process.title;
const nodeVersion = process.version;
const operatingSystem = process.platform;

function infoProceso() {
  console.log(`ID del proceso: ${processId}`);
  console.log(`Título del proceso: ${processTitle}`);
  console.log(`Versión de Node.js: ${nodeVersion}`);
  console.log(`Sistema operativo: ${operatingSystem}`);
}

module.exports = infoProceso;
