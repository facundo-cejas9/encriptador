
//Funcion para validar texto, no se puede poner mayusculas ni caracteres especiales.

function validarTextoEntrada(input, patron) {
  let texto = input.value

  let letras = texto.split("")

  for (let x in letras) {
       letra = letras[x]

      if (!(new RegExp(patron, "i")).test(letra)) {
          letras[x] = ""
      }
  }

  input.value = letras.join("")
}


let txtSoloLetras = document.querySelector(".txtSoloLetras")
txtSoloLetras.addEventListener("input", function (event) {
    validarTextoEntrada(this, "[a-z ]")
})






//Funcion para encryptar
function encrypt() {
  let texto = document.querySelector(".txtSoloLetras").value.toLowerCase();
  //i es para que afecte a tanto mayus como minus
  //g afecta a toda la linea
  //m afecta a multiples lineas
 let  txtcifrado = texto.replace(/e/igm,"enter");
  txtcifrado = txtcifrado.replace(/o/igm,"ober");
   txtcifrado = txtcifrado.replace(/i/igm,"imes");
   txtcifrado = txtcifrado.replace(/a/igm,"ai");
   txtcifrado = txtcifrado.replace(/u/igm,"ufat");
   

  

   document.querySelector(".txtSoloLetras").value = ""
   document.querySelector(".textarea").innerHTML = txtcifrado;

  
  
}

//Funcion para desencryptar


function desencrypt() {
   let texto = document.querySelector(".txtSoloLetras").value.toLowerCase();
  let txtcifrado = texto.replace(/enter/igm,"e");
   txtcifrado = txtcifrado.replace(/ober/igm,"o");
   txtcifrado = txtcifrado.replace(/imes/igm,"i");
   txtcifrado = txtcifrado.replace(/ai/igm,"a");
   txtcifrado = txtcifrado.replace(/ufat/igm,"u");
   document.querySelector(".txtSoloLetras").value = ""
  document.querySelector(".textarea").innerHTML = txtcifrado;
  


}


//Funcion para copiar

function copiar() {
  let content = document.querySelector(".textarea");
  content.select();
  document.execCommand('copy');
  
  alert('Copiado!');
  
}
 
