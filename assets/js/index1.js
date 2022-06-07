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
    let ver= document.getElementsByClassName('select');
    for (let i=0; i<ver.length; i++){
        ver[i].addEventListener("click", e => filtrar(ver[i].id, e))
    }
    setInterval(carrousel,2000);
}    



function filtrar(tipo, event){
    event.preventDefault();
    global.filterTipo= tipo;
    window.location.href="http://127.0.0.1:5501/index2.html";
}

