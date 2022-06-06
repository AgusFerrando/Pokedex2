import global from "./global.js";
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

for (let i=0; i<filtrados.length; i++){ 
    let nombre = filtrados[i].nombre;
    let imagenes = filtrados[i].imagenes;
    pokemon_html += pokemon_to_html(nombre,  imagenes)
}

document.querySelector('.catalogo').innerHTML = pokemon_html


