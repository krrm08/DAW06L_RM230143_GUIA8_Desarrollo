var valor;
function init(){
 var seleccion = document.getElementById("seleccionar");
 if(seleccion.addEventListener){
 seleccion.addEventListener("click", mostrar, false);
 }
 else if(seleccion.attachEvent){
 seleccion.attachEvent("onclick", mostrar);
 }
}
function mostrar(){

 var opcion =
document.form.methods.options[document.form.methods.selectedIndex].value;
 switch(opcion){
 case "api":

 localStorage.setItem('bienvenida', 'Bienvenidos a localStorage con API de JavaScript');
 valor = localStorage.getItem('bienvenida');
 break;
 case "array":

 localStorage['bienvenida'] = 'Bienvenidos, también podemos usar notación de matrices';
 valor = localStorage['bienvenida'];
 break;
 case "object":

localStorage.bienvenida = 'Bienvenidos, igual podemos usarlo como propiedades de objeto';
 valor = localStorage.bienvenida;
 break;
 default:
 alert("Esta opción no existe");
 break;
 }
 var contenido = document.getElementById("content");
 contenido.innerHTML = "<p>\nUsando : <strong>" + opcion + "</strong> - " +
valor + "\n\t</p>\n";
}
if(window.addEventListener){
 window.addEventListener("load", init, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", init);
}