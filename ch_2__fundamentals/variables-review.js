//  Sigma Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.: sigma(3) = 6 (or 1 + 2 + 3 ); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5 ). 
function sigma(num) {
  if (num <= 0) return 0;

  let sum = 0;

  while (num > 0) {
    sum += num;
    num--;
  }

  return sum;
}

console.log(sigma(3));
console.log(sigma(5));
console.log(sigma(-5));


//  Factorial Just the F acts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3 ); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5 ).

function factorial(num) {
  let result = 1;

  if (num <= 0) return 1;

  while (num > 0) {
    result *= num;
    num--;
  }

  return result;
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(-5));


//  Star Art Assume that you have a text field that is exactly 75 characters long. You want to fill it with spaces and asterisks ( ' * ' ) , sometimes called stars . You should print the given number of asterisks consecutively. D epending on which function is called, those stars should be left-justified (first star would be very first char in the text field), or right-justified (last star would be very last char in the text field, with potentially some number of spaces at beginning of text field before the block of stars start), or centered in the 75-character text field (with same number of spaces on either side of the block of stars, plus/minus one). Write a function draw Left Stars(num) that accepts a number and prints that many asterisks . Write a function draw RightStars (num) that prints 75 characters total. S tars should build from right side. The last num characters should be asterisks ; the other 75 should be spaces. Write function drawCenteredStars (num) that prints 75 characters total. The stars should be centered in the 75. The middle num characters should be asterisks ; the rest of the 75 spaces. (optional) Create epic text-art Empire vs. Rebellion battle scenes , with ships like ( =*=) and >o< .

function drawStars(position, num) {
  let starsString = '';

  if (position === 'left') {
    for (let i = 0; i < 75; i++) {
      if (i < num) {
        starsString += '*';
      } else {
        starsString += ' ';
      }
    }
  } else if (position === 'right') {
    for (let i = 0; i < 75; i++) {
      if (i < (75 - num)) {
        starsString += ' ';
      } else {
        starsString += '*';
      }
    }
  } else if (position === 'center') {
    let start = (75 - num) / 2;
    let end = start + num;

    for (let i = 0; i < 75; i++) {
      if (i < start) {
        starsString += ' ';
      } else if (i >= start && i < end) {
        starsString += '*';
      } else {
        starsString += ' ';
      }
    }
  }

  return starsString;
}

console.log(drawStars('left', 12));
console.log(drawStars('right', 12));
console.log(drawStars('center', 12));

