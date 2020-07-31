function cargarTop3() {
  //solicita datos en diversos formatos
  var peticion = new XMLHttpRequest();
  // peticion.open('GET', 'datos.json');
  //metodo GET para pedir datos
  peticion.open('GET', 'http://127.0.0.1:5500/datos.json');
  //funcion que se va a ejecutar cuando los datos lleguen
  peticion.onload = function () {
    if (peticion.status == 200) {
      //console.log('peticion.response: ', peticion.response);
      var datos = JSON.parse(peticion.response)

      console.log(maxRepro(datos));

      //console.log(datos['canciones'].length);
      document.getElementById("contenido").innerHTML = "Nombre  : " + datos['canciones'][0]['nombre'];
    }
  }
  peticion.send();
}



//con esto buscamos la cancion que tiene mas reproducciones
function maxRepro(datos) {
  let aRepro = [0, 0, 0, 0, 0, 0];
  for (var i = 0; i < datos['canciones'].length; i++) {
    monto = datos['canciones'][i]['reproducciones']
    if (monto > aRepro[0]) {
      aRepro[0] = monto;//valor maximo de reproducciones
      aRepro[1] = i;//cancion con mayor numero de reproducciones
    } else {
      if (monto > aRepro[2] && monto < aRepro[0]) {
        aRepro[2] = monto;//valor maximo de reproducciones
        aRepro[3] = i;//cancion con mayor numero de reproducciones
      } else {
        if (monto > aRepro[4] && monto < aRepro[2]) {
          aRepro[4] = monto;//valor maximo de reproducciones
          aRepro[5] = i;//cancion con mayor numero de reproducciones
        }
      }
    }
  }
  return aRepro;
}
/*
function max3Repro(datos) {
  var masRepro = new Object();
  masRepro.canR=0;
  for (var i = 0; i < datos['canciones'].length ; i++) {
    monto = datos['canciones'][i]['reproducciones']
    if (monto > masRepro['canR']) {

    }
  }
  return aRepro;

}
*/

