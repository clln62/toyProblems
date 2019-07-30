const largestProductOfThree = require('../src/largest-product-of-three')

const { expect } = require('chai')

describe('largestProductOfThree', function() {
  it('should be a function', function() {
    expect(largestProductOfThree).to.be.a('function')
  });

  it('should return an integer', function() {
    var result = largestProductOfThree([1, 2, 3]);

    expect(result).to.be.a('number')
  });

  it('should handle three positive numbers', function() {
    expect(largestProductOfThree([0, 2, 3])).to.equal(0)
    expect(largestProductOfThree([2, 3, 5])).to.equal(30)
    expect(largestProductOfThree([7, 5, 3])).to.equal(105)
    expect(largestProductOfThree([7, 5, 7])).to.equal(245)
  });

  it('should handle more than three positive numbers', function() {
    expect(largestProductOfThree([2, 5, 3, 7])).to.equal(105)
    expect(largestProductOfThree([11, 7, 5, 3, 2])).to.equal(385)
    expect(largestProductOfThree([2, 13, 7, 3, 5, 11])).to.equal(1001)
    expect(largestProductOfThree([2, 11, 13, 7, 13, 3, 11, 5])).to.equal(1859)
  });

  xit('EXTRA CREDIT: should handle negative numbers', function() {
    expect(largestProductOfThree([2, 3, -11, 7, 5, -13])).to.equal(1001)
    expect(largestProductOfThree([-31, 41, 34, -37, -17, 29])).to.equal(47027)
    expect(largestProductOfThree([-1, -2, -3, -4, -5, -6])).to.equal(-6)
  });

});