//  Gaming Fun(damentals) 
// It’s New Year’s Eve, so let’s play s ome dice games! It’ll be fun. What could go wrong? 
// 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive). 
// 2) Second, create a function playFives(num) , which should call rollOne() multiple times – ‘ num ' times, in fact, where 'num' is input parameter to playFiv es(num) . Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!” 
// 3) Third, create a new function named playStatistics() , which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne , among those eight calls. 
// 4) Fourth, make a copy of playStatistics and add code to make playStatistics2() , so that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls. 
// 5) Fifth, copy playStatistics2 and add code to it to make playStatistics3(num) , so that it will roll as many times as you want,instead of always doing this eight times. 
// 6) Finally, make a copy of playStatistics3 and change it to create playStatistics4(num) , so that at the end instead of the total sum, it prints the average roll.

function rollOne() {
  return Math.floor(Math.random() * 6 + 1);
}

function playFives(num) {
  while (num > 0) {
    let roll = rollOne();
    console.log('Roll: ', roll);

    if (roll === 5) console.log('That\'s good luck!');

    num--;
  }

  return 'Game Over';
}

function playStatistics() {
  let count = 8;
  let lowest;
  let highest;

  while (count > 0) {
    const roll = rollOne();
    if (!lowest && !highest) {
      lowest = roll;
      highest = roll;
    }

    if (roll < lowest) {
      lowest = roll;
    } else if (roll > highest) {
      highest = roll;
    }

    count--;
  }

  return `Lowest roll out of eight was: ${lowest}.
Highest roll out of eight was: ${highest}.`
}


function playStatistics2() {
  let count = 8;
  let lowest, highest;
  let sumOfAllRolles = 0;

  while (count > 0) {
    const roll = rollOne();
    if (!lowest && !highest) {
      lowest = roll;
      highest = roll;
    }

    if (roll < lowest) {
      lowest = roll;
    } else if (roll > highest) {
      highest = roll;
    }

    sumOfAllRolles += roll;
    count--;
  }

  return `Lowest roll out of eight was: ${lowest}.
Highest roll out of eight was: ${highest}.
Sum of all rolles is: ${sumOfAllRolles}.`
}

function playStatistics3(num) {
  let lowest, highest;
  let sumOfAllRolles = 0;

  while (num > 0) {
    const roll = rollOne();
    if (!lowest && !highest) {
      lowest = roll;
      highest = roll;
    }

    if (roll < lowest) {
      lowest = roll;
    } else if (roll > highest) {
      highest = roll;
    }

    sumOfAllRolles += roll;
    num--;
  }

  return `Lowest roll out of eight was: ${lowest}.
Highest roll out of eight was: ${highest}.
Sum of all rolles is: ${sumOfAllRolles}.`
}


function playStatistics3(num) {
  let rolles = num;
  let lowest, highest;
  let sumOfAllRolles = 0;
  let average = 0;

  while (num > 0) {
    const roll = rollOne();
    if (!lowest && !highest) {
      lowest = roll;
      highest = roll;
    }

    if (roll < lowest) {
      lowest = roll;
    } else if (roll > highest) {
      highest = roll;
    }

    sumOfAllRolles += roll;
    num--;
  }

  average = sumOfAllRolles / rolles;

  return `Lowest roll out of eight was: ${lowest}.
Highest roll out of eight was: ${highest}.
Average of all rolles is: ${average}.`
}


console.log(playStatistics3(2));