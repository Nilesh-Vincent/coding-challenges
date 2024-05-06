const diceRoll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

function diceGameSimulation(number) {
  const results = [];

  for (let i = 0; i <= number; i++) {
    const dice1 = diceRoll();
    const dice2 = diceRoll();
    const sum = dice1 + dice2;

    let result = "";

    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "roll again";
    }

    results.push({ dice1, dice2, sum, result });
  }

  return results
}

module.exports = diceGameSimulation;
