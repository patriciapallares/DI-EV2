// 5. Muestra el 'id del proceso', el 'título del proceso',  'versión de node:' y el 'sistema operativo' por consola.

const processId = process.pid; 
const processTitle = process.title; 
const nodeVersion = process.version; 
const operatingSystem = process.platform; 

console.log(`ID del proceso: ${processId}`);
console.log(`Título del proceso: ${processTitle}`);
console.log(`Versión de Node.js: ${nodeVersion}`);
console.log(`Sistema operativo: ${operatingSystem}`);
