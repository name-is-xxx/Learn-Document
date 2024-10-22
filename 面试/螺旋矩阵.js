const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  const [n, m] = line.split(" ").map(Number);
  const x = Math.ceil(n / m);
  let dp = Array.from({ length: m }, () => Array(x).fill("*"));
  let [i, j] = [0, 0];
  let k = 1;
  console.log(x);
  while (k <= n) {
    while (j < x && dp[i][j] === "*" && k <= n) dp[i][j++] = k++;

    j--;
    i++;
    while (i < m && dp[i][j] === "*" && k <= n) dp[i++][j] = k++;

    i--;
    j--;
    while (j >= 0 && dp[i][j] === "*" && k <= n) dp[i][j--] = k++;

    i--;
    j++;
    while (i >= 0 && dp[i][j] === "*" && k <= n) dp[i--][j] = k++;

    j++;
    i++;
  }
  dp.map((item) => console.log(item.join(" ")));
});
