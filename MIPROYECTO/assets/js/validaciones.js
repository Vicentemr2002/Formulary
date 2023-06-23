$(document).ready(function(){

    $("#formulario_container").submit(function(){

       var id = $("#id").val();
       var nombre = $("#nombre").val();
       var img = $("#img").val();
       var descripcion = $("#descripcion").val();
       var precio = $("#precio").val();
       var Id = $("#Id").val();
       var error = [];
       if ($.trim(id) == ''){
          error.push("Debe completar el espacio Producto");
       }
       if ($.trim(nombre) == ''){
        error.push("Debe completar el espacio Nombre");
       }
       if ($.trim(img) == ''){
        error.push("Debe completar el espacio Imagen");
       }
       if ($.trim(descripcion) == ''){
        error.push("Debe completar el espacio Descripcion");
       }
       if ($.trim(precio) == ''){
        error.push("Debe completar el espacio Precio");
       }
       if ($.trim(Id) == ''){
        error.push("Debe completar el espacio Categoria");
       }
       if (error.length > 0) {
        alert(error.join("\n"));
        return false
       } else {
        return true
       }
    });



});