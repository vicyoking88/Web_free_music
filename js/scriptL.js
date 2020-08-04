
//---------------------------------------------
//validacion del login

function validarLogin(formulario) {

  limpiarErrores();

  if (formulario.email.value.trim().length == 0) {
    document.getElementById("errorEmail").innerText = "Campo obligatorio";
    formulario.email.focus();
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "No es un correo valido";
    formulario.email.focus();
    return false;
  }

  if (formulario.password.value.trim().length == 0) {
    document.getElementById("errorPassword").innerText = "Campo obligatorio";
    formulario.password.focus();
    return false;
  }

  if (formulario.password.value.trim().length < 8) {
    document.getElementById("errorPassword").innerText = "Mínimo 8 caracteres";
    formulario.password.focus();
    return false;
  }

  alert("Datos enviados");
  return true;

}

//limpiamos los errores
function limpiarErrores(){
  var errores = document.getElementsByClassName("error");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerHTML = "";
  }
}
