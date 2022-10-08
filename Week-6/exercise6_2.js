const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let n = input[0].length;
let output = [];
for (let layer = 0; layer < (n + 1) / 2; layer++) {
    for (let ptr = layer; ptr < n - layer; ptr++) {
        output.push(input[layer][ptr]);
    }
    for (let ptr = layer + 1; ptr < n - layer; ptr++) {
        output.push(input[ptr][n - layer - 1]);
    }
    for (let ptr = layer + 1; ptr < n - layer; ptr++) {
        output.push(input[n - layer - 1][n - ptr - 1]);
    }
    for (let ptr = layer + 1; ptr < n - layer - 1; ptr++) {
        output.push(input[n - ptr - 1][layer]);
    }
}
console.log(output);