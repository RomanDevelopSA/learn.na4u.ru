import Alphabet from "./Alphabet.js";

export default class Calculator extends Alphabet{

   constructor() {
      super();

      this.number = "";
      this.arrNums=[];
      this.arrOperators = [];
      this.total = 0;
   }

   getData(numData, operator){
      this.number += numData;
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
         this.total += +item;
      })

      console.log("arrNums calc: "+this.arrNums);
      console.log("arrOperators calc: " + this.arrOperators);
      console.log("result calc: " + this.total);

      return this.total;

   }

   reset(){

      let childElements = document.querySelectorAll(".result>div");

      console.log("childElements "+childElements.length);
      for (let elem of childElements) {
         elem.remove();
      }

      this.number="";
      this.arrNums.length = 0;
      this.arrOperators.length = 0;
      this.total = 0;

   }





}