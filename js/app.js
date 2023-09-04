import Alphabet from './Alphabet.js';
import Numbers from "./Numbers.js";

let main = document.querySelector("main");
let taskContent = document.querySelector(".task_content");
let calculator = document.querySelector(".calculator");

let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let res = null;


let alphabet = new Alphabet();
let numbers = new Numbers();

alphabet.createStartItems();

function createBlockResult(){
    if (res === null) {
       res = document.createElement('div');
       res.classList.add('result');
        main.after(res);
    }
}


taskContent.addEventListener('click', onTaskClick);
calculator.addEventListener('click', onCalculatorClick);


function onTaskClick(event) {

    let key = event.target.dataset.key;
    let keyContent = event.target.innerHTML;
    
    createBlockResult();

    switch (key) {
        case "letter":
            console.log("letters: " + event.target.innerHTML);
            alphabet.createShowItem(res, keyContent);
            break;
    }

}

function onCalculatorClick(event) {

    let key = event.target.dataset.key;
    let keyContent = event.target.innerHTML;
    
    createBlockResult();

    switch (key) {
        case "add":
            console.log("add" );
            numbers.createShowItem(res, keyContent);
            break;
        case "subtract":
            console.log("subtract");
            break;
        case "calculate":
            console.log("calculate");
            break;
        default:
            console.log("reset");
            break;

    }

}


reset.addEventListener("click", () => {
    if (res !== null) {
        res.remove();
        res = null;
    }

})