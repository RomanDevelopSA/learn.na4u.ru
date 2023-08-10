import {arrNumbers} from './numbers.js';
import Alphabet from './Alphabet.js';

let main = document.querySelector("main");
let section = document.querySelector("section");
let blockLetters = document.querySelector(".block-letters");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let res = null;


let alphabet = new Alphabet();


let arrLetters = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П',
    'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'
];


for (let letter of arrLetters){
    
    let div = document.createElement('div');
    div.dataset.show = "letter";
	div.classList.add("common");
	div.innerHTML = letter;
	blockLetters.append(div); 

}


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