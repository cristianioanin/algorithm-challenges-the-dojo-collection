//  Twelve-Bar Blues Write a function that console.log s the number 1 , then " chick " , then " boom " , then " chick " , then 2 , then " chick " , " boom " , " chick " – continuing the same cycle for each number up to (including) 12 .

function twelveBarBlues() {
  for (let i = 1; i <= 12; i++) {
    console.log(`${i}
chick
boom
chick`);
  }
}

twelveBarBlues();

//  Fibonacci Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: f ibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 ( fib (0) + fib (1) , or 0+1), fibonacci(3) = 2 ( fib (1) + fib (2) , or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc. 

function fibonacci(num) {
  let count = 1;
  let a = 0;
  let b = 1;

  let temp;

  while (count < num) {
    temp = a;
    a = a + b;
    b = temp;

    count++;
  }

  return a + b;
}

console.log(fibonacci(10));

//  Sum to One Digit Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1 , because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1 . 

function sumToOne(num) {
  num = num.toString().split('');

  while (num.length > 1) {
    let sum = num.reduce((a, b) => Number(a) + Number(b));
    num = sum.toString().split('');
  }

  return Number(num[0]);
}

console.log(sumToOne(928));
console.log(sumToOne(15928));


//  Clock Hand Angles Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour , minute and second hands. As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print " Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 deg s. " For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log " Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs. " Note: i n the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.
// Second: also calculate and print degrees for a n additional “week hand” that r otates once each week . 

function clockHandAngles(secs) {
  const HMS = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  const angles = {
    hr: 360 / 12,
    min: 360 / 60,
    sec: 360 / 60
  }

  const degrees = {
    hourHand: 0,
    minuteHand: 0,
    secondHand: 0
  }

  function divideToHMS(secs) {
    if (secs >= 3600) {
      HMS.hours = Math.floor(secs / 3600) % 12;
      secs = secs % 3600;
    }
    if (secs >= 60) {
      HMS.minutes = Math.floor(secs / 60);
      secs = secs % 60;
    }
    HMS.seconds = secs;
  }
  divideToHMS(secs)

  function translateToDegrees(HMS, angles, degrees) {
    degrees.hourHand = (HMS.hours * angles.hr) + (angles.hr * (HMS.minutes / 60)) + (angles.hr * (HMS.seconds / 3600));
    degrees.minuteHand = (HMS.minutes * angles.min) + (angles.min * (HMS.seconds / 60));
    degrees.secondHand = (HMS.seconds * angles.sec);
  }
  translateToDegrees(HMS, angles, degrees);

  return `For time: ${HMS.hours}:${HMS.minutes}:${HMS.seconds}
  Hour hand at ${Math.round(degrees.hourHand)} degrees
  Minute hand at ${Math.round(degrees.minuteHand)} degrees
  Second hand at ${Math.round(degrees.secondHand)} degrees`
}

console.log(clockHandAngles(119730));
console.log(clockHandAngles(3600));
console.log(clockHandAngles(5142));


//  Is Prime Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(11));
console.log(isPrime(13));
console.log(isPrime(16));