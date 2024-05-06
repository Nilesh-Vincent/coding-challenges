function findMissingNumber(array) {
  if (!array || array.length === 0) {
    return undefined;
  }

  // n = howManyTotalNums
  const n = array.length + 1;
  const expectedSumWithMissingNum = (n * (n + 1)) / 2;
  const actualSum = array.reduce((sum, num) => sum + num, 0);
  return expectedSumWithMissingNum - actualSum;
}

module.exports = findMissingNumber;
