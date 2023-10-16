import CreateButtons from "./CreateButtons.js";
import ShowItems from './ShowItems.js';
import Calculator from "./Calculator.js";
import Alphabet from "./Alphabet.js";

let taskContent = document.querySelector(".task_content");
let calculatorBlock = document.querySelector(".calculator");
let reset = document.querySelector(".reset");
let categories = document.querySelector(".categories");

let showItems = new ShowItems();
let calculator = new Calculator();
let alphabet = new Alphabet();
let createButtons = new CreateButtons();

alphabet.createStartItems();
createButtons.generateButtons();

let classes = showItems.classesToAdd();


categories.addEventListener('click',onCatClick);
taskContent.addEventListener('click', onTaskClick);
calculatorBlock.addEventListener('click', onCalculatorClick);

function onCatClick(event) {
    let key = event.target.textContent;
    alphabet.createStartItems(key);
}

function onTaskClick(event) {

    let key = event.target.dataset.key;
    let keyContent = event.target.innerHTML;

    switch (key) {
        case "letter":
            console.log("keyContent: " + keyContent + "\ntypeof "+typeof keyContent);
            showItems.createShowItem(keyContent,classes);
            break;
    }

}

function onCalculatorClick(event) {

    let key = event.target.dataset.key;
    let keyContent = event.target.innerHTML;

    calculator.createShowItem(keyContent,classes);
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
            calculator.createShowItem(calc,classes);
            break;
        default:
            calculator.getData(keyContent);
            break;

    }

}

reset.addEventListener("click", () => {
    calculator.reset();
    classes = showItems.classesToAdd();
})