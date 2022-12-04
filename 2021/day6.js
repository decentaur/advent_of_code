// https://adventofcode.com/2020/day/6/

const inputReader = require("./readinput");

class Group {
  awnsers = [];
  constructor(awnserRows) {
    for (const awnserRow of awnserRows) {
      for (const awnser of awnserRow.split("")) {
        this.awnsers[awnser] ? this.awnsers[awnser]++ : (this.awnsers[awnser] = 1);
      }
    }
  }

  getUniqueAwnsers() {
    return Object.getOwnPropertyNames(this.awnsers).length - 1;
  }
}

(() => {
  const input = inputReader.getInput("./day6input.txt");
  const dataArray = input.split("\r\n\r\n");
  let totalunique = 0;
  for (const row of dataArray) {
    const group = new Group(row.split(`\r\n`));
    totalunique += group.getUniqueAwnsers();
  }
  console.log(`number of yesses to awnsers in total: ${totalunique}`);
})();
