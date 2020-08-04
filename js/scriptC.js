
//buscar canciones
function cargarCanciones() {

$.ajax({
  url: "http://127.0.0.1:5500/datos.json"
}).done(function(todasCanciones){
  
  busca="hoy";
  //console.log(todasCanciones);
  

  for (var i = 0; i < todasCanciones['canciones'].length; i++) {

    var concide=todasCanciones['canciones'][i]['nombre'];
    console.log(concide);
    
    while (concide==busca) {
      console.log(concide)
      busca="";
    }

  }

  var str = "Hello world, welcome to the universe.";
  var buscarC = str.indexOf("e");
  console.log(buscarC);

});
};


cargarCanciones();