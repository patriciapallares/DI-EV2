document.addEventListener('DOMContentLoaded', function() {
    const elemento = document.querySelector('.elemento1');
  
      elemento.addEventListener('touchstart', function(event) {
        event.preventDefault();
        alert(`Inicio de toque en ${elemento.textContent}`);
      });
  
      elemento.addEventListener('touchcancel', function(event) {
        event.preventDefault();
        alert(`Cancelación de toque en ${elemento.textContent}`);
      });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const elemento = document.querySelector('.elemento3');
  
      elemento.addEventListener('touchmove', function(event) {
        event.preventDefault();
        alert(`Movimiento de toque en ${elemento.textContent}`);
      });
  
      elemento.addEventListener('touchcancel', function(event) {
        event.preventDefault();
        alert(`Cancelación de toque en ${elemento.textContent}`);
      });
  });

