/* 遇m则改变数字，并求累计和 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n, m;
let k = 1;
rl.on("line", function (line) {
  if (k === 1) {
    n = parseInt(line);
    k++;
  } else if (k === 2) {
    m = parseInt(line);
    k++;
  } else if (k === 3) {
    const arr = line.split(" ").map(Number);
    if (arr.length > n) {
      console.log(112345);
    } else {
      let max = 0;
      let index = 0;
      for (let i in arr) {
        if (arr[i] === m) {
          if (m > 0) arr[i]++;
          else arr[i]--;
        }
        index = index + arr[i];
        max = Math.max(max, index);
      }
      console.log(max);
    }
    k = 1;
  }
});
