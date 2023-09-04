import Lessons from './Lessons.js';
import * as res from './resourses.js';


export default class Alphabet{
    
    constructor(){
		this.taskContent = document.querySelector(".task_content");
        this.lessons = new Lessons();
        this.classes = this.lessons.classesToAdd(res.classesByItem);
    }

	createStartItems(container=null){
		for (let letter of res.arrLetters){
			let div = document.createElement('div');
			div.dataset.key = "letter";
			div.classList.add("common");
			div.innerHTML = letter;
			this.taskContent.append(div);

		}
	}

	createShowItem(result, content){

	    let div = document.createElement('div');
	    div.classList.add('letter',...this.classes);
	    div.innerHTML = content;
	    div.style.backgroundColor = this.lessons.getRandomColor(res.arrColors);
	    result.append(div);
	}
	
}