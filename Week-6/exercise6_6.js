const s = [-1, 2, 1, -4],
  target = 1;
const numberOfIntegersToFind = 3;
let output = [];
let sum = 0;
let tempArr = [];
tempArr = tempArr.concat(s);
for (let i = 0; i < numberOfIntegersToFind - 1; i++) {
  tempArr.push(s[i]);
}
for (let j = 0; j < tempArr.length - numberOfIntegersToFind; j++) {
  if (j === 0) {
    output = tempArr.slice(j, j + numberOfIntegersToFind);
    sum = output.reduce((a, b) => a + b);
  } else {
    if (
      Math.abs(sum - target) >
      Math.abs(
        tempArr.slice(j, j + numberOfIntegersToFind).reduce((a, b) => a + b) -
          target
      )
    ) {
      output = tempArr.slice(j, j + numberOfIntegersToFind);
      sum = output.reduce((a, b) => a + b);
    }
  }
}
console.log(`The sum that is closest to the target (${target}) is ${sum}. (${output.join(' + ')} = ${sum})`);
