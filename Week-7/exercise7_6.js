let queue = [];
let s1 = [4];
let s2 = [1, 2, 2, 2, 1, 4];
let temp = s1.concat(s2);
for (let i = 0; i < temp.length; i++) {
  if (temp[i] === 1 && temp[i + 1] !== undefined) {
    queue.push(temp[i + 1]);
    i++;
  } else if (temp[i] === 2) {
    if (queue.length === 0) {
      console.log(-1);
    } else {
      console.log(queue.shift());
    }
  }
}
