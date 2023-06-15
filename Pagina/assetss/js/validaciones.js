alert("La pagina esta lista para ser usada por el usuario");

document.body.onload = function () {

   alert("La se cargon exitosamente");

}


document.getElementsByTagName("button")[1].innerHTML = "Cancel";
document.getElementsByTagName("button")[0].innerHTML = "Send";