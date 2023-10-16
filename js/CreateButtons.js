import * as items from './itemsMap.js';

export default class CreateButtons {
    
    categories = document.querySelector(".categories");
    
    generateButtons(){
        
        for(let btn of items.buttons.keys()){
            let div = document.createElement('div');
            div.className = "categories--item";
            div.innerHTML = btn;
            this.categories.append(div);
        }
        
    }
    
}