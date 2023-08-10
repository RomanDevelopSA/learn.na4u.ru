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
        //let length = arrClasses.map(item => item.length);
        let randomClasses = [];
        
        arrClasses.forEach((item) => {
            console.log(`massiv ${item} длина ${item.length}`);
            let rand = item[this.getRandInt(item.length)];
            
            randomClasses.push(rand);
            
            }
        )
        console.log(randomClasses);
        return randomClasses;
    }




}