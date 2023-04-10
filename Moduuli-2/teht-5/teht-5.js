

let numbers = [];

function contains(numbers, number) {
  for (let i = 0; i < numbers.length; i++) {
      console.log(numbers.includes(number[i]));
    if (numbers.includes(number[i]) === true) {
      alert('You have already entered that number!');
      return true;
    }
    else {

    }
  }
    return false;
}

let number = Number();
do {
  number = Number(prompt('Syötä numero.'));
  numbers.push(number);
  console.log(contains(numbers, number));
} while (contains(numbers, number) === false);




