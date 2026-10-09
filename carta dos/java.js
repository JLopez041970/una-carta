(function () {
    var sobre = document.getElementById('sobre');
    var boton = document.getElementById('botonCarta');
    var instruccion = document.getElementById('instruccion');
    var fondo = document.getElementById('fondoVivo');

    if (!sobre || !boton || !instruccion || !fondo) {
    return;
    }

    function alternarCarta() {
    var abierta = sobre.classList.toggle('abierto');
    sobre.setAttribute('aria-expanded', abierta ? 'true' : 'false');

    if (abierta) {
        boton.textContent = 'Cerrar mi carta';
        instruccion.textContent = 'Un mensaje escrito con mucho amor ♡';
    } else {
        boton.textContent = 'Abrir mi carta';
        instruccion.textContent = 'Tocá el sobre para abrirlo ♡';
    }
    }

    sobre.addEventListener('click', alternarCarta);
    boton.addEventListener('click', alternarCarta);

    var simbolos = ['♡', '♥'];
    var cantidad = 13;

    for (var i = 0; i < cantidad; i += 1) {
    var elemento = document.createElement('span');
    var esCorazon = i % 3 === 0;

    elemento.className = esCorazon
        ? 'particula corazon'
        : 'particula burbuja';

    elemento.setAttribute('aria-hidden', 'true');

    if (esCorazon) {
        elemento.textContent = simbolos[i % simbolos.length];
    }

    elemento.style.setProperty('--x', Math.random() * 100 + 'vw');
    elemento.style.setProperty('--tam', 7 + Math.random() * 12 + 'px');
    elemento.style.setProperty('--duracion', 18 + Math.random() * 18 + 's');
    elemento.style.setProperty('--espera', -Math.random() * 28 + 's');
    elemento.style.setProperty('--deriva', -35 + Math.random() * 70 + 'px');

    fondo.appendChild(elemento);
    }
}());