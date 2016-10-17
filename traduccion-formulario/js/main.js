//Se obtiene el elemento por el ID y con innerHTML se indica que cambie el texto de ese elemento.
var inicioFormulario = document.getElementById("form-signin-heading").innerHTML = ("Por favor inicia sesión");
//Se obtiene el elemento por el ID y se indica que cambie el contenido del placeholder.
var correoElec = document.getElementById("inputEmail").placeholder = ("Correo Electrónico");
var contraseña = document.getElementById("inputPassword").placeholder = ("Contraseña");
//Se obtiene el elemento por el nombre de etiqueta y se indica la posición que ocupa "[0]" por si hubiera más elementos que coincidan con el nombre de etiqueta. Luego con innerHTML se indica que cambie el texto contenido en la etiqueta.
var recordar = document.getElementsByTagName("span")[0].innerHTML = ("Recordar datos");
var recordar = document.getElementsByTagName("button")[0].innerHTML = ("Iniciar sesión");