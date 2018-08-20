//  Statistics Until Doubles Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls , min , max , and average .

function untilDoubles() {
  function rollDice() {
    return Math.floor(Math.random() * 20 + 1);
  }

  const rolles = [];
  let currentDice = rollDice();
  let lastRoll = rolles[rolles.length - 1];

  while (currentDice !== lastRoll) {
    rolles.push(currentDice);
    lastRoll = rolles[rolles.length - 1];
    currentDice = rollDice();

    if (currentDice === lastRoll) {
      rolles.push(currentDice);
    }
  }

  let sum = 0;
  let average = 0;

  rolles.map(roll => {
    sum += roll;
  });

  average = sum / rolles.length;

  return `
Total number of rolles: ${rolles.length}.
Highest rolled number: ${Math.max(...rolles)}.
Lowest rolled number: ${Math.min(...rolles)}.
Average rolled number was: ${Math.floor(average)}.
  `;
}

console.log(untilDoubles());