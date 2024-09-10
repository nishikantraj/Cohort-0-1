/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    if(str1.length!=str2.length)
      return false;
    let sastaMap = new Array(26).fill(0);
    
    for(let i = 0;i<str1.length;i++){
      sastaMap[str1.charCodeAt(i)-'a'.charCodeAt(0)]+=1;
      sastaMap[str2.charCodeAt(i)-'a'.charCodeAt(0)]-=1;
    }

    for (let i = 0; i < sastaMap.length; i++) {
      if(sastaMap[i]!=0)
        return false;
    }

    return true
    
}
console.log(isAnagram('Hello','oLleh'))
module.exports = isAnagram;
