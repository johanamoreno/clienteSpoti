let uri="https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us";

let token="Bearer BQBpZB28bLHENCC4mvznOZ9i7aGxisACaTOJ5fgGDnHAwWpFIVvN8EtzMtT27pzBtk7Jz8yGTAd4pjeGusCyH8SQZpcQfDZwE-qwpFPGilNzQqfEh3uX4oHDO3dvRFIZIoYmaRqn0VrajKEuUbUbudcl5aBUqrY";
let prueba;

let parametrosPeticion={
 method:"GET",
 headers:{
    Authorization:token
 }

}

fetch(uri,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta);
})
.catch(function(error){
    console.log(error);
})