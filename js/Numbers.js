import Alphabet from "./Alphabet.js";

export default class Numbers extends Alphabet{

    createShowItem(result, content) {
        super.createShowItem(result, content);
        console.log("Numbers: "+content);

        return content;
    }



}