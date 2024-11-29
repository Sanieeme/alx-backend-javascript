// 2-calcul_chai.test.js

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe("Test calculateNumber function", function() {
  describe("SUM", function() {
    it("should add two rounded numbers", function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe("SUBTRACT", function() {
    it("should subtract two rounded numbers", function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-3);
    });
  });

  describe("DIVIDE", function() {
    it("should divide two rounded numbers", function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.31);
    });

    it("should return 'Error' if dividing by 0", function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe("Edge cases", function() {
    it("should handle negative numbers in SUM", function() {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-6);
    });

    it("should handle negative numbers in SUBTRACT", function() {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });

    it("should handle negative numbers in DIVIDE", function() {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.31);
    });

    it("should handle very large numbers", function() {
      expect(calculateNumber('SUM', 1e15, 1e15)).to.equal(2e15);
    });
  });
});
