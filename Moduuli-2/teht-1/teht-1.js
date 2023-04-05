
// Asks user for 5 numbers and adds them to an array
function addNumbersToArray() {
  let numbers = [];
  for(let i = 0; i < 5; i++) {
  numbers.push(prompt('Enter a number'));
  }
  return numbers
}

// Reverse and add to new array
function reverseArray() {
  let numbersReversed = [];
  for (let i = 0; i < numbers.length; i++) {
    numbersReversed[i] = numbers[numbers.length - i - 1];
  }
  return numbersReversed;
}





