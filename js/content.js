export default class Content {
    constructor(num){
        this.num = num;
    }
    
    test(){
        let t = this.num * 2;
        //console.log("value: "+t);
        return t;
    }
}