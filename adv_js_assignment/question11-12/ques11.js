function displaymessage(name){
  console.log(`Hello,${name}!`)
}
  function getuserinput(){
    setTimeout(()=>{
        let username ="Alice";
        Callback(username)
    },1000)
  }

   
  getuserinput(displaymessage);

