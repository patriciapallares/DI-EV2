//DeclaraciÃ³n de variables
var canvas, ctx;
var naveX = 0; //PosiciÃ³n original en x de la nave
var naveY = 0; //PosiciÃ³n original en y de la nave
var nave = new Image(); //Imagen para capturar la nave
var fondoNave = new Image(); //Imagen para capturar el fondo
var contador = 40; //Contador de movimientos
var tiempo = new Date(15000); //Para tener solo 15 segundos en milisegundos
var stop; //Para parar el tmporizador

//Inicio el juego
function canvasStars() {
  //Obtengo el elemento canvas
  canvas = document.getElementById("miCanvas");

  //Especifico el contexto 2D
  ctx = canvas.getContext("2d");

  //Llamo a la funciÃ³n que pinta el fondo con las estrellas
  pintarFondo();

  //Llamo a la funciÃ³n que pinta la nave
  pintarNave();

  //Llamo a la funciÃ³n que pinta la base
  pintarBase();

  //Llamo a la funciÃ³n que pinta los asteroides
  pintarAsteroides();

  //AÃ±ado el escuchador del teclado
  window.addEventListener("keydown", moverNave, true);

  //LLamada al temporizador
  temporizador();
}

//Pinto el fondo con las estrellas
function pintarFondo() {
  //Pinto el fondo negro
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.rect(0, 0, 600, 600); //posiciÃ³n x, posiciÃ³n y, ancho, alto (en pÃ­xeles)
  ctx.closePath();
  ctx.closePath();
  ctx.fill();

  //Pinto 100 estrellas
  for (i = 0; i < 100; i++) {
    //Posiciones x e y aleatorias
    var x = Math.random() * 600;
    var y = Math.random() * 600;

    //Pinto un cÃ­rculo blanco en esa posiciÃ³n
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2); //posiciÃ³n x, posiciÃ³n y, radio (en pÃ­xeles), inicio del arco (en grados), fin del arco (en grados)
    ctx.closePath();
    ctx.fill();
  }

  //Guardo el fondo de detrÃ¡s de la nave como imagen
  fondoNave = ctx.getImageData(0, 0, 30, 30);
}

//Pinto la nave
function pintarNave() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.rect(0, 0, 30, 30); //esquina superior izquierda, tamaÃ±o 30x30
  ctx.closePath();
  ctx.fill();

  //Guardo la nave como imagen
  nave = ctx.getImageData(0, 0, 30, 30);
}

//Pinto la base
function pintarBase() {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.rect(570, 570, 30, 30); //esquina inferior derecha, tamaÃ±o 30x30
  ctx.closePath();
  ctx.fill();
}

//Pintar asteroides
function pintarAsteroides() {
  for (i = 0; i < 30; i++) {
    var x = Math.random() * 570;
    var y = Math.random() * 570;

    //Compruebo que no hay asteroides cerca de la nave
    if (x < 30 && y < 30) {
      x = x + 30;
      y = y + 30;
    }

    //Compruebo que no hay asteroides cerca de la base
    if (x > 540 && y > 540) {
      x = x - 30;
      y = y - 30;
    }

    //Pinto un asteroide
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.rect(x, y, 20, 20);
    ctx.closePath();
    ctx.fill();
  }
}

