//  Threes and Fives Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both . Display the final sum in the console. 
// Second: Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of t hreesFives() a s b etterThreesFives(100,4000000) . 
function threesFives(start, end) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      continue;
    } else if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(threesFives(100, 4000000));


//  Generate Coin Change Change is inevitable (especially when breaking a twenty ). Make generateCoinChange(cents) . Accept a number of American cents, co mpute and print how to represent that amount with smallest number of coins. Common American coins are pen nies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents). 
// Second: can you simplify/shorten your code?
// Example output, given ( 94 ) : 94 cents can be represented by: quarters: 3 dimes: 1 nickels: 1 pe nnies : 4 
// Third : add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less .

function generateCoinChange(cents) {
  const denomination = {
    dollar: 100,
    halfdollar: 50,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  }

  const coins = {
    dollars: 0,
    halfdollars: 0,
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  }

  if (cents >= denomination.dollar) {
    coins.dollars = Math.floor(cents / denomination.dollar);
    cents = cents % denomination.dollar;
  }
  if (cents >= denomination.halfdollar) {
    coins.halfdollars = Math.floor(cents / denomination.halfdollar);
    cents = cents % denomination.halfdollar;
  }
  if (cents >= denomination.quarter) {
    coins.quarters = Math.floor(cents / denomination.quarter);
    cents = cents % denomination.quarter;
  }
  if (cents >= denomination.dime) {
    coins.dimes = Math.floor(cents / denomination.dime);
    cents = cents % denomination.dime;
  }
  if (cents >= denomination.nickel) {
    coins.nickels = Math.floor(cents / denomination.nickel);
    cents = cents % denomination.nickel;
  }
  if (cents >= denomination.penny) {
    coins.pennies = Math.floor(cents / denomination.penny);
    cents = cents % denomination.penny;
  }

  return coins;
}

console.log(generateCoinChange(100));

//  Messy Math Mashup Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num , e x cept for the following special cases of our count value: If current count (not num ) is evenly divisible by 3, don’t add to sum ; skip to the next count ; Otherwise, i f current count is evenly divisible by 7, include it twice in sum instead of once; Regardless of the above, i f current count is exactly 1/3 of num , return -1 immediately. For example, if given num is 4 , return 7 . If given num is 8 , return 34 . If given num is 15 , return -1 .

function messyMath(num) {
  let sum = 0;

  for (i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      continue;
    } else if (i % 7 === 0) {
      sum += 2 * i;
    } else if (i % (num / 3) === 0) {
      return -1;
    } else {
      sum += i;
    }
  }

  return sum;
}

console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));


//  Extract-o-matic Create the extractDigit(num, digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2) , return 8 . Given ( 1824,0 ) , return 4 . Given ( 1824,7 ) , return 0 . 
// Second: handle negative digit Num values , where -1 represents tenths digit (0.x) , -2 represents hundredths digit (0.0x) , etc. Given (123.45,-1) , return 4 . 
// Third: handle negative num values as well, doing what you think is appropriate. 

function extractDigit(num, digitPlace) {
  let divideBy = '1';

  if (Number.isInteger(num)) {
    num = Math.abs(num);
  }

  if (digitPlace >= 0) {
    while (digitPlace > 0) {
      divideBy += '0';

      digitPlace--;
    }

    return Math.floor(num / Number(divideBy)) % 10;

  } else {
    while (digitPlace < 0) {
      debugger
      divideBy += '0';

      digitPlace++;
    }

    return Math.floor(num * Number(divideBy)) % 10;
  }
}

console.log(extractDigit(1824, 2));
console.log(extractDigit(1824, 7));
console.log(extractDigit(123.45, -1));

console.log(extractDigit(-1824, 2));

//  Most Significant Digit If you already know who Ada Lovelace is, that’s great! In a History of S cience, she is significant . Given number of any size, return the most significant digit. If you already know what strings are, that’s great! However, don’t use them here  . Hint: use WHILE to bring th e most significant digit into range where you can use the friendly modulus operator ( % ). The most significant digit is the leftmost non-zero digit of a number. Given 12345 , return 1 . Given 67.89 , return 6 . Given 0.00987 , return 9 . Second : handle negative num values as well, doing what you think is appropriate.