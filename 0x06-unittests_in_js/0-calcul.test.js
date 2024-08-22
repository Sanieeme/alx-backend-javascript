const assert = require('assert');
const calculateNumber = require("./0-calcul");

describe('calculateNumber', () => {
  it('should return sum', function() {
    assert.strictEqual(calculateNumber(1, 2), 3);
});
  it('should handle negative numbers', function() {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });
  it('should handle negative and positive', function() {
    assert.strictEqual(calculateNumber(1.5, -1.0), 1);
  });
});
