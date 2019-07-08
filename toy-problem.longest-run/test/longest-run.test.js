const { longestRun } = require('../src/longest-run.js');
const { expect } = require('chai');

describe('longestRun', function () {

  it('should exist', function () {
    expect(longestRun).to.exist;
  });

  it('should be a function', function () {
    expect(longestRun).to.be.a('function');
  });

  it('should return an array', function () {
    expect(longestRun('abc')).to.be.an('array');
  });

  it('should return an array with only two elements', function () {
    // the length of the result array should always have exactly two elements.
    // that contain the `start` and `end` indices in the original string.
    expect(longestRun('abc').length).to.equal(2);
    expect(longestRun("aabbbc").length).to.equal(2);
  });

  it('should return an array with the `start` and `end` index', function () {
    expect(longestRun("abbbcc")).to.eql([1, 3]);
    expect(longestRun("aabbc")).to.eql([0, 1]);
    expect(longestRun("abcd")).to.eql([0, 0]);
  });

  it('should work for long strings', function () {
    // `repeat` returns a string with the `input` string repeated `n` times
    // ie., repeat('v', 3) would return 'vvv'
    var repeat = function (input, n) {
      var output = '';
      for (var i = 0; i < n; i++) {
        output = output + input;
      }
      return output;
    };
    var aaaa = repeat('a', 342);  // repeat `a` 342 times
    var jjjj = repeat('j', 583);  // repeat `j` 583 times
    var zzzz = repeat('z', 1000); // repeat `z` 1000 times
    var input = aaaa + zzzz + jjjj;
    expect(longestRun(input)).to.eql([342, 1341]);
  });

  it('should handle the edge-case of an empty string', function () {
    // watch out for edge-cases! There is no longest run of an empty string.
    expect(longestRun('')).to.not.exist;
  });
});
