class Pokemon{
    constructor(imagenes, nombre, numero, tipo, altura, peso, evolucion){
        this.imagenes = imagenes;
        this.nombre = nombre;
        this.numero = numero;
        this.tipo = tipo;
        this.altura = altura;
        this.peso = peso;
        this.evolucion = evolucion;
    }

    to_html() {
        let htmlPokemon = '<div class="catalogo2">';
        htmlPokemon +=`<img src='${this.imagenes}'><br>`;
        htmlPokemon += `<span><a href='./index3.html?nombre=${this.nombre}'> ${this.nombre} </a></span><br>`;
        htmlPokemon += '</div>';
        console.log(htmlPokemon)
        return htmlPokemon;
    } 

    to_html2(){
        let htmlPokemon2 = '<div class="imagen-pokemones">';
        htmlPokemon2 +=`<img src='${this.imagenes}'><br>`;
        htmlPokemon2 += `<span><a href='./index3.html?nombre=${this.nombre}'> ${this.nombre} </a></span><br>`;
        htmlPokemon2 += `<span> Numero: ${this.numero} </span><br>`;
        htmlPokemon2 +=`<span> Tipo: ${this.tipo} </span><br>`;
        htmlPokemon2 += `<span> Altura: ${this.altura} </span><br>`;
        htmlPokemon2 += `<span> Peso: ${this.peso} </span><br>`;
        htmlPokemon2 += `<span> Debilidad: ${this.debilidad} </span><br>`;
        htmlPokemon2 += `<span> Evolucion: ${this.evolucion} </span><br>`;
        htmlPokemon2 += '</div>';
        return htmlPokemon2;
    }
}

export default Pokemon;

