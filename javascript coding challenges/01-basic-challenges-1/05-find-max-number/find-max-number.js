function findMaxNumber(array) {
  let maxNum = 0;

  for (const number of array) {
    if (number > maxNum) {
      maxNum = number
    }
  }
  return maxNum
}

module.exports = findMaxNumber;
