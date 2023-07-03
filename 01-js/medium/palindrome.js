/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.replace(/[^\w\s]|_/g, "");
  str=str.toLowerCase();
  if(parseInt(str.length/2)==0){
    return true;
  }else{
  for(var i=0;i<parseInt(str.length/2);i++){
    if(str.charAt(i)==str.charAt(parseInt(str.length)-i-1)){
      return true;
    }else{
      return false;
      }
    }
  }
}

module.exports = isPalindrome;
//console.log(isPalindrome("abccba"));