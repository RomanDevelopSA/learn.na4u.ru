import Alphabet from './Alphabet.js';

let main = document.querySelector("main");
let section = document.querySelector("section");
let blockLetters = document.querySelector(".block-letters");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let res;


let alphabet = new Alphabet();
//reset.addEventListener('click',alphabet.onLoad);


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



document.addEventListener('click',testClick);
function testClick(event){
    
    let elem = event.target.closest("section").className;
    let elem1 = event.target.closest("section").dataset.show;
    
    console.log("dataset work: "+elem);
    console.log("dataset work1: "+elem1);
    //console.log("attr: "+section.getAttribute('dataShow'));
    
    //if(event.target.closest("section").dataset.show) {
        //!("someDataAttr" in el.dataset)
    //}
    if (elem === "block-letters") return;
    
    switch(elem1){
        case "numbers":
            console.log("num: "+event.target.innerHTML);
            break;
        case "letters":
            console.log("letters: "+event.target.innerHTML);
            break;
    }
}

//blockLetters.addEventListener('click',onClick);//разкомментировать!!!

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
	div.classList.add(...classesToAdd);
	//div.classList.add('letter');
	div.innerHTML = e.target.innerHTML;
	div.style.backgroundColor = arrColors[getRandColor];
	res.append(div);
	
}

reset.addEventListener("click",()=> {
    if(res !== null){
        res.remove();
    res = null;
    }
    
    getRandAnimate = getRandomInt(arrAnimate.length);
	getRandFigure = getRandomInt(arrFigures.length);
	classesToAdd = ['letter',arrAnimate[getRandAnimate],arrFigures[getRandFigure]];
})
