// 4-payment.js
const Utils = require('./utils'); // Assuming `Utils` is a separate file that exports `calculateNumber`
const console = require('console');

function processPayment(type, a, b) {
  const result = Utils.calculateNumber(type, a, b); // Calling the expensive method (which will be stubbed)
  console.log(`The total is: ${result}`);
}

module.exports = processPayment;

