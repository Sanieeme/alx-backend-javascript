// 2-calcul_chai.js

function calculateNumber(type, a, b) {
  // Round the numbers
  a = Math.round(a);
  b = Math.round(b);

  if (type === 'SUM') {
    return a + b; // sum of rounded a and b
  } else if (type === 'SUBTRACT') {
    return a - b; // subtract rounded b from a
  } else if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error'; // check for division by zero
    }
    return Math.round(a / b * 100) / 100; // round to 2 decimal places
  }
}

module.exports = calculateNumber;
