

function muestraOculta(param) {
    let enlace = document.getElementById(`enlace_${param}`);
    let parrafo = document.getElementById(`contenidos_${param}`);

    parrafo.classList.toggle('hide');
    if(parrafo.classList.contains('hide')){
        enlace.innerHTML="Mostrar contenidos"
    }else{
        enlace.innerHTML="Ocultar contenidos"
    }
}