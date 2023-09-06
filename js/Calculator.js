import Alphabet from "./Alphabet.js";

export default class Calculator extends Alphabet{

   constructor() {
      super();

      this.number = "";
      this.arrNums=[];
      this.arrOperators = [];
      this.result = 0;
   }

   getData(numData, operator){
      this.number += numData;
      //super.createShowItem();
      console.log("num: "+this.number);
   }

   getOperator(operator){
      this.arrNums.push(this.number);
      this.arrOperators.push(operator);
      console.log("arrNums: "+this.arrNums);
      console.log("arrOperators: "+this.arrOperators);
      this.number = "";
   }

   calculate(){
      this.arrNums.push(this.number);
      this.arrNums.forEach((item)=>{
         this.result += +item;
      })

      console.log("arrNums calc: "+this.arrNums);
      console.log("arrOperators calc: " + this.arrOperators);
      console.log("result calc: " + this.result);

      return this.result;


   }

   reset(){
      this.number="";
      this.arrNums.length = 0;
      this.arrOperators.length = 0;
      this.result = 0;

      console.log("num reset: "+this.number);
      console.log("arrNums reset: "+this.arrNums);
      console.log("arrOperators reset: " + this.arrOperators);
      console.log("result reset: " + this.result);
   }





}