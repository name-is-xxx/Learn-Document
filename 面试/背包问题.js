/* 背包问题：在给定重量限制下，两种物品的最大价值 */

var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let [wa, wb, wt, pa, pb] = [0, 0, 0, 0, 0];
rl.on("line", function (line) {
  [wa, wb, wt, pa, pb] = line.split(" ").map(Number);
  if (pa >= pb) {
    console.log(">", wa, wb, wt, pa, pb);
    maxValue(wa, wb, pa, pb);
  } else {
    console.log("<", wa, wb, wt, pa, pb);
    maxValue(wb, wa, pb, pa);
  }
});
function maxValue(x, y, vx, vy) {
  // 价值x>y：xy为重量
  let noW = wt - x - y;
  if (noW >= 0) {
    let timeY = 1;
    let timeX = 1;
    timeX += Math.floor(noW / x);
    noW = noW - x * (timeX - 1);
    if (noW >= y) {
      timeY += Math.floor(noW / y);
      noW = noW - y * (timeY - 1);
    }
    console.log(noW, vx, timeX, vy, timeY);
    console.log(vx * timeX + vy * timeY);
  } else console.log(0);
}
