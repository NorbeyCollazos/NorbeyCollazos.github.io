function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Por favor escriba el nommbre";
        $("#mensaje_formulario").modal("show");
        return false;
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Por favor ingrese el correo";
        $("#mensaje_formulario").modal("show");
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Formato de correo inválido";
            $("#mensaje_formulario").modal("show");
            return false;
        }
    }
    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Por favor escriba el asunto";
        $("#mensaje_formulario").modal("show");
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Por favor escriba el mensaje";
        $("#mensaje_formulario").modal("show");
        return false;
    }
    document.querySelector('.status_send').innerHTML = "Gracias por su mensaje, pronto le estaré dando respuesta";
  }