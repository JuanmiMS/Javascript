let persona = {
    nombre: "Juanmi",
    edad: 26,
    correo : "aa@aaa.com"
}

let nombre = "Juanan"

//Guardar en LocalStorage
localStorage.setItem("nombre", nombre);
localStorage.setItem("usuario", JSON.stringify(persona));


//Obtener datos de LocalStorage
let getNombre = localStorage.getItem("nombre");
document.getElementById("nombre").innerHTML = getNombre;


let getUsuario = JSON.parse(localStorage.getItem("usuario"))
let info="";

for (var clave in getUsuario){
    if (getUsuario.hasOwnProperty(clave)) {
      info+="<br>" +clave+ " -> " + getUsuario[clave];
    }
}

document.getElementById("usuario").innerHTML = info;