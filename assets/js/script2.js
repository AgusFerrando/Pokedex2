import baseDatos from "./base_datos.js";
const base_datos = JSON.parse(baseDatos);


var url= new URL(window.location);
var params2 = new URLSearchParams(url.search)
let tipoParam2 = params2.get("nombre");
console.log(tipoParam2)

function filterBy2 (nombre){
    let filteredData2 = base_datos.filter(poke => poke.nombre.includes(nombre))
    return filteredData2;
}

let filtrados2 = filterBy2(tipoParam2);
console.log(filtrados2);

function pokemon_to_index3 (nombre, imagenes, numero, tipo, peso, altura, debilidad, evolucion){
    let pokemon2= '<div class="imagen-pokemones">';
    pokemon2 +=`<img src='${imagenes}'><br>`;
    pokemon2 += `<span> Numero: ${numero} </span><br>`;
    pokemon2 += `<span> Nombre: ${nombre} </span><br>`;
    pokemon2 += `<span> Tipo: ${tipo} </span><br>`;
    pokemon2 += `<span> Peso: ${peso} </span><br>`;
    pokemon2 += `<span> Altura: ${altura} </span><br>`;
    pokemon2 += `<span> Debilidad: ${debilidad} </span><br>`;
    pokemon2 += `<span> Evolucion: ${evolucion} </span><br>`;
    pokemon2 += `</div>`;
    return pokemon2;
}

let pokemon_html2 = "";
let imagenes = filtrados2[0].imagenes;
let nombre = filtrados2[0].nombre;
let numero = filtrados2[0].numero;
let tipo = filtrados2[0].tipo;
let peso = filtrados2[0].peso;
let altura = filtrados2[0].altura;
let debilidad = filtrados2[0].debilidad;
let evolucion =filtrados2[0].evolucion;
pokemon_html2 += pokemon_to_index3(nombre,  imagenes, numero, tipo, peso, altura, debilidad, evolucion);

console.log(imagenes);

document.querySelector('.marco3').innerHTML = pokemon_html2