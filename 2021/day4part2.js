// https://adventofcode.com/2020/day/4/

const inputReader = require("./readinput");

class Passport {
  constructor() {
    this.byr;
    this.iyr;
    this.eyr;
    this.hgt;
    this.hcl;
    this.ecl;
    this.pid;
    this.cid;
  }

  checkValid() {
    return (
      this.validField(this.byr, /^(19[2-9][0-9]|200[0-2])$/) &&
      this.validField(this.iyr, /^(201[0-9]|2020)$/) &&
      this.validField(this.eyr, /^(202[0-9]|2030)$/) &&
      this.validField(this.hgt, /^(1([5-8][0-9]|9[0-3])cm|(59|6[0-9]|7[0-6])in)$/) &&
      this.validField(this.hcl, /^#([0-9a-f]){6}$/) &&
      this.validField(this.ecl, /^(amb|blu|brn|gry|grn|hzl|oth)$/) &&
      this.validField(this.pid, /^([0-9]){9}$/)
    );
  }

  validField(field, regex) {
    return field && regex.test(field);
  }
}

(() => {
  const input = inputReader.getInput("./day4input.txt");
  const dataArray = input.split("\r\n\r\n");
  let validPasports = 0;
  for (const row of dataArray) {
    const rowArray = row.replace(/\s/gm, " ").split(" ");
    const passp = new Passport();
    for (const row of rowArray) {
      if (row) {
        const keyValue = row.split(":");
        passp[keyValue[0].trim()] = keyValue[1].trim();
      }
    }
    if (passp.checkValid()) {
      validPasports++;
    }
  }
  console.log(`number of valid passports: ${validPasports}`);
})();
