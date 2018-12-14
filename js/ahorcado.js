
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


function generaABC (a,z) {
  document.getElementById("abcdario").innerHTML = "";
  var i = a.charCodeAt(0), j = z.charCodeAt(0);
  var letra = "";
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
    if(i==110) {
      document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
    }
  }
}

function intento(letra){
  document.getElementById(letra).disable = true;
  if (palabra.indexOf(letra) != -1){
    for (i = 0; i < palabra.length; i++){
      if(palabra[i]==letra) oculta[i] = letra;
    }
    hueco.innerHTML = oculta.join(" ")
    document.getElementById ("acierto").innerHTML = "Bien!";
    document.getElementById ("acierto").className += "acierto verde";
  }else{
    cont--;
    document.getElementById ("intentos").innerHTML = cont;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("acierto").innerHTML = "Fallo!";
    document.getElementById("acierto").className += "acierto rojo";
    document.getElementById("image"+ cont).className += "fade-in";
 }
 compruebaFin();
  setTimeout(function () { 
    document.getElementById("acierto").className = " ";
  }, 800);

}

function compruebaFin(){
  if (oculta.indexOf(" ") == -1) {
    document.getElementById("msg-final").innerHTML = "felicidades !!";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function() { location.reload() };
  }else if( cont == 0 ) {
    document.getElementById("msg-final").innerHTML = "Game Over";
    document.getElementById("msg-final").className += "zoom-in";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () { location.reload() };
}
}
function inicio() {
  generarPalabra();
  generarLineas(palabra.length);
  cont = 6;
  document.getElementById("intentos").innerHTML=cont;
}

// Iniciar
window.onload = inicio();
