let uri = "https://accounts.spotify.com/api/token";

let dato1 = "grant_type=client_credentials";
let dato2 = "client_id=8f58bfee69474320971256bb26521ee4";
let dato3 = "client_secret=993a825013c34010a01636317f7fd201";

let parametrosPeticion = {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: dato1 + "&" + dato2 + "&" + dato3

}

fetch(uri, parametrosPeticion)
    .then(function (respuesta) {
        return (respuesta.json())
    })
    .then(function (respuesta) {
        console.log(respuesta)
        obtenerToken(respuesta)
    })
    .catch(function (error) {
        console.log(error)
    })

function obtenerToken(datos) {
    let token = datos.token_type + " " + datos.access_token
    console.log(token)
    pedirCanciones(token)
}

function pedirCanciones(token) {
    let uri = "https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us";
    let parametrosPeticion = {
        method: "GET",
        headers: {
            Authorization: token
        }

    }
    fetch(uri, parametrosPeticion)
        .then(function (respuesta) {
            return (respuesta.json());
        })
        .then(function (respuesta) {
            console.log(respuesta);//Objeto
            pintarDatos(respuesta.tracks);

        })
        .catch(function (error) {
            console.log(error);
        })

    function pintarDatos(datos) {

        let fila = document.getElementById("fila");
        datos.forEach(function (cancion) {

            let columna = document.createElement("div");
            columna.classList.add("col");

            let tarjeta = document.createElement("div");
            tarjeta.classList.add("card");
            tarjeta.classList.add("h-100");

            let imagen = document.createElement("img");
            imagen.classList.add("card-img-top");
            imagen.src = cancion.album.images[0].url;

            let body = document.createElement("div");
            body.classList.add("card-body");

            let titulo = document.createElement("h3");
            titulo.classList.add("text-center");
            titulo.textContent = cancion.name;

            let popularidad = document.createElement("h6");
            popularidad.classList.add("text-center");
            popularidad.textContent = cancion.popularity;

            let audio = document.createElement("audio");
            audio.classList.add("w-100");
            audio.setAttribute("controls", "controls")
            audio.src = cancion.preview_url;

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(audio);
            tarjeta.appendChild(body);
            columna.appendChild(tarjeta);
            fila.appendChild(columna);
            body.appendChild(titulo);
            body.appendChild(popularidad);





        })

    }

}