function validateForm(){
	var iniciaMayuscula = (/^[A-Z], [a-z]*$/);
	var nombre = document.getElementById("nombre");
	if(nombre === iniciaMayuscula){
	return false;
}alert("Escribe tu nombre con mayúscula inicial.");
	/*  = /^[A-Z], [a-z]*$/;

	/* Código que debería funcionar para que el usuario seleccione un elemento del listado de opciones
	listado = document.getElementById("lista").selectedIndex;
		if( listado == null || listado == 0 ) {
  		return false;
  	*/