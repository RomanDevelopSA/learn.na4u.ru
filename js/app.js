import Alphabet from './Alphabet.js';

let main = document.querySelector("main");

let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let res = null;


let alphabet = new Alphabet();

document.addEventListener('click',testClick);
function testClick(event){

    let elem1 = event.target.dataset.show;
    if(res === null){
        res = document.createElement('div');
        res.classList.add('result');
        main.after(res);
    }

    switch(elem1){
        case "number":
            console.log("num: "+event.target.innerHTML);
            alphabet.createShowItem(res,event);
            break;
        case "letter":
            console.log("letters: "+event.target.innerHTML);
            alphabet.createShowItem(res,event);
            break;
    }
}


reset.addEventListener("click",()=> {
    if(res !== null){
        res.remove();
        res = null;
    }

    alphabet = new Alphabet();

})