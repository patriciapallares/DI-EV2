//Declaración de variablesbomberobombero
var canvas, ctx;
var bomberoX = 0; //Posición original en x del bombero
var bomberoY = 0; //Posición original en y del bombero
var bombero = new Image(); //Imagen para capturar el bombero
var fondoBombero = new Image(); //Imagen para capturar el fondo
var contador = 40; //Contador de movimientos
var tiempo = new Date(15000); //Para tener solo 15 segundos en milisegundos
var stop; //Para parar el tmporizador

var empezarBtn = document.getElementById("empezar");
console.log("hola");
//Inicio el juego

function canvasStars() {
  //Obtengo el elemento canvas
  canvas = document.getElementById("miCanvas");

  //Especifico el contexto 2D
  ctx = canvas.getContext("2d");

  //Llamo a la función que pinta el fondo
  pintarFondo();

  //Llamo a la función que pinta el bombero
  pintarBombero();

  //Llamo a la función que pinta el bebe
  pintarBebe();

  //Llamo a la función que pinta los fuegos
  pintarFuegos();

  pintarAgua();
  pintarReloj();

  //Añado el escuchador del teclado
  window.addEventListener("keydown", moverBombero, true);

  //LLamada al temporizador
  temporizador();

}


//Pinto el fondo 
function pintarFondo() {
  //Pinto el fondo gris
  ctx.fillStyle = "lightgray";
  ctx.beginPath();
  ctx.rect(0, 0, 600, 600); //posición x, posición y, ancho, alto (en píxeles)
  ctx.closePath();
  ctx.closePath();
  ctx.fill();

  //Guardo el fondo de detrás del bombero como imagen
  fondoBombero = ctx.getImageData(0, 0, 30, 30);
}

var bomberoImage = new Image();
bomberoImage.src = "bombero.png"; // Reemplaza 'ruta_de_la_imagen' con la ruta correcta de tu imagen

function pintarBombero() {
  ctx.drawImage(bomberoImage, 0, 0, 30, 30);
  bombero = ctx.getImageData(0, 0, 30, 30);
}

var bebeImage = new Image();
bebeImage.src = "bebe.png"; // Reemplaza 'ruta_de_la_imagen' con la ruta correcta de tu imagen

function pintarBebe() {
  // Dibujar la imagen del bebe con un borde azul
  ctx.drawImage(bebeImage, 570, 570, 30, 30); // Ajusta tamaño y posición según tus necesidades

  // Dibujar el borde azul
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2; // Ancho del borde
  ctx.strokeRect(570, 570, 30, 30);
}

//Pintar fuegos
var fuegoImage = new Image();
fuegoImage.src = "fire-png.png";

function pintarFuegos() {
  for (i = 0; i < 30; i++) {
    var x = Math.random() * 570;
    var y = Math.random() * 570;

    //Compruebo que no hay fuegos cerca del bombero
    if (x < 30 && y < 30) {
      x = x + 30;
      y = y + 30;
    }

    //Compruebo que no hay fuegos cerca del bebe
    if (x > 540 && y > 540) {
      x = x - 30;
      y = y - 30;
    }

    //Pinto un asteroide
    // ctx.fillStyle = "red";
    ctx.beginPath();
    // ctx.rect(x, y, 20, 20);

    ctx.drawImage(fuegoImage, x, y, 20, 20);
    // ctx.fillStyle = "red";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2; // Ancho del borde
    ctx.strokeRect(x, y, 20, 20);
    ctx.closePath();
    ctx.fill();
  }
}

//Pintar agua
var aguaImage = new Image();
aguaImage.src = "agua.png";

function pintarAgua() {
  var x = Math.random() * 570;
  var y = Math.random() * 570;

  //Compruebo que no hay agua cerca del bombero
  if (x < 30 && y < 30) {
    x = x + 30;
    y = y + 30;
  }

  //Compruebo que no hay agua cerca del bebe
  if (x > 540 && y > 540) {
    x = x - 30;
    y = y - 30;
  }

  //Pinto agua
  ctx.beginPath();

  ctx.drawImage(aguaImage, x, y, 20, 20);
  ctx.strokeStyle = "aqua"; // rgb(0, 255, 255)
  ctx.lineWidth = 2; // Ancho del borde
  ctx.strokeRect(x, y, 20, 20);
  ctx.closePath();
  ctx.fill();
}

//Pintar reloj
var relojImage = new Image();
relojImage.src = "reloj.png";

