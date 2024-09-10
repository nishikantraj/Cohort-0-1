/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = numbers[0];
    numbers.map((el)=>{
        if(el>max)
            max=el
    })
    return max
}
console.log(findLargestElement([9,8,76,5]));

module.exports = findLargestElement;