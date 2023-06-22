import Lessons from './Lessons.js';
export default class Alphabet extends Lessons{
    
    //let getRandColor = getRandomInt(arrColors.length);


	
	
	
	createElement(){
	    let div = document.createElement('div');
	    div.classList.add(...classesToAdd);
	//div.classList.add('letter');
	    div.innerHTML = e.target.innerHTML;
	    div.style.backgroundColor = arrColors[getRandColor];
	    res.append(div);
	}
	
    
}