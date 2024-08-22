function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a + b);
  }
  else if (type === 'SUBTRACT') {
    return Math.round(a - b);
  }
  else if (type === 'DIVIDE') {
    if (b === 0) {
      throw new Error('Error')
    }
    return Math.round(a / b);
  }
  else {
    throw new Error(`Error: ${type}`);
  }
}


module.exports = calculateNumber;
