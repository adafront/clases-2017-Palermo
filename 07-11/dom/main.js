//var cajas = document.getElementsByTagName('div');
var cajas = document.getElementsByClassName('caja');

var primeraCaja = document.getElementById('primeraCaja');

//cajas[0].textContent = "Hola mundo";

primeraCaja.innerHTML = '<h1>Hola mundo</h1>';

var caja = document.createElement('div');
var contenido = document.createTextNode('Hola');
caja.appendChild(contenido);

caja.setAttribute('class','caja naranja');

var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);



