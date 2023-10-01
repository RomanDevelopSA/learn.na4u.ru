import Alphabet from './Alphabet.js';
import Calculator from "./Calculator.js";

let taskContent = document.querySelector(".task_content");
let calculatorBlock = document.querySelector(".calculator");
let reset = document.querySelector(".reset");

let alphabet = new Alphabet();
let calculator = new Calculator();

alphabet.createStartItems();

taskContent.addEventListener('click', onTaskClick);
calculatorBlock.addEventListener('click', onCalculatorClick);

function onTaskClick(event) {

    let key = event.target.dataset.key;
    let keyContent = event.target.innerHTML;

    switch (key) {
        case "letter":
            console.log("keyContent: " + keyContent + "\ntypeof "+typeof keyContent);
            alphabet.createShowItem(keyContent);
            break;
    }

}

function onCalculatorClick(event) {

    let key = event.target.dataset.key;
    let keyContent = event.target.innerHTML;

    calculator.createShowItem(keyContent);
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
            calculator.createShowItem(calc);
            break;
        default:
            calculator.getData(keyContent);
            break;

    }

}

reset.addEventListener("click", () => {
    calculator.reset();
})