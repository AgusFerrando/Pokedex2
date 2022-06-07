import baseDatos from "./base_datos.js";
const base_datos = JSON.parse(baseDatos);


var url= new URL(window.location);
var params = new URLSearchParams(url.search)
let tipoParam = params.get("tipo");
console.log(tipoParam)

function filterBy (tipo){
    let filteredData = base_datos.filter(poke => poke.tipo.includes(tipo))
    return filteredData;
}

let filtrados = filterBy(tipoParam);
console.log(filtrados);

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


