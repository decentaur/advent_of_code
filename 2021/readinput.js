const fs = require("fs");

module.exports = { getInput };

function getInput(file) {
  try {
    const data = fs.readFileSync(file, "utf8");
    return data;
  } catch (err) {
    console.error(err);
    throw "read input failed";
  }
}
