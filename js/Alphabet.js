import Lessons from './Lessons.js';
import * as res from './resourses.js';


export default class Alphabet{
    
    constructor(){
		this.blockLetters = document.querySelector(".block-letters");
		this.blockNumbers = document.querySelector(".block-numbers");
        this.lessons = new Lessons();
        this.classes = this.lessons.classesToAdd(res.classesByItem);
		//this.genDataShowName(res.arrData);
		this.createStartItems(res.startArrData);
    }

	createStartItems(arrData,container=null){
		for (let number of res.arrNumbers){
			let div = document.createElement('div');
			div.dataset.show = "number";
			div.classList.add("common");
			div.innerHTML = number;
			this.blockNumbers.append(div);

		}

		for (let letter of res.arrLetters){

			let div = document.createElement('div');
			div.dataset.show = "letter";
			div.classList.add("common");
			div.innerHTML = letter;
			this.blockLetters.append(div);

		}
	}

	createShowItem(result, event){

	    let div = document.createElement('div');
	    div.classList.add('letter',...this.classes);
	    div.innerHTML = event.target.innerHTML;
	    div.style.backgroundColor = this.lessons.getRandomColor(res.arrColors);
	    result.append(div);
	}


	genDataShowName(arrData){

		arrData.forEach((item)=>
		{
			console.log("item: "+item);
		})
		for (let item of arrData){
			console.log("item: "+item);
			/*if (item.startsWith("arr")){
				console.log("item length: "+item.length);
			}else {
				alert("Неверное имя метода");
			}*/
		}

	}

	
}