//  Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s.length immediately shorten s it by that amount.Given array arr and number X, remove all except the last X elements, and return arr(changed and shorter).Given([2, 4, 6, 8, 10], 3), change the given array to[6, 8, 10] and return it.

function keepTheLastFew(arr, num) {
  let cicles = arr.length - num;

  while (cicles > 0) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];

    }
    arr.length--;
    cicles--;
  }

  return arr;
}

console.log(keepTheLastFew([2, 4, 6, 8, 10], 3));
console.log(keepTheLastFew([2, 4, 6, 8, 10], 1));
console.log(keepTheLastFew([2, 4, 6, 8, 10], 0));

//  Math Help
// Cartman doesn’t really like math; he needs help.You are given two numbers – coefficients M and B in the equation Y = M X + B.Build a function to return the X - intercept(his older cousin Fiaz wisely reminds him that X - intercept is the value of X where Y equals zero ; Cartman just snorts in his general direction ).

function mathHelp(m, b) {
  let y = 0;
  let x = (y - b) / m;

  return x;
}

console.log(mathHelp(3, 6));

//  Poor Kenny
// Kenny tries to stay safe, but somehow everyday some thing happen s.Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors(for 100 days total) .If these probabilities continue , write whatHappensToday() to print a day’s outcome.

function whatHappensToday() {
  const probability = Math.random();

  if (probability < 0.10) {
    return 'Volcanos!';
  } else if (probability < 0.25) {
    return 'Tsunamis!';
  } else if (probability < 0.45) {
    return 'Earthquakes!';
  } else if (probability < 0.7) {
    return 'Blizzards!';
  } else if (probability <= 1) {
    return 'Meteors!';
  }
}

console.log(whatHappensToday());

//  What Really Happened ?
//   Kyle(smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another.Change whatHappensToday() function to create whatReallyHappensToday().In this new function test for each disaster independently, instead of assuming exactly one disaster will happen.I n other words, with this new function , all five might occur today – or none.M aybe Kenny will survive!

function whatReallyHappensToday() {
  const probability = Math.random();

  if (probability < 0.1) console.log('Volcanos!');
  if (probability < 0.25) console.log('Tsunamis!');
  if (probability < 0.45) console.log('Earthquakes!');
  if (probability < 0.7) console.log('Blizzards!');
  if (probability <= 1) console.log('Meteors!');
}

whatReallyHappensToday();

//  Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered with a modest IQ of 101. Let’s say that during a 14 - week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc.all the way until increasing by .98 on his 98 th day(the end of 14 full weeks).What is Bogdan’s final IQ ?

function soaringIQ(IQ, days) {
  let increaseRate = 0.01;
  let increaseAmount = 0;

  while (days > 0) {
    increaseAmount += increaseRate;
    increaseRate += 0.01;

    days--;
  }

  IQ += increaseAmount;

  return Math.floor(IQ);
}

console.log(soaringIQ(101, 98));

//  Letter Grade
// Mr.Cerise teaches high school math.W rite a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100 ? Those getting 90 + get an ‘A’, 80 - 89 earn ‘B’, 70 - 79 is a ‘C’, 60 - 69 should get a ‘D’, and lower than 60 re ceive ‘F’.For example, given 88, you should log " Score: 88 . Grade: B ".Given the score 61, log the string " Score: 61. Grade: D ".

function letterGrade(score) {
  let grade;

  if (score >= 90) grade = 'A';
  else if (score >= 80) grade = 'B';
  else if (score >= 70) grade = 'C';
  else if (score >= 60) grade = 'D';
  else if (score < 60) grade = 'F';

  return `Score: ${score}. Grade: ${grade}`;
}

console.log(letterGrade(61));
console.log(letterGrade(88));

//  More Accurate Grades
// F or an additional challenge, add ‘ - ’ signs to scores in the bottom two percent of A, B, C and D scores, and “ + ” signs to the top two percent of B, C and D scores(sorry, Mr.Cerise never gives an A +).Given 88, console.log " Score: 88. Grade: B+ ".Given 61, log " Score: 61. Grade: D- ".

function moreAccurateGrades(score) {
  let grade;

  if (score >= 90) grade = 'A';
  else if (score >= 80 && score < 83) grade = 'B-';
  else if (score >= 80 && score > 87) grade = 'B+';
  else if (score >= 70 && score < 73) grade = 'C-';
  else if (score >= 70 && score > 77) grade = 'C+';
  else if (score >= 60 && score < 63) grade = 'D-';
  else if (score >= 60 && score > 67) grade = 'D+';
  else if (score < 60) grade = 'F';

  return `Score: ${score}. Grade: ${grade}`;
}

console.log(moreAccurateGrades(61));
console.log(moreAccurateGrades(88));