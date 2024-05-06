function isPalindrome(string) {
  const formattedStr = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedString = formattedStr.split("").reverse().join("");
  if (reversedString === formattedStr) return true;

  return false;
}

module.exports = isPalindrome;