function pintarReloj() {
  var x = Math.random() * 570;
  var y = Math.random() * 570;

  //Compruebo que no hay agua cerca del bombero
  if (x < 30 && y < 30) {
    x = x + 30;
    y = y + 30;
  }
  //Compruebo que no hay agua cerca del bebe
  if (x > 540 && y > 540) {
    x = x - 30;
    y = y - 30;
  }
  //Pinto agua
  ctx.beginPath();

  ctx.drawImage(relojImage, x, y, 20, 20);
  ctx.strokeStyle = "darkgreen"; // rgb(0, 100, 0)
  ctx.lineWidth = 2; // Ancho del borde
  ctx.strokeRect(x, y, 20, 20);
  ctx.closePath();
  ctx.fill();
}

//Muevo el bombero
function moverBombero(evento) {
  //Detecto la tecla que estoy pulsando
  switch (evento.keyCode) {
    //Izquierda: 37 o 65 (flecha izquierda o letra A)
    case 37:
    case 65:
      //Actualizar contador
      actualizarContador();
      //Compruebo si se va a salir por la izquierda
      if (bomberoX === 0) {
        break;
      }
      //Borro el bombero (pintando fondoBombero encima)
      ctx.putImageData(fondoBombero, bomberoX, bomberoY);
      //Actualizo la x
      bomberoX = bomberoX - 30;
      //Capturo el fondo que voy a tapar
      fondoBombero = ctx.getImageData(bomberoX, bomberoY, 30, 30);
      //Muevo el bombero
      ctx.putImageData(bombero, bomberoX, bomberoY);
      //Compruebo colisión
      detectarColision();
      break;
    //Derecha: 39 o 68 (flecha derecha o letra D)
    case 39:
    case 68:
      //Actualizar contador
      actualizarContador();
      //Compruebo si se va a salir por la derecha
      if (bomberoX === 570) {
        break;
      }
      //Borro el bombero (pintando fondoBombero encima)
      ctx.putImageData(fondoBombero, bomberoX, bomberoY);
      //Actualizo la x
      bomberoX = bomberoX + 30;
      //Capturo el fondo que voy a tapar
      fondoBombero = ctx.getImageData(bomberoX, bomberoY, 30, 30);
      //Muevo el bombero
      ctx.putImageData(bombero, bomberoX, bomberoY);
      //Compruebo colisión
      detectarColision();
      break;
    //Arriba: 38 o 87 (flecha arriba o letra W)
    case 38:
    case 87:
      //Actualizar contador
      actualizarContador();
      //Compruebo si se va a salir por arriba
      if (bomberoY === 0) {
        break;
      }
      //Borro el bombero (pintando fondoBombero encima)
      ctx.putImageData(fondoBombero, bomberoX, bomberoY);
      //Actualizo la y
      bomberoY = bomberoY - 30;
      //Capturo el fondo que voy a tapar
      fondoBombero = ctx.getImageData(bomberoX, bomberoY, 30, 30);
      //Muevo el bombero
      ctx.putImageData(bombero, bomberoX, bomberoY);
      //Compruebo colisión
      detectarColision();
      break;
    //Abajo: 40 o 83 (fle3cha abajo o letra S)
    case 40:
    case 83:
      //Actualizar contador
      actualizarContador();
      //Compruebo si se va a salir por abajo
      if (bomberoY === 570) {
        break;
      }
      //Borro el bombero (pintando fondoBombero encima)
      ctx.putImageData(fondoBombero, bomberoX, bomberoY);
      //Actualizo la y
      bomberoY = bomberoY + 30;
      //Capturo el fondo que voy a tapar
      fondoBombero = ctx.getImageData(bomberoX, bomberoY, 30, 30);
      //Muevo el bombero
      ctx.putImageData(bombero, bomberoX, bomberoY);
      //Compruebo colisión
      detectarColision();
      break;
  }
}

//Actualizo el contador y detecto si se ha quedado sin movimientos
function actualizarContador() {
  //Decremento en cada movimiento
  contador--;
  //Capturo el elemento en el que escribir la puntuación
  var spanPuntuacion = document.getElementById("puntuacion");
  //Actualizo el contador
  spanPuntuacion.innerHTML = contador;
  //Compruebo el valor para cambiar el color del texto
  if (contador < 6) {
    spanPuntuacion.style.color = "red";
  } else if (contador < 11) {
    spanPuntuacion.style.color = "orange";
  } else {
    spanPuntuacion.style.color = "#0F0";
  }
  //Compruebo si se ha quedado sin puntos
  if (contador === 0) {
    var mensaje =
      `¡Lo siento! Te has quedado sin puntos. Pincha <span class="amarillo">AQUÍ</span> para volver a intentarlo.`;
    finalizar(mensaje);
  }
}

