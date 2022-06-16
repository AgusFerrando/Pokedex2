import Pokemon from "./pokemon.js";
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

let pokemonList = [];

for (let i=0; i<filtrados.length; i++){  
    let poke = new Pokemon ( filtrados[i].imagenes,
                         filtrados[i].nombre ).to_html()
    
    pokemonList.push(poke);
    
}   let pokemonList2 = pokemonList.toString();


document.querySelector('.catalogo').innerHTML = pokemonList2

module.exports= filterBy;