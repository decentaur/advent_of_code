// https://adventofcode.com/2020/day/5/

const inputReader = require("./readinput");

class BoardingPass {
  rows = 128;
  seats = 8;
  constructor(rowString) {
    this.rowString = rowString.trim();
    this.seatNumber = this.calculateSeatNumber(this.rowString);
  }

  calculateSeatNumber(rowString) {
    let rLowerBound = 0;
    let rHigherBound = this.rows - 1;
    let sLowerBound = 0;
    let sHigherBound = this.seats - 1;
    for (const rowChar of rowString.split("")) {
      if (rowChar === "F") {
        rHigherBound -= Math.ceil((rHigherBound - rLowerBound) / 2);
      }
      if (rowChar === "B") {
        rLowerBound += Math.ceil((rHigherBound - rLowerBound) / 2);
      }
      if (rowChar === "L") {
        sHigherBound -= Math.ceil((sHigherBound - sLowerBound) / 2);
      }
      if (rowChar === "R") {
        sLowerBound += Math.ceil((sHigherBound - sLowerBound) / 2);
      }
    }
    if (rLowerBound !== rHigherBound || sLowerBound !== sHigherBound) {
      console.error(rowString, rLowerBound, rHigherBound, sLowerBound, sHigherBound);
    }
    return rLowerBound * 8 + sLowerBound;
  }
}

(() => {
  const input = inputReader.getInput("./day5input.txt");
  const dataArray = input.split("\r\n");
  let highestSeatNumber = 0;
  for (const row of dataArray) {
    const bp = new BoardingPass(row);
    if (bp.seatNumber > highestSeatNumber) {
      highestSeatNumber = bp.seatNumber;
    }
  }
  console.log(`highest seatnumber: ${highestSeatNumber}`);
})();
