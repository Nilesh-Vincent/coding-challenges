function areAllCharactersUnique(str) {
  let uniqueArray = [];

  for (let i = 0; i < str.length; i++) {
    if (uniqueArray.includes(str[i])) {
      return false;
    } else {
      uniqueArray.push(str[i]);
    }
  }
  return true;


//   const charSet = new Set(str);
//   return charSet.size === str.length;
}

module.exports = areAllCharactersUnique;
