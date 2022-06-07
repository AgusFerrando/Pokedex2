import baseDatos from "./base_datos.js";
const base_datos = JSON.parse(baseDatos);


let carrousel = function() {
    let foto = document.getElementsByClassName("picture");
    let teller = 0;
    let teller1 = 0;
    let arrayFotos = [];
    
        while (teller < foto.length) {
                arrayFotos.push(foto[teller].getAttribute("src"));
                teller++;
        };
    
        arrayFotos.push(arrayFotos.shift());
                while (teller1 < foto.length) {
                    foto[teller1].setAttribute("src",arrayFotos[teller1]);
                    teller1++;
                };
          
};

window.onload = function () {
    setInterval(carrousel,1500);
}   



