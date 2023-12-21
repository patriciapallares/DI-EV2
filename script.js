function showAlert(texto) {
    // Crea una función de JavaScript para generar el alert anterior. Haz que una única función nos sirva tanto para div como para button.
    alert(`Pulsaste sobre el ${texto}`);
}

// Crea un script para que se active cuando la página se haya cargado completamente(evento load de window).
// Que nos muestre una ventana alert con el mensaje "Página cargada".

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

// window.addEventListener('load', mostrarMensaje('Página cargada'));


// En esta página tienes tres bloques: uno de color rojo otro de color blanco y otro de color azul.
// Crea un script para que cuando el ratón se mueve desde el bloque rojo al central aparezca un mensaje indicándolo(alert).
// Si se mueve desde el azul al central, otro mensaje distinto indicándolo.
// Y si entra en el bloque desde otro sitio aparezca un tercer mensaje.

const bloqueRojo = document.getElementById('c1');
const bloqueBlanco = document.getElementById('c2');
const bloqueAzul = document.getElementById('c3');


function handler() {

    function verificarMovimiento(event) {
        const fromElement = event.relatedTarget;

        console.log(fromElement);

        if (fromElement === bloqueRojo) {
            mostrarMensaje('Movido desde el bloque rojo al bloque central (blanco)');
        } else if (fromElement === bloqueAzul) {
            mostrarMensaje('Movido desde el bloque azul al bloque central (blanco)');
        } else {
            mostrarMensaje('Entrada en el bloque central (blanco) desde otro lugar');
        }
    }

    bloqueBlanco.addEventListener('mouseover', verificarMovimiento);
}

document.addEventListener('DOMContentLoaded', handler);
