// https://adventofcode.com/2020/day/1/

const inputReader = require("./readinput");

(() => {
  const input = inputReader.getInput("./day1input.txt");
  const dataArray = input.split("\r\n");
  for (let i = 0; i < dataArray.length - 1; i++) {
    for (let j = i + 1; j < dataArray.length; j++) {
      if (dataArray[i] * 1 + dataArray[j] * 1 === 2020) {
        console.log(`${dataArray[i]} + ${dataArray[j]} = 2020 and ${dataArray[i]} * ${dataArray[j]} = ${dataArray[i] * dataArray[j]}`);
      }
    }
  }
})();
