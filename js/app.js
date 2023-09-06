import Alphabet from './Alphabet.js';
import Calculator from "./Calculator.js";

let main = document.querySelector("main");
let taskContent = document.querySelector(".task_content");
let calculatorBlock = document.querySelector(".calculator");

let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let res = null;


let alphabet = new Alphabet();
let calculator = new Calculator();

alphabet.createStartItems();

function createBlockResult(){
    if (res === null) {
       res = document.createElement('div');
       res.classList.add('result');
        main.after(res);
    }
}


taskContent.addEventListener('click', onTaskClick);
calculatorBlock.addEventListener('click', onCalculatorClick);


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
    let keyContent = event.target.textContent;

    createBlockResult();
    calculator.createShowItem(res, keyContent);
    let calc;

    switch (key) {
        case "add":
            calculator.getOperator(keyContent);
            break;
        case "subtract":
            console.log("subtract");
            break;
        case "calculate":
            calc = calculator.calculate();
            calculator.createShowItem(res, calc);
            break;
        default:
            calculator.getData(keyContent);
            break;

    }

}


reset.addEventListener("click", () => {
    if (res !== null) {
        res.remove();
        res = null;
    }

    calculator.reset();

})