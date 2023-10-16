import ShowItems from "./ShowItems.js";

export default class Calculator extends ShowItems{
   
    number = "";
    arrNums=[];
    arrOperators = [];
    total = 0;
    categories = document.querySelector(".categories");
    
   getData(numData){
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
      console.log("arrNums: "+this.arrNums);
      this.arrNums.forEach((item)=>{
         this.total += +item;
      })

      return this.total;
   }

   reset(){
      super.reset();
      this.number="";
      this.arrNums.length = 0;
      this.arrOperators.length = 0;
      this.total = 0;
   }

}