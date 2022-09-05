// Before Refactoring:
// function createStack() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     },
//   };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop(); // => 5
// stack.items; // => [10]
// stack.items = [10, 100, 1000]; // Encapsulationbroken
// console.log(stack);

// After Refactoring:
function createStack() {
  let items = [];
  const push = (item) => items.push(item);
  const pop = () => items.pop();
  const value = () => {
    return items;
  };
  return {
    push,
    pop,
    value,
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
console.log(stack.items); // => undefined
stack.items = [10, 100, 1000]; // Encapsulationbroken
console.log(stack.value());
