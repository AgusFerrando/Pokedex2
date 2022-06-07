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




// window.onload = function () {
//     let ver= document.getElementsByClassName('picture');
//     for (let i=0; i<ver.length; i++){
//         ver[i].addEventListener("click", filtrar(ver[i].id))
//     }
//     setInterval(carrousel,1000);
// }    


// let filtrados;
// function filtrar(tipo){
   
//     filtrados= base_datos.filter(poke => poke.tipo.includes(tipo))
//     window.location.href="http://127.0.0.1:5501/index2.html";
// }

// export default filtrados;

