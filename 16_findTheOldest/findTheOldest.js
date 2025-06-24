const findTheOldest = function (arr) {
  let oldest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (getAge(oldest) < getAge(arr[i])) {
      oldest = arr[i];
    }
  }
  return oldest;

  function getAge(person) {
    if ("yearOfDeath" in person) {
      return person.yearOfDeath - person.yearOfBirth;
    } else {
      return new Date().getFullYear() - person.yearOfBirth;
    }
  }
};

// Do not edit below this line
module.exports = findTheOldest;
