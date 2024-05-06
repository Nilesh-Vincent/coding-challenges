function titleCase(sentence) {
  const splittedSentence = sentence.split(" ");
  let finalSentence = "";
  for (const word of splittedSentence) {
    const fixedWord = word[0].toUpperCase() + word.slice(1);
    finalSentence = finalSentence + fixedWord + " ";
  }
  return finalSentence.trim();
}

module.exports = titleCase;
