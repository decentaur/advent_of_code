// https://adventofcode.com/2020/day/2/

const inputReader = require("./readinput");

(() => {
  const input = inputReader.getInput("./day3input.txt");
  const dataArray = input.split("\r\n");
  let index = 0;
  let trees = 0;
  for (const row of dataArray) {
    const rowArray = row.split("");
    if (rowArray[index % rowArray.length] === "#") {
      trees++;
    }
    index += 3;
  }
  console.log(`number of trees: ${trees}`);
})();
