
//buscar canciones
function cargarCanciones(buscando) {

  var busca = buscando.toLowerCase();

  $.ajax({
    url: "http://127.0.0.1:5500/datos.json"
  }).done(function (todasCanciones) {

    //busca="";
    limpiarBusqueda();

    for (var i = 0; i < todasCanciones['canciones'].length; i++) {

      var nomCancion = todasCanciones['canciones'][i]['nombre'];
      console.log(busca);
      console.log(nomCancion);

      var canCoincide = nomCancion.indexOf(busca);
      console.log(canCoincide);

      if (canCoincide != -1) {

        //document.getElementById("tCanciones").innerHTML=
        var resulCanciones = document.getElementById("tCanciones");
        var newDiv = document.createElement("div"); //cada vez que recorra el for creamos un div nuevo
        newDiv.className = "col-12 col-sm-6 col-md-4"
        newDiv.innerHTML =

          "<div class='card text-center'>" +
          "<div class='card-header'>" +
          "<img src='images/icon_" + (todasCanciones['canciones'][i]['icono']) + ".svg' alt='logo 4' width='100'>" +
          "</div>" +
          "<div class='card-body'>" +
          "<h5 class='card-title'>" + (todasCanciones['canciones'][i]['nombre']) + "</h5>" +
          "<audio onplay='conteoTop()' src='songs/" + (todasCanciones['canciones'][i]['ruta']) + "' controls></audio>" +
          "</div>" +
          "</div>";
        resulCanciones.appendChild(newDiv);

      }

    }

  });
};

// entrada de busqueda
$(document).ready(function () {

  $("input.buscar").keypress(function () {
    cargarCanciones($("#cancionBus").val());
  })

});

// limpiar busqueda
function limpiarBusqueda() {
  document.getElementById("tCanciones").innerHTML = "<div></div>";
}

cargarCanciones("");

//conteo de reproducciones

function conteoTop (){

  window.setTimeout(function() { $(".alert-message").alert('close'); }, 2000);
   // alert("reproduccion en curso")
}
