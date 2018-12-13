
var palabras = ["atlantico", "ordenador", "laurel", "plaza", "rueda", "cereza", "celular", "Roble", "guadalajara"]; 
var palabra = "";
var rand;
var oculta = [];
var hueco = document.getElementById("palabra");
var cont = 6;
var buttons = document.getElementsByClassName('letra');
var btnInicio = document.getElementById("reset");

function generarPalabra (){
  var rand = (Math.random()*9).toFixed(0);
  palabra = palabras[rand].toUpperCase();
  console.log(rand,palabra);
} 

function generarLineas(){
  for (i = 0; i < palabra.length; i++) {
    oculta [i] = "_";
  }
  hueco.innerHTML = oculta.join(" ");
}

generarPalabra();
generarLineas();
