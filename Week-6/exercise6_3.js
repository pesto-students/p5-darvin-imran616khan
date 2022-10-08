const input = [0, 1, 0];
let temp;
for (let i = 0; i < input.length - 1; i++) {
  for (let j = input.length - 1; j > i; j--) {
    if (input[j] < input[j - 1]) {
      temp = input[j];
      input[j] = input[j - 1];
      input[j - 1] = temp;
    }
  }
}
console.log(input);
