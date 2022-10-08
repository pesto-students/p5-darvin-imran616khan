function add(a, b) {
  return this.a + this.b;
}
let input = { a: 2, b: 5 };
// Example of call
let sum1 = add.call(input);
console.log(sum1);
// Example of bind
let sum2 = add.bind(input);
console.log(sum2());
// Example of apply
let sum3 = add.apply(input);
console.log(sum3);