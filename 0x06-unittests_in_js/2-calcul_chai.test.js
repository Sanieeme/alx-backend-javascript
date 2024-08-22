const assert = require('assert');
const calculateNumber = require("./math");

describe('calculateNumber', () => {
  it('should return sum', function() => {
    assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
  });
  it('should handle negative numbers', function() => {
    assert.strictEqual(calculateNumber('SUM', -1, -2),-3);
  });
  
  it('should subtract', function() => {
  assert.strictEqual(calculateNumber('SUBTRACT', 2, 1), 1);
  });
  it('should handle negative numbers', funtion() => {
    assert.strictEqual(calculateNumber('SUBTRACT', -2, -1), -1);
  });
  it('should divide', function() => {
  assert.strictEqual(calculateNumber('DIVIDE', 2, 1), 2);
  });
  it('should handle negative numbers', funtion() => {
    assert.strictEqual(calculateNumber('DIVIDE', -2, -1), -2);
  });
  it('should divide', function() => {
  assert.strictEqual(calculateNumber('DIVIDE', 2, 0), 0);
  });
  it('should handle negative numbers', funtion() => {
    assert.strictEqual(calculateNumber('SUBTRACT', -2, 0), 0);
  });
});
