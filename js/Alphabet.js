import Lessons from './Lessons.js';
import * as res from './resourses.js';

export default class Alphabet{
    
    constructor(){
        this.lessons = new Lessons();
        this.classes = this.lessons.classesToAdd(res.classesByItem);
		//this.genDataShowName(res.arrData);
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
	createStartItems(arrData,container=null){
		for (let item of arrData){

			/*let div = document.createElement('div');
            div.dataset.show = "number";
            div.classList.add("common");
            div.innerHTML = num;
            container.append(div);*/

		}
	}
	
}