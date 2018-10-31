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

//  Date , on a Deserted Island
// After a particularly fabulous New Year’s Eve party to end 2016, Eduardo wakes to find himself stranded on a deserted island. He misses his home in Burbank, but at least now he can spend plenty of time outdoors – and you can’t beat the commute! To pass the time until he is rescued, he counts sunrises. 
// 1) Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum) function that, given a number between 1 and 7, will console.log a string containing the day of the week for that number ( given 1 , log "Sunday" ). Use a SWITCH statement. 
// 2) Expand weekdayName () to create weekdayName2(dayNum) accepting numbers up to 365. Return weekday as before, given number of days total. "Sunday" still corresponds to 1 . 
// 3) Create a new function someDays() that calls weekDayName2 () seventeen times, with randomly generated integers as high as 365. Log each result string. If it is a weekday, add the phrase "Work hard!" , and if it is a weekend day, add "Enjoy your day off!" 
// 4) Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing month for that number ( "May" corresponds to 5 ). Use an array, without loops. 
// 5) Now expand monthName () to create monthToDays(monthNum) , returning the number of days in that month, in the year 2017. Hint: use a SWITCH statement for the days in each month. 
// 6) Despite using his ember expertise to create a glowing SOS visible from space, the days go by and sadly Eduardo is still not rescued. Is it spring yet? It might as well be. Build on monthName () to create dayToMonth(dayNum) . If given a day number since the year began, return the current month (assume it is not a Leap Year). Given 75 , return "March" . 
// 7) Eduardo builds a Dojo bootcamp on the island. Initially his students only find Ninja Gold in caves, but eventually even his tree sloths can write code quickly! Dojo classes meet Monday t hru Friday, so let’s reincorporate weekday to our calculations. Construct fullDate(dayNum) to accept number of days so far in 2017, and return a full date string. He hardly remembers that fateful New Year’s Eve party, but he knows it was a Saturday. Given 142 , return "Monday, May 22, 2017" . 
// 8) Times flies when you’re at a Dojo – months in fact. Build fullDate2(dayNum) that will be given a 4-digit integer: the days that have passed since December 31, 2016. This number can stretch into future years! You can assume that any year number divisible by four is a leap year and has a 29-day February. Given 8475 , return "Thursday, March 15, 2040" . 
// 9) Eduardo hacks the Google Maps API and adds this long-forgotten island back onto the map. Soon he is rescued! News of his Hemingway-like stoicism make him famous for centuries. Build fullDate3 (dayNum) to handle days up to 140,000! Note: years 2100, 2200, and 2300 are not leap years (although 2400 is ). Given 139947 , return "Tuesday, February 29, 2400" . Having completed this epic saga, you are ready for additional concepts and chapters! Journey safely ….


// 1) Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum) function that, given a number between 1 and 7, will console.log a string containing the day of the week for that number ( given 1 , log "Sunday" ). Use a SWITCH statement. 

function weekdayName(weekdayNum) {
  switch (weekdayNum) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Not a day of the week");
  }
}

weekdayName(4);


// 2) Expand weekdayName () to create weekdayName2(dayNum) accepting numbers up to 365. Return weekday as before, given number of days total. "Sunday" still corresponds to 1 . 

function weekdayName2(weekdayNum) {
  let weekday = weekdayNum % 7;

  if (weekday === 0) weekday = 7;
  weekdayName(weekday);

  return weekday;
}

weekdayName2(365);


// 3) Create a new function someDays() that calls weekDayName2 () seventeen times, with randomly generated integers as high as 365. Log each result string. If it is a weekday, add the phrase "Work hard!" , and if it is a weekend day, add "Enjoy your day off!" 

function someDays() {
  function getRandomDayNumber() {
    return Math.floor(Math.random() * 365 + 1);
  }

  let calls = 17;

  while (calls > 0) {
    const weekdayNum = getRandomDayNumber();
    const weekday = weekdayName2(weekdayNum);

    if (weekday >= 2 && weekday <= 6) {
      console.log('Work hard!');
    } else {
      console.log('Enjoy your day off!');
    }

    calls--;
  }
}

someDays();


// 4) Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing month for that number ( "May" corresponds to 5 ). Use an array, without loops. 

function monthName(monthNum) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if (monthNum < 1 || monthNum > 12) { return -1; }

  console.log(months[monthNum - 1]);
}

monthName(5);

// 5) Now expand monthName () to create monthToDays(monthNum) , returning the number of days in that month, in the year 2017. Hint: use a SWITCH statement for the days in each month. 

function monthToDays(monthNum) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (monthNum < 1 || monthNum > 12) { return -1; }

  console.log(days[monthNum - 1]);
}

monthToDays(5);

// 6) Despite using his ember expertise to create a glowing SOS visible from space, the days go by and sadly Eduardo is still not rescued. Is it spring yet? It might as well be. Build on monthName () to create dayToMonth(dayNum) . If given a day number since the year began, return the current month (assume it is not a Leap Year). Given 75 , return "March" . 

function dayToMonth(dayNum) {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let daysOfMonthsBefore = 31;

  for (let i = 1; i < days.length; i++) {
    if (dayNum <= daysOfMonthsBefore) return monthName(i);
    daysOfMonthsBefore += days[i];
  }
}

dayToMonth(91);