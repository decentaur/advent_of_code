// https://adventofcode.com/2020/day/1/

const inputReader = require("./readinput");

(() => {
  const input = inputReader.getInput("./day1input.txt");
  const dataArray = input.split("\r\n");
  for (let i = 0; i < dataArray.length - 2; i++) {
    for (let j = i + 1; j < dataArray.length - 1; j++) {
      if (dataArray[i] * 1 + dataArray[j] * 1 < 2020)
        for (let k = j + 1; k < dataArray.length; k++)
          if (dataArray[i] * 1 + dataArray[j] * 1 + dataArray[k] * 1 === 2020) {
            console.log(
              `${dataArray[i]} + ${dataArray[j]} + ${dataArray[k]} = 2020 and ${dataArray[i]} * ${dataArray[j]} * ${dataArray[k]}= ${
                dataArray[i] * dataArray[j] * dataArray[k]
              }`
            );
          }
    }
  }
})();
