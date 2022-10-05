let input = [6, 8, 0, 1, 3];
let output = [];
let flag;
for (let i = 0; i < input.length; i++) {
  flag = false;
  for (let j = i + 1; j < input.length; j++) {
    if (input[j] > input[i]) {
      output.push(input[j]);
      flag = true;
      break;
    }
  }
  if (!flag) {
    output.push(-1);
  }
}
console.log(output);
