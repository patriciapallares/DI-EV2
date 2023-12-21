document.addEventListener('DOMContentLoaded', function () {
    const elemento = document.querySelector('.elemento1');
        elemento.addEventListener('click', function () {
            alert(`Haz hecho click en ${elemento.id}`);
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const elemento = document.querySelector('.elemento2');
        elemento.addEventListener('dblclick', function () {
            alert(`Doble click en ${elemento.id}`);
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const elemento = document.querySelector('.elemento3');

        elemento.addEventListener('mouseover', function () {
            alert(`El ratón está sobre ${elemento.id}`);
        });

        elemento.addEventListener('mouseout', function () {
            alert(`El ratón ha salido de ${elemento.id}`);
        });

        elemento.addEventListener('mousemove', function () {
            alert(`Movimiento del ratón en ${elemento.id}`);
        });
});