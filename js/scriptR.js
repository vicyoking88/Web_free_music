
//-----------------------------------------------------
//Formulario de registro

function validarForm(formulario){

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

  if (formulario.password.value != formulario.rPassword.value) {
    document.getElementById("errorConfirmacion").innerText = "Confirmación no coincide";
    formulario.rPassword.focus();
    return false;
  }

  if (formulario.gMusical.value == "") {
    document.getElementById("errorGenero").innerText = "Campo obligatorio";
    return false;
  }

  if (formulario.edad.value == "") {
    document.getElementById("errorEdad").innerText = "Campo obligatorio";
    return false;
  }

  if (!formulario.terminos.checked) {
    document.getElementById("errorTerminos").innerText = "Debe aceptar los términos y condiciones";
    formulario.terminos.focus();
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