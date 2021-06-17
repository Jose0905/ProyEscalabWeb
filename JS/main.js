
var menu = document.querySelector('.menu');

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menu.style.top = "0";
  } else {
    menu.style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}


var container_nosotros = document.querySelector('.container-nosotros');
var leer_mas = document.querySelector('#leer-mas');
var ocultar = document.querySelector('#ocultar');

leer_mas.addEventListener('click', () =>{
    container_nosotros.classList.add('mostrar');
    leer_mas.classList.add('esconder');
    ocultar.style.display = 'flex';
});
ocultar.addEventListener('click', () =>{
    container_nosotros.classList.remove('mostrar');
    leer_mas.classList.remove('esconder');
    ocultar.style.display = 'none';
});
// leer_mas.addEventListener('click', () =>{
//   container_nosotros.style.display = 'flex';
//   leer_mas.style.display = 'none';
//   ocultar.style.display = 'flex';

// });
// ocultar.addEventListener('click', () =>{
//     container_nosotros.style.display = 'none';
//     leer_mas.style.display = 'flex';
//     ocultar.style.display = 'none';
// })


function validar_datos () {
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  let numero = document.getElementById('numero').value;
  let mensaje = document.getElementById('mensaje').value;

  
  if(nombre != '' && email != '' &&  numero != '' && mensaje != ''){
    alert('Gracias por contactarnos, te responederemos a la brevedad');
  } 

}

var logo = document.getElementById('logo');
var lista = document.querySelector('.lists')
var nav = document.getElementById('menu');
var open = document.getElementById('open');
var close = document.getElementById('close');

function esconder(){
  let arreglo = [];
  var lista1 = document.getElementById('lista1');
  var lista2 = document.getElementById('lista2');

  arreglo.push(lista1, lista2);
  for(let i = 0; i < arreglo.length; i++){
    arreglo[i].addEventListener('click', () => {
      open.classList.remove('esconder');
      nav.classList.remove('menuAbierto');
      logo.classList.remove('esconder');
      close.classList.remove('mostrarIcono');
      lista.classList.remove('listaAbierta');
  })
  }
}

open.addEventListener('click', () => {
  open.classList.add('esconder');
  nav.classList.add('menuAbierto');
  logo.classList.add('esconder');
  close.classList.add('mostrarIcono');
  lista.classList.add('listaAbierta');
  esconder();
});
close.addEventListener('click', () => {
  open.classList.remove('esconder');
  nav.classList.remove('menuAbierto');
  logo.classList.remove('esconder');
  close.classList.remove('mostrarIcono');
  lista.classList.remove('listaAbierta');
});