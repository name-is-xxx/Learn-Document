const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  line = line.split(" ").join("");
  const arr = line.split("");
  const index1 = zuokuohao(arr);
  const index2 = youkuohao(arr);
  console.log(line, arr, index1, index2);
  if (index1 != -1 && index2 != -1) {
    let j = 0;
    for (let i = index1.length - 1; i >= 0; i--) {
      let tem = line.substring(index1[i] + 1, index2[j]);
      let num = jisuan(tem);
      console.log("tem", tem, num, line);
    }
  }
});

function zuokuohao(string) {
  let index = [];
  let start = 0;
  while (start != -1) {
    start = string.indexOf("(", start + 1);
    if (start != -1) {
      index.push(start);
    }
  }
  if (index.length > 0) {
    return index;
  }
  return -1;
}
function youkuohao(string) {
  let index = [];
  let start = 0;
  while (start != -1) {
    start = string.indexOf(")", start + 1);
    if (start != -1) {
      index.push(start);
    }
  }
  if (index.length > 0) {
    return index;
  }
  return -1;
}
function jisuan(string) {
  let sign = Math.max(
    string.indexOf("+"),
    string.indexOf("-"),
    string.indexOf("*"),
    string.indexOf("/")
  );
  let left = Number(string.substring(0, sign));
  let right = Number(string.substring(sign + 1));
  if (string[sign] === "+") {
    return left + right;
  }
  if (string[sign] === "-") {
    return left - right;
  }
  if (string[sign] === "*") {
    return left * right;
  }
  if (string[sign] === "/") {
    if (left % right === 0) return left / right;
  }
}
