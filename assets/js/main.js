let container = document.querySelector(".container");
let numeroCaselle;
let listaCaselle;
let difficoltà = 0;
let bombe = [];
let bombaSingola;
let numeroBombe = 16;
let punteggio = 0;
let partita = true;

function easy(){
    if(difficoltà == 0){
        difficoltà = 1;
        numeroCaselle = 100;
        caselleGenerator(numeroCaselle,container);
        bombPlacer();
    }
}

function medium(){
    if(difficoltà == 0){
        difficoltà = 2;
        numeroCaselle = 81;
        caselleGenerator(numeroCaselle,container);
        bombPlacer();
    }
}

function hard(){
    if(difficoltà == 0){
        difficoltà = 3;
        numeroCaselle = 49;
        caselleGenerator(numeroCaselle,container);
        bombPlacer();
    }
}

function caselleGenerator(numeroCaselle,container){

    if(difficoltà == 1){
        for(let i = 0; i < numeroCaselle; i++){
            listaCaselle = document.getElementsByClassName("cell10");
            container.innerHTML += `<div class="cell10" id="${i}">${i + 1}</div>`
        };
    } else if(difficoltà == 2){
        for(let i = 0; i < numeroCaselle; i++){
            listaCaselle = document.getElementsByClassName("cell9");
            container.innerHTML += `<div class="cell9" id="${i}">${i + 1}</div>`
        };
    } else if(difficoltà == 3){
        for(let i = 0; i < numeroCaselle; i++){
            listaCaselle = document.getElementsByClassName("cell7");
            container.innerHTML += `<div class="cell7" id="${i}">${i + 1}</div>`
        };
    }
    

        for(let i = 0; i < listaCaselle.length; i++){
            let currentCell = listaCaselle[i];
            currentCell.addEventListener("click", function(){

                if(bombe.includes(Number(currentCell.id)) && partita == true){
                    currentCell.classList.toggle("red");
                    gameOver();
                } else if(!bombe.includes(Number(currentCell.id)) && partita == true) {
                    currentCell.classList.toggle("azzurro");
                    punteggio++;
                };

                
                console.log(currentCell.id);
            });
        };
};

function bombPlacer(){
    for(let i = 0; i < numeroBombe; i++){

        bombaSingola = Math.floor(Math.random()*numeroCaselle + 1);

        if(!bombe.includes(bombaSingola)){
            bombe.push(bombaSingola);
        } else {
            i--;
        };

    };
};

function gameOver(){
    console.log(punteggio);
    partita = false;
    alert("Hai totalizzato " + punteggio + " punti, migliora il tuo record!");
};