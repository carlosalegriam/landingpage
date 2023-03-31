function saludo() {
  alert("Hola Amigo");
  var nombre = prompt("Ingrese su nombre: ");
  alert("hola " + nombre);
}

var inicio = document.getElementsByClassName("link")[0];

inicio.addEventListener("click", function() {
  saludo();
});

function despedida() {
  alert("Gracias por visitar la página");
}

var acerca = document.getElementsByClassName("link")[1];

acerca.addEventListener("click", function() {
  despedida();
});