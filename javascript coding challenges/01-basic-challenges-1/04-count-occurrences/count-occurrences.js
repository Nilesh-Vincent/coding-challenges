const countOccurrences = (string, character) => {
  let count = 0;
  for (const char in string) {
    if (character == string[char]) {
      count = count + 1;
    }
  }

  return count;
};

module.exports = countOccurrences;
