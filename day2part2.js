// https://adventofcode.com/2020/day/2/

const inputReader = require("./readinput");

(() => {
  const input = inputReader.getInput("./day2input.txt");
  const dataArray = input.split("\r\n");
  let numValidPasswd = 0;
  for (const password of dataArray) {
    const policy = password.split(":")[0];
    const passwd = password.split(":")[1];
    const occur = policy.split(" ")[0];
    const occurMin = occur.split("-")[0] * 1;
    const occurMax = occur.split("-")[1] * 1;
    const letter = policy.split(" ")[1];
    const passArray = passwd.split("");
    if ((passArray[occurMin] === letter) + (passArray[occurMax] === letter) === 1) {
      numValidPasswd++;
    }
  }
  console.log(`number of valid passwords: ${numValidPasswd}`);
})();
