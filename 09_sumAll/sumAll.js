const sumAll = function (intOne, intTwo) {
  if (
    Number.isInteger(intOne) &&
    Number.isInteger(intTwo) &&
    intOne > 0 &&
    intTwo > 0
  ) {
    let sum = 0;
    for (let i = Math.min(intOne, intTwo); i <= Math.max(intOne, intTwo); i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
