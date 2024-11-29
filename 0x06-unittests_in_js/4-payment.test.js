// 4-payment.test.js
const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const processPayment = require('./4-payment');

describe("Test processPayment function", function () {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function () {
    // Create a stub for Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Create a spy for console.log to verify the logging behavior
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and the spy
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it("should call calculateNumber with the correct arguments", function () {
    // Call processPayment with specific arguments
    processPayment('SUM', 100, 20);

    // Verify that calculateNumber was called with 'SUM', 100, and 20
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it("should log the correct message", function () {
    // Call processPayment
    processPayment('SUM', 100, 20);

    // Verify that console.log was called with the expected message
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});

