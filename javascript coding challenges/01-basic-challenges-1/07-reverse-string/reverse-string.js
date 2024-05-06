//Easier Version
// function reverseString(string) {
//   const words = string.split("");
//   return words.reverse().join("");
// }

// let i = str.length - 1; i >= 0; i--

function reverseString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

module.exports = reverseString;
