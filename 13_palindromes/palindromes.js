const palindromes = function (str) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";
  let arr = str
    .toLowerCase()
    .split("")
    .filter((val) => alphanumerical.includes(val));
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
