/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Assume the first element is the largest initially
    let biggest = numbers[0];

    // Iterate through the array
    for (let i = 0; i < numbers.length; i++) {
        // If the current element is greater than the current largest, update the largest
        if (numbers[i] > biggest) {
            biggest = numbers[i];
        }
    }

    // Return the largest element found
    return biggest;
}


module.exports = findLargestElement;