// https://adventofcode.com/2020/day/2/

const inputReader = require("./readinput");

(() => {
  const input = inputReader.getInput("./day3input.txt");
  const dataArray = input.split("\r\n");
  let downRight = [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1],
  ];
  let trees = [];
  for (const slopeType of downRight) {
    const indexPlus = slopeType[1];
    const modSkip = slopeType[0];
    let index = 0;
    let modVal = null;
    trees.push(0);
    for (const row of dataArray) {
      if (modVal && modVal !== modSkip) {
        modVal++;
        continue;
      }
      modVal = 1;
      const rowArray = row.split("");
      if (rowArray[index % rowArray.length] === "#") {
        trees[trees.length - 1]++;
      }
      index += indexPlus;
    }
  }
  console.log(`number of trees: ${trees}, total: ${trees.reduce((a, c) => a * c)}`);
})();
