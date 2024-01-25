Modificaciones:

En vez de una nave, asteroides y una base ahora el juego se basa en un bombero, fuego y un bebé al que tiene que rescatar.

La aplicación "Space Stars" es un juego simple implementado en HTML, JavaScript y CSS que involucra a un personaje (bombero) que debe llegar a un bebé evitando obstáculos (fuegos) y recogiendo elementos que le otorgan puntos adicionales (agua y relojes). Aquí hay una memoria descriptiva del código proporcionado:
Introducción

La aplicación web "Space Stars" es un juego interactivo con temática espacial implementado mediante HTML, CSS y JavaScript. El juego tiene como objetivo principal que el personaje controlado por el jugador (un bombero) alcance un bebé, evitando obstáculos como fuegos y recolectando elementos que proporcionan puntos adicionales.
Estructura HTML

El código HTML define la estructura básica de la página web. La aplicación consiste en dos secciones principales dispuestas en línea (en flexbox). La primera sección contiene información del juego, como el título, un mensaje descriptivo, la puntuación y el tiempo restante. La segunda sección incluye un canvas donde se dibuja el juego y un botón para mostrar la ubicación del jugador mediante geolocalización.
Archivos de Recursos (CSS e Imágenes)

Se utiliza un archivo de estilo CSS ("style.css") para definir la apariencia visual de la aplicación, como colores de fondo, tamaños de texto y formato de la página.

La aplicación utiliza imágenes para representar al bombero, el bebé, los fuegos, el agua y el reloj. Estas imágenes se cargan en el juego y se utilizan para representar visualmente los elementos del juego.
Funciones y Variables JavaScript

El archivo "script.js" contiene la lógica del juego. Aquí se definen variables para el canvas, el contexto 2D, las coordenadas del bombero, y se inicializan imágenes y valores de juego como la puntuación y el tiempo.

La función canvasStars es la función principal que se ejecuta al cargar la página. Esta función configura el canvas, pinta el fondo y otros elementos del juego, y establece un escuchador de teclado para permitir al jugador controlar el bombero.

Existen funciones específicas para pintar el fondo, bombero, bebé, fuegos, agua y reloj en el canvas. Cada una de estas funciones utiliza el contexto 2D del canvas para dibujar imágenes o formas geométricas en posiciones específicas.

La función moverBombero maneja los eventos del teclado para permitir que el jugador mueva el bombero en diferentes direcciones. Se verifica si el bombero se sale de los límites del canvas y se actualiza la posición del bombero en consecuencia. Además, se detectan colisiones con diferentes elementos del juego.

La función temporizador implementa un temporizador que decrementa el tiempo restante y actualiza la visualización del tiempo en la página. Si el tiempo llega a cero, se finaliza el juego.

La función detectarColision verifica si el bombero colisiona con fuegos, llega al bebé, o recoge agua o un reloj. Dependiendo de la colisión, se actualiza la puntuación, el tiempo y se finaliza el juego si es necesario.

La aplicación también incluye una función para geolocalización (geoFindMe) que muestra la ubicación del usuario utilizando la API de Geolocalización de HTML5.
Estilos CSS

El archivo de estilo CSS define la apariencia visual de la página, estableciendo colores de fondo, tamaños de texto y otros estilos visuales.
Conclusiones

En resumen, "Space Stars" es un juego interactivo simple que utiliza HTML, CSS y JavaScript para crear una experiencia de juego básica. Los jugadores controlan un bombero, evitan fuegos y recogen elementos para ganar puntos y tiempo extra. La aplicación demuestra el uso de eventos del teclado, manipulación de elementos de canvas, y la implementación de un temporizador.
