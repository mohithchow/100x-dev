/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const lowercaseStr = str.toLowerCase();

    // Use a regular expression to match vowels and count them
    const vowelCount = (lowercaseStr.match(/[aeiou]/g) || []).length;

    return vowelCount;
}



module.exports = countVowels;