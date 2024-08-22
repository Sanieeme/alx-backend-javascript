(async () => {
  const { expect } = await import('chai');
  const calculateNumber = require('./2-calcul_chai');

  describe('calculateNumber', () => {
    describe('SUM', function() {
      it('should return the sum of two positive numbers', function() {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
      });
      it('should return the sum of two negative numbers', function() {
        expect(calculateNumber('SUM', -1, -2)).to.equal(-3);
      });
      it('should round and sum two floating-point numbers', function() {
        expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
        expect(calculateNumber('SUM', 1.5, 2.4)).to.equal(4);
      });
    });

    describe('SUBTRACT', function() {
      it('should subtract two positive numbers', function() {
        expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
      });
      it('should subtract two negative numbers', function() {
        expect(calculateNumber('SUBTRACT', -2, -1)).to.equal(-1);
      });
      it('should round and subtract two floating-point numbers', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 2.6)).to.equal(-2);
        expect(calculateNumber('SUBTRACT', 1.5, 2.4)).to.equal(-1);
      });
    });

    describe('DIVIDE', function() {
      it('should divide two positive numbers', function() {
        expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
      });
      it('should divide two negative numbers', function() {
        expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
      });
      it('should divide positive and negative numbers', function() {
        expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
      });
      it('should round and divide two floating-point numbers', function() {
        expect(calculateNumber('DIVIDE', 4.4, 2.2)).to.equal(2);
      });
      it('should throw an error when dividing by zero', function() {
        expect(() => calculateNumber('DIVIDE', 2, 0)).to.throw('Error');
      });
    });

    describe('Invalid type', function() {
      it('should throw an error for an unknown operation type', function() {
        expect(() => calculateNumber('MULTIPLY', 2, 1)).to.throw('Error: MULTIPLY');
      });
    });
  });
})();
