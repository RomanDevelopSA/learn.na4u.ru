import ShowItems from "./ShowItems.js";

export default class CalculatorComplicated extends ShowItems{
   
    number = "";
    arrNums=[];
    arrOperators = [];
    total = 0;
    
   getNumber(num){
      this.number += num;
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
      this.arrNums.forEach((item,index)=>{
         this.total += Number(item) /*+ this.arrOperators[index] */;
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