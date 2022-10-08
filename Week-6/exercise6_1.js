// Max Sum Contiguous Subarray
function findMaxSumContiguousSubArray(input) {
  let output = [];
  let sum = -Infinity;
  let tempSum, tempArr;
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = input.length; j > i + 1; j--) {
      tempArr = input.slice(i, j);
      tempSum = tempArr.reduce((a, b) => a + b);
      if (tempSum > sum) {
        sum = tempSum;
        output = tempArr;
      }
    }
  }
  console.log(
    `Max Sum Contiguous Subarray is [${output}] and it's Sum is ${sum}`
  );
}

findMaxSumContiguousSubArray([1, 2, 3, 4, -10]);
findMaxSumContiguousSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);