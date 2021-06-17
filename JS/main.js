
var menu = document.querySelector('.menu');

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menu.style.top = "0";
  } else {
    menu.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


var container_nosotros = document.querySelector('.container-nosotros');
var leer_mas = document.querySelector('#leer-mas');
var ocultar = document.querySelector('#ocultar');

leer_mas.addEventListener('click', () =>{
    container_nosotros.style.display = 'flex';
    container_nosotros.style.transition = 'all 0.6s';
    leer_mas.style.display = 'none';
    ocultar.style.display = 'flex';
})
ocultar.addEventListener('click', () =>{
    container_nosotros.style.display = 'none';
    leer_mas.style.display = 'flex';
    ocultar.style.display = 'none';
})

function validar_datos () {
  let datos = [];
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  let numero = document.getElementById('numero').value;
  let mensaje = document.getElementById('mensaje').value;

  
  if(nombre != '' && email != '' &&  numero != '' && mensaje != ''){
    alert('Gracias por contactarnos, te responederemos a la brevedad')
  } 
}