// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.6, 2.3), 4);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.8, 1.1), 2);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      // Updated expected value
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
      assert.strictEqual(calculateNumber('DIVIDE', 6.5, 2.4), 3.5);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), {
        name: 'Error',
        message: 'Invalid operation type',
      });
    });
  });
});
