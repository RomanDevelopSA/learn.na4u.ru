import ShowItems from "./ShowItems.js";
import {buttons} from "./itemsMap.js";

export default class Alphabet extends ShowItems {

    taskContent = document.querySelector(".task_content");

    createStartItems(key = null) {

        console.log("press " + key);
        let childElements = document.querySelectorAll(".task_content>div");
        if (key !== null) {

            for (let elem of childElements) {
                elem.remove();
            }
            let val = buttons.get(key);
            console.log("need del another elements, val = "+val);
        }


        for (let letter of this.res.arrLettersRu) {
            let div = document.createElement('div');
            div.dataset.key = "letter";
            div.classList.add("common");
            div.innerHTML = letter;
            this.taskContent.append(div);
        }

    }


}