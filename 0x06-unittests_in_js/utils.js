// utils.js
const Utils = {
  calculateNumber: function (type, a, b) {
    if (type === 'SUM') {
      return Math.round(a + b);
    }
    if (type === 'SUBTRACT') {
      return Math.round(a - b);
    }
    if (type === 'DIVIDE') {
      if (b === 0) {
        return 'Error';
      }
      return Math.round(a / b);
    }
    return 0;
  }
};

module.exports = Utils;
