import {arrNumbers} from './numbers.js';
import Content from './content.js';
import Alphabet from './Alphabet.js';


let blockLetters = document.querySelector(".block-letters");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");


let num = new Content(10);

console.log("value: "+num.test());
console.log("numbers: "+arrNumbers);

let alphabet = new Alphabet();
reset.addEventListener('click',alphabet.onLoad);


let arrLetters = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];
let arrColors = [
	'#1ae81a',
	'#d0aa15',
	'#ea873f',
	'#3067f8',
	'#ab11ce',
	'#e83939'];

let arrAnimate = ['animate-rotate-turn','animate-rotate-deg','animate-scale'];
let arrFigures = ['oval','square','circle'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let letter of arrLetters){
 
	let div = document.createElement('div');
	div.classList.add("common");
	div.innerHTML = letter;
	blockLetters.append(div); 

}

let getRandAnimate = getRandomInt(arrAnimate.length);
let getRandFigure = getRandomInt(arrFigures.length);
let classesToAdd = ['letter',arrAnimate[getRandAnimate],arrFigures[getRandFigure]];

blockLetters.addEventListener('click',onClick);
//let classesToAdd = ['letter','animate-rotate-turn'];
//let classesToAdd = ['letter','animate-scale'];
//div.classList.add(...classesToAdd);

function onClick(e){
    let getRandColor = getRandomInt(arrColors.length);
    console.log("Случайный цвет: "+getRandColor);
    console.log("Pressed: "+e.target.className);
    //classesToAdd.push(arrColors[+getRandColor]);

	if (e.target.className === "block-letters") return;
	let div = document.createElement('div');
	//div.classList.add('letter');
	div.classList.add(...classesToAdd);
	div.innerHTML = e.target.innerHTML;
	div.style.backgroundColor = arrColors[getRandColor];
	result.append(div); 
}

reset.addEventListener("click",()=> {
	let arrDelete = document.querySelectorAll(".letter");

	for (let elem of arrDelete){
		elem.remove();
	}
	
	getRandAnimate = getRandomInt(arrAnimate.length);
	getRandFigure = getRandomInt(arrFigures.length);
    classesToAdd = ['letter',arrAnimate[getRandAnimate],arrFigures[getRandFigure]];
})
