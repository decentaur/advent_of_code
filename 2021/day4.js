// https://adventofcode.com/2020/day/4/

const inputReader = require("./readinput");

(() => {
  const input = inputReader.getInput("./day4input.txt");
  const dataArray = input.split("\r\n\r\n");

  const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
  let validPasports = 0;
  for (const row of dataArray) {
    const rowArray = row.replace(/\s/gm, " ").split(" ");
    const raFields = rowArray.map((x) => x.split(":")[0]);
    let missing = false;
    for (const requiredField of requiredFields) {
      if (!raFields.includes(requiredField)) {
        missing = true;
      }
    }
    if (!missing) {
      validPasports++;
    }
  }
  console.log(`number of valid passports: ${validPasports}`);
})();
