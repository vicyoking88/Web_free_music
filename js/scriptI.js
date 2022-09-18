function cargarTop3() {
	//solicita datos en diversos formatos
	var peticion = new XMLHttpRequest();
	// peticion.open('GET', 'datos.json');
	//metodo GET para pedir datos
	peticion.open("GET", "http://127.0.0.1:5500/datos.json");
	//funcion que se va a ejecutar cuando los datos lleguen
	peticion.onload = function () {
		if (peticion.status == 200) {
			//console.log('peticion.response: ', peticion.response);
			var datos = JSON.parse(peticion.response);
			console.log(datos);
			//cargamos los top 3 en un array
			var topAll = maxRepro(datos);

			//console.log(datos['canciones'].length);

			//cargamos al dom nombre primera cancion
			document.getElementById("top1").innerHTML =
				datos["canciones"][topAll[1]]["nombre"];
			//cargamos al dom la repruduccion de la primera cancion
			document.getElementById("top1C").innerHTML =
				"<audio src=" +
				"songs/" +
				datos["canciones"][topAll[1]]["ruta"] +
				" controls></audio>";

			//cargamos al dom nombre segunda cancion
			document.getElementById("top2").innerHTML =
				datos["canciones"][topAll[3]]["nombre"];
			//cargamos al dom la repruduccion de la segunda cancion
			document.getElementById("top2C").innerHTML =
				"<audio src=" +
				"songs/" +
				datos["canciones"][topAll[3]]["ruta"] +
				" controls></audio>";

			//cargamos al dom nombre tercera cancion
			document.getElementById("top3").innerHTML =
				datos["canciones"][topAll[5]]["nombre"];
			//cargamos al dom la repruduccion de la tercera cancion
			document.getElementById("top3C").innerHTML =
				"<audio src=" +
				"songs/" +
				datos["canciones"][topAll[5]]["ruta"] +
				" controls></audio>";
		}
	};
	peticion.send();
}

//cargamos el top3 al cargar la pagina principal
cargarTop3();

//con esto buscamos la cancion que tiene mas reproducciones
function maxRepro(datos) {
	let aRepro = [0, 0, 0, 0, 0, 0]; //array que cargamos con las top3
	for (var i = 0; i < datos["canciones"].length; i++) {
		monto = datos["canciones"][i]["reproducciones"];
		if (monto > aRepro[0]) {
			aRepro[0] = monto; //valor maximo de reproducciones
			aRepro[1] = i; //cancion con mayor numero de reproducciones
		} else {
			if (monto > aRepro[2] && monto <= aRepro[0]) {
				aRepro[2] = monto; //valor maximo de reproducciones
				aRepro[3] = i; //cancion con mayor numero de reproducciones
			} else {
				if (monto > aRepro[4] && monto <= aRepro[2]) {
					aRepro[4] = monto; //valor maximo de reproducciones
					aRepro[5] = i; //cancion con mayor numero de reproducciones
				}
			}
		}
	}
	return aRepro;
}
