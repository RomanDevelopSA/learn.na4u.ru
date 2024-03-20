import ShowItems from "./ShowItems.js";

export default class CalculatorSimple extends ShowItems{


    reset(){
        super.reset();
        this.number="";
        this.arrNums.length = 0;
        this.arrOperators.length = 0;
        this.total = 0;
    }
}