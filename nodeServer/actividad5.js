//  Muestra el 'id del proceso', el 'título del proceso',  'versión de node:' y el 'sistema operativo' por consola.

// Obtén información del proceso y sistema
const processId = process.pid; // ID del proceso
const processTitle = process.title; // Título del proceso
const nodeVersion = process.version; // Versión de Node.js
const operatingSystem = process.platform; // Sistema operativo

// Muestra la información por consola
console.log(`ID del proceso: ${processId}`);
console.log(`Título del proceso: ${processTitle}`);
console.log(`Versión de Node.js: ${nodeVersion}`);
console.log(`Sistema operativo: ${operatingSystem}`);
