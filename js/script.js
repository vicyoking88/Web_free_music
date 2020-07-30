function cargarTop3() {
  //solicita datos en diversos formatos
  var peticion = new XMLHttpRequest();
  // peticion.open('GET', 'datos.json');
  //metodo GET para pedir datos
  peticion.open('GET', 'http://127.0.0.1:5500/datos.json');
  //funcion que se va a ejecutar cuando los datos lleguen
  peticion.onload = function () {
    if (peticion.status == 200) {
      // console.log('peticion.response: ', peticion.response);
      var datos = JSON.parse(peticion.response)
      // console.log('datos: ', datos);
      document.getElementById("canciones").innerHTML = "Nombre  : " + datos.canciones.nombre;
    }
  };
  peticion.send();
}

cargarTop3();