import baseDatos from "./base_datos.js";
const base_datos = JSON.parse(baseDatos);

function pokemon_to_index3 (nombre, imagenes, numero, tipo, peso, altura, debilidad){
    let pokemon2= '<div class="imagen-pokemones">';
    pokemon2 +=`<img src='${imagenes}'><br>`;
    pokemon2 += `<span> Numero: ${numero} </span><br>`;
    pokemon2 += `<span> Nombre: ${nombre} </span><br>`;
    pokemon2 += `<span> Tipo: ${tipo} </span><br>`;
    pokemon2 += `<span> Peso: ${peso} </span><br>`;
    pokemon2 += `<span> Altura: ${altura} </span><br>`;
    pokemon2 += `<span> Debilidad: ${debilidad} </span><br>`;
    // pokemon += `<span> evolucion: ${evolucion} </span><br>`;
    pokemon2 += `</div>`;
    return pokemon2;
}
let pokemon_html2 = "";

for (let i=0; i<1; i++){ 
    let imagenes = base_datos[i].imagenes;
    let nombre = base_datos[i].nombre;
    let numero = base_datos[i].numero;
    let tipo = base_datos[i].tipo;
    let peso = base_datos[i].peso;
    let altura = base_datos[i].altura;
    let debilidad = base_datos[i].debilidad;
    // let evolucion = base_datos[i].evolucion;
    

    pokemon_html2 += pokemon_to_index3(nombre,  imagenes, numero, tipo, peso, altura, debilidad)
}
document.querySelector('.marco3').innerHTML = pokemon_html2