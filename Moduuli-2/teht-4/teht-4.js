
let numbers = [];
let number = Number(1);
do {
  number = Number(prompt('Type a number.'));
  numbers.push(number);
} while (number !== 0);

numbers.sort(function(a, b){return b-a});
console.log('Numbers: ' + numbers);