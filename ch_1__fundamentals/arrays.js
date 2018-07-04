//  Biggie Size Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig ([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5] . 

function makeItBig(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      array[i] = 'big';
    }
  }

  return array;
}

console.log(makeItBig([-1, 3, 5, -5]));
console.log(makeItBig([-1, 3, 0, 4]));

//  Print Low, Return High Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array. 

function printLowReturnHigh(arr) {
  let low = arr[0],
    high = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < low) { low = arr[i]; }
    else if (arr[i] > high) { high = arr[i]; }
  }

  console.log(low);
  return high;
}

console.log(printLowReturnHigh([1, 53, , 8, 5, 49, 64, 2, 5, -8, -9, -12]));

//  Print One, Return Another Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array . 

function printOneReturnAnother(arr) {
  let secondToLast = arr[arr.length - 2];
  console.log(secondToLast);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) return arr[i];
  }

  return false;
}

console.log(printOneReturnAnother([2, 4, 6, 8, 9, 15, 3, 6]));
console.log(printOneReturnAnother([2, 4, 6, 8]));
console.log(printOneReturnAnother([2]));

//  Double Vision Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original. 

const doubleVision = arr => arr.map(item => item * 2);

const originalArray = [1, 2, 3, 4, 5];
console.log(doubleVision(originalArray));
console.log(originalArray);

function doubleTheArray(arr) {
  const double = [];

  for (let item of arr) {
    double.push(item * 2);
  }

  return double;
}

console.log(doubleTheArray(originalArray));
console.log(originalArray);

//  Count Positives Given array of numbers, create function to replace last value with number of positive values. Example, countPositives ([-1,1,1,1]) change s array to [-1,1,1,3] and return s it. 

function countPositives(arr) {
  let positives = 0;

  for (let number of arr) {
    if (number >= 0) {
      positives++;
    }
  }

  arr[arr.length - 1] = positives;
  return arr;
}

console.log(countPositives([-1, 1, 1, 1]));

//  Evens and Odds Cre ate a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so !" 
function evenAndOdds(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] % 2 === 1 &&
      arr[i + 1] % 2 === 1 &&
      arr[i + 2] % 2 === 1
    ) { console.log("That's odd!"); }
    if (
      arr[i] % 2 === 0 &&
      arr[i + 1] % 2 === 0 &&
      arr[i + 2] % 2 === 0
    ) { console.log('Even more so!'); }
  }
}

evenAndOdds([1, 2, 3, 3, 3, 8, 4, 4, 4, 7, 7, 7, 7, 8, 8, 8, 3, 4, 6, 3, 3, 3, 3]);


//  Increment the Seconds Given arr , add 1 to odd elements ( [1] , [3] , etc . ) , console.log all values and return arr . 
function incrementTheSeconds(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      arr[i] += 1;
      console.log(arr[i]);
    } else {
      console.log(arr[i]);
    }
  }
  return arr;
}

console.log(incrementTheSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//  Pr evious Lengths You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array. 
function previousLengths(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i - 1]) {
      const previousLength = arr[i - 1].length;
      arr[i] = previousLength;
    } else {
      arr[i] = 0;
    }
  }
  return arr;
}

console.log(previousLengths(['this', 'is', 'a', 'test', 'set', 'of', 'strings']));

//  Add Seven to Most Build function that accepts array. Return a new array with all value s except first , adding 7 to each . Do not alter the original array . 

function addSevenToMost(arr) {
  let altered = [];

  for (let i = 1; i < arr.length; i++) {
    altered.push(arr[i] + 7);
  }

  return altered;
}

console.log(addSevenToMost([1, 2, 3, 4]));


//  Reverse Array Given array, write a function to reverse values, in-place. E xample : reverse([ 3,1,6,4,2 ]) return s same array, containing [2,4,6,1,3 ] .
function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let a = arr[i];
    let b = arr[arr.length - (i + 1)];

    [a, b] = [b, a];

    arr[i] = a;
    arr[arr.length - (i + 1)] = b;
  }
  return arr;
}

console.log(reverseArray([3, 1, 6, 4, 2]));
console.log(reverseArray([1, 2, 3, 4, 5]));

//  Outlook: Negative Given an array, create and return a new one containing all the values of the provided array, made negative ( not simply multiplied by -1 ). Given [1,-3,5] , return [-1,-3,-5] . 
function outlookNegative(arr) {
  return arr.map(elem => -Math.abs(elem));
}

console.log(outlookNegative([1, 2, -3, -4, 5]));

//  Always Hungry Create a function that a ccepts an array, and prints " yummy " each time one of the values is equal to " food " . If no array elements are " food " , then print " I ' m hungry " once. 
function alwaysHungry(arr) {
  let foodOccurrence = false;

  for (let item of arr) {
    if (item === 'food') {
      console.log('yummy');
      foodOccurrence = true;
    }
  }

  if (!foodOccurrence) {
    console.log("I'm hungry");
  }
}

alwaysHungry(['nothing', 'to', 'eat']);
alwaysHungry(['found', 'some', 'food', 'hmmm', 'food']);


//  Swap Toward the Center Given array , swap first and last, third and third-to-last, etc . Input [ true ,42, " Ada " , 2, "pizza" ] becomes [ "pizza" ,42, " Ada " , 2, true ] . Change [1,2,3,4,5,6 ] to [ 6 , 2 , 4 , 3 ,5 , 1 ] . 
function swapTowardTheCenter(arr) {
  for (let i = 0; i < arr.length / 2; i += 2) {

    let a = arr[i];
    let b = arr[arr.length - (i + 1)];

    [a, b] = [b, a];

    arr[i] = a;
    arr[arr.length - (i + 1)] = b;
  }

  return arr;
}

console.log(swapTowardTheCenter([true, 42, "Ada", 2, "pizza"]));
console.log(swapTowardTheCenter([1, 2, 3, 4, 5, 6]));

//  Scale the Array Given array arr and number num , multiply each arr value by num , and return the changed arr .
function scaleArray(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= num;
  }

  return arr;
}

console.log(scaleArray([1, 2, 3, 4, 5], 4));