//Muevo la nave
function moverNave(evento) {
  //Detecto la tecla que estoy pulsando
  switch (evento.keyCode) {
    //Izquierda: 37 o 65 (flecha izquierda o letra A)
    case 37:
    case 65:
      //Actualizar contador
      actualizarContador();
      //Compruebo si se va a salir por la izquierda
      if (naveX === 0) {
        break;
      }
      //Borro la nave (pintando fondoNave encima)
      ctx.putImageData(fondoNave, naveX, naveY);
      //Actualizo la x
      naveX = naveX - 30;
      //Capturo el fondo que voy a tapar
      fondoNave = ctx.getImageData(naveX, naveY, 30, 30);
      //Muevo la nave
      ctx.putImageData(nave, naveX, naveY);
      //Compruebo colisiÃ³n
      detectarColision();
      break;
    //Derecha: 39 o 68 (flecha derecha o letra D)
    case 39:
    case 68:
      //Actualizar contador
      actualizarContador();
      //Compruebo si se va a salir por la derecha
      if (naveX === 570) {
        break;
      }
      //Borro la nave (pintando fondoNave encima)
      ctx.putImageData(fondoNave, naveX, naveY);
      //Actualizo la x
      naveX = naveX + 30;
      //Capturo el fondo que voy a tapar
      fondoNave = ctx.getImageData(naveX, naveY, 30, 30);
      //Muevo la nave
      ctx.putImageData(nave, naveX, naveY);
      //Compruebo colisiÃ³n
      detectarColision();
      break;
    //Arriba: 38 o 87 (flecha arriba o letra W)
    case 38:
    case 87:
      //Actualizar contador
      actualizarContador();
      //Compruebo si se va a salir por arriba
      if (naveY === 0) {
        break;
      }
      //Borro la nave (pintando fondoNave encima)
      ctx.putImageData(fondoNave, naveX, naveY);
      //Actualizo la y
      naveY = naveY - 30;
      //Capturo el fondo que voy a tapar
      fondoNave = ctx.getImageData(naveX, naveY, 30, 30);
      //Muevo la nave
      ctx.putImageData(nave, naveX, naveY);
      //Compruebo colisiÃ³n
      detectarColision();
      break;
    //Abajo: 40 o 83 (fle3cha abajo o letra S)
    case 40:
    case 83:
      //Actualizar contador
      actualizarContador();
      //Compruebo si se va a salir por abajo
      if (naveY === 570) {
        break;
      }
      //Borro la nave (pintando fondoNave encima)
      ctx.putImageData(fondoNave, naveX, naveY);
      //Actualizo la y
      naveY = naveY + 30;
      //Capturo el fondo que voy a tapar
      fondoNave = ctx.getImageData(naveX, naveY, 30, 30);
      //Muevo la nave
      ctx.putImageData(nave, naveX, naveY);
      //Compruebo colisiÃ³n
      detectarColision();
      break;
  }
}

//Actualizo el contador y detecto si se ha quedado sin movimientos
function actualizarContador() {
  //Decremento en cada movimiento
  contador--;
  //Capturo el elemento en el que escribir la puntuaciÃ³n
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
      "Â¡Lo siento! Te has quedado sin puntos. Pincha AQUÃ para volver a intentarlo.";
    finalizar(mensaje);
  }
}

console.log(fondoNave.data);

//Detecto colisiones con la base o los asteroides
function detectarColision() {
  var pixels = 900; //Porque la imagen es de 30x30 pixels
  var elementos = 900 * 4; //Porque cada pixel tiene 4 bytes (RGBA)

  //Recorro en busca del rojo (asteroide) o del azul (base)
  for (var i = 0; i < elementos; i += 4) {
    //Asteroide (255, 0, 0)
    if (
      fondoNave.data[i] === 255 &&
      fondoNave.data[i + 1] === 0 &&
      fondoNave.data[i + 2] === 0
    ) {
      var mensaje =
        "Â¡Lo siento! Has chocado con un asteroide.<br>Pincha AQUÃ para volver a intentarlo.";
      finalizar(mensaje);
      break;
    }

    //Base (0, 0, 255)
    if (
      fondoNave.data[i] === 0 &&
      fondoNave.data[i + 1] === 0 &&
      fondoNave.data[i + 2] === 255
    ) {
      var mensaje =
        "Â¡Enhorabuena! Has llegado a la base.<br>Pincha AQUÃ para volver a jugar.";
      finalizar(mensaje);
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
  window.removeEventListener("keydown", moverNave, true);
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
      "Â¡Lo siento! Se ha terminado el tiempo.<br>Pincha AQUÃ para volver a intentarlo.";
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
