const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const [min, max, num] = line.split(" ");
  for (let i = 0; i < num; i++) {
    console.log(Math.round(Math.random() * (max - min + 1) + min));
  }
});
