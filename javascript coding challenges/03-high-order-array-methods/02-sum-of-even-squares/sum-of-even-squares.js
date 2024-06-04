function sumOfEvenSquares(numbers) {
  const evenSquares = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, num) => sum + num, 0);

  return evenSquares;
}

module.exports = sumOfEvenSquares;
