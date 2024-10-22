/*
给定一个包含若干个颜色的珠子的数组 beads，其中每个珠子都标有一种颜色，包括红色（'R'）、白色（'W'）和蓝色（'B'）。
现在，你需要编写一个函数，按照红色、白色、蓝色的顺序对这些珠子进行排序，使得相同颜色的珠子相邻。
注意：你需要在不使用库内置的 sort 函数的情况下解决这个问题，并且要求使用原地排序
示例：
输入：beads = ['B', 'R', 'W', 'B', 'W', 'R']
输出：['R', 'R', 'W', 'W', 'B', 'B']
*/
function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}
function sortColors(beads) {
  let left = 0;
  let right = beads.length - 1;
  let i = 0;

  while (i <= right) {
    if (beads[i] === "R") {
      swap(beads, i, left);
      left++;
      i++;
    } else if (beads[i] === "W") {
      i++;
    } else {
      swap(beads, i, right);
      right--;
    }
  }
  return beads;
}
