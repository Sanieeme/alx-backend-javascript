const assert = require('assert');
const calculateNumber = require("./math");

describe('calculateNumber', () => {
  it('should return sum', function() => {
    assert.strictEqual(calculateNumber.add(1, 2),(3);
});
  it('should handle negative numbers', function() => {
    assert.strictEqual(calculateNumber.add(-1, -2),(-3);
  });
});
