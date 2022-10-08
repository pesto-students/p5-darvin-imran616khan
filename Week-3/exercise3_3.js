function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?
// Output is : Count is 0, This is because of hoisting i.e., functions and 
// Variables are stored in memory before code gets executed. So before increment
// function gets executed the message is already set to Count is 0.