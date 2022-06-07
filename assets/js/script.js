import baseDatos from "./base_datos.js";
const base_datos = JSON.parse(baseDatos);

let filtrados;
window.onload = function () {
    filtrados= base_datos.filter(poke => poke.tipo.includes(global.filterTipo))
}

function pokemon_to_html (nombre, imagenes){
    let pokemon = '<div class="catalogo2">';
    pokemon +=`<img src='${imagenes}'><br>`;
    pokemon += `<span> ${nombre} </span><br>`;
    pokemon += '</div>';
    return pokemon;
}

let pokemon_html = "";

for (let i=0; i<base_datos.length; i++){ 
    let nombre = base_datos[i].nombre;
    let imagenes = base_datos[i].imagenes;
    pokemon_html += pokemon_to_html(nombre,  imagenes)
}

document.querySelector('.catalogo').innerHTML = pokemon_html


