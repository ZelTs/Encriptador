//Función para limpiar text area

function clearInput() {
    document.getElementById("txt-st").value =" ";
  }

/* función para encriptar texto */
function enText(){ 
  var input = document.getElementById("txt-nd");
  const text = document.getElementById("txt-st").value;

  if (text=="" || text==" ") { 
    alert("No ha ingresado ningún mensaje");
  }else{
    let enText = text.replace(/e/igm, "enter");
    enText = enText.replace(/o/igm, "ober");
    enText = enText.replace(/i/igm, "imes");
    enText = enText.replace(/a/igm, "ai");
    enText = enText.replace(/u/igm, "ufat");

    input.focus();
     //document.getElementById("txt-nd").style.display = "show";
     //document.getElementById("txt-nd").style.display = "inherit";
     document.getElementById("txt-nd").innerHTML = enText;
  }
}

/* Función para desencriptar */
function unText(){
  const text = document.getElementById("txt-st").value.toLowerCase();
  var input = document.getElementById("txt-nd");

  if (text==" ") { 

      alert("Debe ingresar un mensaje a desencriptar");
  
  } else {
      input.focus();
      let unText = text.replace(/enter/igm, "e");
      unText = unText.replace(/ober/igm, "o");
      unText = unText.replace(/imes/igm, "i");
      unText = unText.replace(/ai/igm, "a");
      unText = unText.replace(/ufat/igm, "u");
      document.getElementById("txt-nd").innerHTML = unText;
  }
}

/* Botón copiar */

function copyText(){
  var codigoACopiar = document.getElementById("txt-nd");
  var seleccion = document.createRange();
  
  seleccion.selectNodeContents(codigoACopiar);  
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(seleccion);
  res = document.execCommand('copy');
  window.getSelection().removeRange(seleccion);
  alert("Mensaje copiado correctamente");
  location.reload();
}


var inputFocus = document.getElementById("txt-st");

inputFocus.focus();

const btnCopy = document.getElementById("bcopy");
btnCopy.addEventListener("click", copyText);


const btnDecrypt = document.getElementById("bunencrypt");
btnDecrypt.addEventListener("click", unText);

const encriptar = document.getElementById("bencrypt");
encriptar.addEventListener("click", enText);


