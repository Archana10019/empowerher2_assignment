 function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log("incremented count:", count);
  }

  function decrement() {
    count--;
    console.log("decremented count:", count);
  }

  return { increment, decrement };
}

const c = createCounter();
c.increment();
c.decrement();

   






    