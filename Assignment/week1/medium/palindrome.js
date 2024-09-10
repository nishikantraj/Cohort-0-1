/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str= str.toLowerCase()
  i =0
  j= str.length-1
  while(i<=j){
    if(!isChar(str[i])){
      i++
      continue
    }
    if(!isChar(str[j])){
      j--
      continue
    }
    if(str[i]!=str[j])
      return false
    i++
    j--
  }
  return true;
}
function isChar(char) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
console.log(isPalindrome("A man a plan a canal Panama"));

module.exports = isPalindrome;
