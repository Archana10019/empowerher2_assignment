// ans 1
let arr1 = [10, 20, 30];
let arr2 = [40, 50];

let arr3=[...arr1, ...arr2];
console.log(arr3)


//ans2
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let profile={...person, ...extra};
console.log(profile);

//ans3

sumAll(1, 2, 3, 4) // should return 10
function sumAll(...args) {
    let sum=0;
    for(let num of args){
        sum+=num;
    } 
    console.log(sum);  
}
//ans4
let numbers = [10, 20, 30, 40, 50];
let [first, second, ...rest] = numbers;
console.log(first);

//ans5
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let { address: { geo: { lat, lng,city } } } = user;
console.log(lat);   
console.log(lng);
console.log(city);

//ans6

const multiply=(a,b)=> a*b;
console.log(multiply(5, 6));

//ans7
const emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
console.log(emp.details ?.profile.role? "Developer" : "No role found"   );