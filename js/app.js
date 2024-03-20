import CreateButtons from "./CreateButtons.js";
import ShowItems from './ShowItems.js';
import CalculatorComplicated from "./CalculatorComplicated.js";
import CalculatorSimple from "./CalculatorSimple.js";
import Alphabet from "./Alphabet.js";

let taskContent = document.querySelector(".task_content");
let calculatorBlock = document.querySelector(".calculator");
let reset = document.querySelector(".reset");
let categories = document.querySelector(".categories");

let showItems = new ShowItems();
let calculator = new CalculatorComplicated();
let calculatorSimple = new CalculatorSimple();
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

    showItems.createShowItem(keyContent,classes);
    let calc;
    let num;
    let arrNums=[];

    switch (key) {
        case "plus":
            //calculator.getOperator(keyContent);
            console.log("plus");
            break;
        case "minus":
            //calculator.getOperator(keyContent);
            console.log("minus");
            break;
        case "calculate":
            //calc = calculator.calculate();

            showItems.createShowItem(calc,classes);
            break;
        case "digit":
            //calculator.getNumber(keyContent);
            break;

    }

}

reset.addEventListener("click", () => {
    //calculator.reset();
    calculatorSimple.reset();
    classes = showItems.classesToAdd();
})