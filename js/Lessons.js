export default class Lessons{

    getRandInt(max){
        let rand = Math.floor(Math.random() * max);
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
        return randomClasses;
    }




}