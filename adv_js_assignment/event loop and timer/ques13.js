//simulating a loading screnn with setinterval
let interval = setInterval(()=>{
    console.log("Loading........");
},1000);


setTimeout(()=>{
    clearInterval(interval);
    console.log("loaded Successfully!")
},5000)