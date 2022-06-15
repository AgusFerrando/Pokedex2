import Pokemon from "./pokemon.js";
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

let pokemonList3 = [];

let poke2 = new Pokemon (filtrados2[0].imagenes,
                         filtrados2[0].nombre,
                         filtrados2[0].numero,
                         filtrados2[0].tipo,
                         filtrados2[0].altura,
                         filtrados2[0].peso,
                         filtrados2[0].debilidad,
                         filtrados2[0].evolucion).to_html2()

pokemonList3.push(poke2);
let pokemonList4 = pokemonList3.toString();


document.querySelector('.marco3').innerHTML = pokemonList4
