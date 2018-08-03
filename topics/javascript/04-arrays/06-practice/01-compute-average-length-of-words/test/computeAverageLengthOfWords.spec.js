const Assert = require('chai').assert;
const computeAverageLengthOfWords = require('../solution/computeAverageLengthOfWords');

describe('computeAverageLengthOfWords()', () => {
<<<<<<< HEAD:02-basic-programming/02-arrays/06-practice/01-compute-average-length-of-words/test/computeAverageLengthOfWords.spec.js

  it('deve devolver  4, para  ("A", "kamnjhs")', () => {
=======
  it('debería regresar  4, para  ("A", "kamnjhs")', () => {
>>>>>>> upstream/master:topics/javascript/04-arrays/06-practice/01-compute-average-length-of-words/test/computeAverageLengthOfWords.spec.js
    Assert.deepEqual(computeAverageLengthOfWords('A', 'kamnjhs'), 4);
  });

  it('deve devolver  12, para ("Lalalalala", "Kekekekekekeke")', () => {
    Assert.deepEqual(computeAverageLengthOfWords('Lalalalala', 'Kekekekekekeke'), 12);
  });

  it('deve devolver 5, para ("Kemal", "Kemal")', () => {
    Assert.deepEqual(computeAverageLengthOfWords('Kemal', 'Kemal'), 5);
  });
});
