export default class Lessons{

    getRandInt(max){
        let rand = Math.floor(Math.random() * max);
        console.log("getRandInt: "+rand);
        return rand;
    }

    getRandomColor(arrColors){
        return arrColors[this.getRandInt(arrColors.length)];
    }
    
    classesToAdd(arrClasses){

        let randomClasses = [];
        
        arrClasses.forEach((item) => {
            let rand = item[this.getRandInt(item.length)];
            
            randomClasses.push(rand);
            
            }
        )
        console.log(randomClasses);
        return randomClasses;
    }




}