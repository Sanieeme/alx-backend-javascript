// 3-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    // Create a spy for Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    // Call the function we are testing
    sendPaymentRequestToApi(100, 20);

    // Check that the spy was called with the correct arguments
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the spy after the test
    spy.restore();
  });
});
