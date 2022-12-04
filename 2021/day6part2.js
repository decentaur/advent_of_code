// https://adventofcode.com/2020/day/6/

const inputReader = require("./readinput");

class Group {
  awnsers = [];
  members = 0;
  constructor(awnserRows) {
    for (const awnserRow of awnserRows) {
      this.members++;
      for (const awnser of awnserRow.split("")) {
        this.awnsers[awnser] ? this.awnsers[awnser]++ : (this.awnsers[awnser] = 1);
      }
    }
  }

  getUniqueAwnsers() {
    return Object.getOwnPropertyNames(this.awnsers).length - 1;
  }

  getAgreedAwnsers() {
    let agreedAwnsers = 0;
    for (const awnser in this.awnsers) {
      if (this.awnsers[awnser] === this.members) {
        agreedAwnsers++;
      }
    }
    return agreedAwnsers;
  }
}

(() => {
  const input = inputReader.getInput("./day6input.txt");
  const dataArray = input.split("\r\n\r\n");
  let totalAgreed = 0;
  for (const row of dataArray) {
    const group = new Group(row.split(`\r\n`));
    totalAgreed += group.getAgreedAwnsers();
  }
  console.log(`number of yesses to awnsers in total: ${totalAgreed}`);
})();
