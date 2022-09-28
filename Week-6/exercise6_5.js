function findPair(A, B) {
  let output = [];
  for (let i = 0; i < A.length - 1; i++) {
    if (A.indexOf(A[i] + B) !== -1) {
      output.push(A[i]);
      output.push(A[i] + B);
      console.log(
        `Found pair (${output.sort((a, b) => {
          return b - a;
        })})`
      );
      console.log(`${output[0]} - ${output[1]} = ${B}`);
      break;
    }
  }
  if (output.length) {
    return 1;
  } else {
    console.log("Pair not found");
    return 0;
  }
}
console.log(findPair([-10, 20], 30));
