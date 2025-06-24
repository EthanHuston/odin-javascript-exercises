const fibonacci = function (num) {
  val = Number(num);
  if (val < 0) {
    return "OOPS";
  } else if (val === 0) {
    return 0;
  } else if (val === 1 || val === 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
