// function countVowels(string) {
//   const lowerCaseString = string.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < lowerCaseString.length; i++) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     if (vowels.includes(lowerCaseString[i])) count = count + 1;
//   }

//   return count;
// }

function countVowels(string) {
  const toLowerCase = string.toLowerCase(); 
  let count = 0;

  for (let i = 0; i < toLowerCase.length; i++) {
    if (
      toLowerCase[i] === "a" ||
      toLowerCase[i] === "e" ||
      toLowerCase[i] === "i" ||
      toLowerCase[i] === "o" ||
      toLowerCase[i] === "u"
    ) {
      count += 1; 
    }
  }
  return count;
}

module.exports = countVowels;



