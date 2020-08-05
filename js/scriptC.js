
//buscar canciones
function cargarCanciones() {

  $.ajax({
    url: "http://127.0.0.1:5500/datos.json"
  }).done(function (todasCanciones) {

    busca = "vi";
    //console.log(todasCanciones);

    for (var i = 0; i < todasCanciones['canciones'].length; i++) {

      var nomCancion = todasCanciones['canciones'][i]['nombre'];
      //console.log(nomCancion);

      var canCoincide = nomCancion.indexOf(busca);
      console.log(canCoincide);
      
      if (canCoincide != -1) {

        //document.getElementById("tCanciones").innerHTML=
        var resulCanciones = document.getElementById("tCanciones");
        var newDiv = document.createElement("div"); //cada vez que recorra el for creamos un div nuevo
        newDiv.className = "col col-md-4"
        newDiv.innerHTML =
        
            "<div class='card'>"+
                "<div class='card-header text-center'>"+
                  "<img src='images/icon_"+(todasCanciones['canciones'][i]['icono'])+".svg' alt='logo 4' width='100'>"+
                "</div>"+
                "<div class='card-body'>"+
                  "<h5 class='card-title text-center'>"+(todasCanciones['canciones'][i]['nombre'])+"</h5>"+
                  "<audio src='songs/"+(todasCanciones['canciones'][i]['ruta'])+"' controls></audio>"+
                "</div>"+
            "</div>";
           
         
        resulCanciones.appendChild(newDiv);
        
    }
    
    }

  });
};

//cargarCanciones();

// boton buscar cancion
$( document ).ready(function() {
 
  $("button.buscar").click(function(){
    cargarCanciones();
  })

});