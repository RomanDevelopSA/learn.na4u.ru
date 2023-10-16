import * as res from './resourses.js';

export default class ShowItems {
    
    constructor() {
        this.res= res;
    }
    
    result = document.querySelector(".result");

	//begin from Lessons.js
	getRandInt(max){
        return Math.floor(Math.random() * max);
    }

    getRandomColor(arrColors){
        return arrColors[this.getRandInt(arrColors.length)];
    }
    
    
    classesToAdd(){

        let randomClasses = [];
        
        this.res.classesByItem.forEach((item) => {
            let rand = item[this.getRandInt(item.length)];
            randomClasses.push(rand);
            
            }
        )
        return randomClasses;
    }
    
	//end from Lessons.js

	createShowItem(content,classes){
	    let div = document.createElement('div');
	    //div.classList.add('letter',...this.classesToAdd(this.res.classesByItem));
	    div.classList.add('letter',...classes);
	    div.innerHTML = content;
	    div.style.backgroundColor = this.getRandomColor(this.res.arrColors);
	    this.result.append(div);
	}

	reset(){

		let childElements = document.querySelectorAll(".result>div");

		console.log("childElements "+childElements.length);
		for (let elem of childElements) {
			elem.remove();
		}
	}
	
}