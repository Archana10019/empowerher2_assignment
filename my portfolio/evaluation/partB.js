//Ans8
let nums = [10, 3, 7, 20, 13, 2];
let square =nums.map(num=>num*num);
console.log(square);

//(2)
let primenums=nums.filter(num=>{
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false;
    }
    return num>1;

});
console.log(primenums);
//(3)

let reducedSum=nums.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(reducedSum);


//ans 9
function displayCar(callback){
    console.log("car");
}


function displaytruck(callback){
    console.log("truck");}
  


function displayBike( callback){
    console.log("bike");
}

function vehicleInfo(callback){
    console.log("vehicle info:");
    callback();
} 
vehicleInfo(displayCar);
vehicleInfo(displaytruck);
vehicleInfo(displayBike);     