var haChocadoAgua = false;
var haChocadoReloj = false;

//Detecto colisiones con el bebe o los fuegos
function detectarColision() {
  var pixels = 900; //Porque la imagen es de 30x30 pixels
  var elementos = pixels * 4; //Porque cada pixel tiene 4 bytes (RGBA)

  //Recorro en busca del rojo (asteroide) o del azul (base) o del aqua (agua!!) o del darkgreen (reloj)
  for (var i = 0; i < elementos; i += 4) {
    //Asteroide (255, 0, 0)
    if (
      fondoBombero.data[i] === 255 &&
      fondoBombero.data[i + 1] === 0 &&
      fondoBombero.data[i + 2] === 0
    ) {
      var mensaje =
        `¡Lo siento! Has chocado con un fuego.<br>Pincha <span class="amarillo">AQUÍ</span> para volver a intentarlo.`;
      finalizar(mensaje);
      break;
    }

    //Base (0, 0, 255)
    if (
      fondoBombero.data[i] === 0 &&
      fondoBombero.data[i + 1] === 0 &&
      fondoBombero.data[i + 2] === 255
    ) {
      var mensaje =
        `¡Enhorabuena! Has llegado al bebé.<br>Pincha <span class="amarillo">AQUÍ</span> para volver a jugar.`;
      finalizar(mensaje);
      break;
    }

    //Agua rgb(0, 255, 255)
    if (
      fondoBombero.data[i] === 0 &&
      fondoBombero.data[i + 1] === 255 &&
      fondoBombero.data[i + 2] === 255 &&
      haChocadoAgua === false
    ) {
      var mensaje =
        `¡Enhorabuena! Has llegado al bebé.<br>Pincha <span class="amarillo">AQUÍ</span> para volver a jugar.`;
      //finalizar(mensaje);

      contador += 20;
      // Sumar 5 segundos
      tiempo.setMilliseconds(tiempo.getMilliseconds() + 5000);

      haChocadoAgua = true;
      break;
    }

    // darkgreen rgb(0, 100, 0)
    if (
      fondoBombero.data[i] === 0 &&
      fondoBombero.data[i + 1] === 100 &&
      fondoBombero.data[i + 2] === 0 &&
      haChocadoReloj === false
    ) {
      contador += 5;
      // Sumar 15 segundos
      tiempo.setMilliseconds(tiempo.getMilliseconds() + 15000);

      haChocadoReloj = true;
      break;
    }
  }
}

//Finalizo el juego
function finalizar(mensaje) {
  //Capturo el elemento en el que voy a escribir
  var spanMensaje = document.getElementById("mensaje");
  //Escribo el mensaje en ese elemento
  spanMensaje.innerHTML = mensaje;
  //Bloqueo el movimiento del teclado
  window.removeEventListener("keydown", moverBombero, true);
  clearTimeout(stop);
}

//Reinicio el juego
function reiniciar() {
  window.location.reload();
}

function temporizador() {
  //Decremento 500 milisegundos
  var ms = tiempo.getMilliseconds() - 500;
  tiempo.setMilliseconds(ms);

  //Muestro la nueva fecha
  var texto =
    rellenaCeros(tiempo.getMinutes()) + ":" + rellenaCeros(tiempo.getSeconds());
  var spanTiempo = document.getElementById("tiempo");
  spanTiempo.innerHTML = texto;

  //Compruebo el valor para cambiar el color del texto
  if (tiempo.getSeconds() < 6) {
    spanTiempo.style.color = "red";
  } else if (tiempo.getSeconds() < 11) {
    spanTiempo.style.color = "orange";
  } else {
    spanTiempo.style.color = "#0F0";
  }


  

  //Compruebo si llega a 0 para finalizar el juego o continuar
  if (tiempo.getSeconds() <= 0) {
    var mensaje =
      `¡Lo siento! Se ha terminado el tiempo.<br>Pincha <span class="amarillo">AQUÍ</span> para volver a intentarlo.`;
    finalizar(mensaje);
  } else {
    //Hago un loop para que se ejecute cada 500ms
    stop = setTimeout(temporizador, 500);
  }
}

function rellenaCeros(numero) {
  if (numero < 10) {
    return "0" + numero;
  } else {
    return numero;
  }
}

///////

// FUENTE: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples

function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}


