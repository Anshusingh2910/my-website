class car{
    constructor(color,carName){
        console.log("Inside constructor of car class");
        this.color = color,
        this.carName = carName;
    }
    speed = function(){
        console.log("Speed 120/h... ");
    };
    model = function(){
        console.log("Model 2024... ");
    };
} 

// Object crete
const myCar = new car ("Red","Bmw")

