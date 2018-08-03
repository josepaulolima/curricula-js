const Assert = require('chai').assert;
const getLongestOfThreeWords = require('../solution/getLongestOfThreeWords');

<<<<<<< HEAD:02-basic-programming/02-arrays/06-practice/13-get-longest-of-three-words/test/getLongestOfThreeWords.spec.js
describe("getLongestOfThreeWords()", function () {
  it("deve devolver 'these', para 'these', 'three', 'words'", function () {
    var output = getLongestOfThreeWords('these', 'three', 'words');
=======
describe('getLongestOfThreeWords()', () => {
  it("debería regresar 'these', para 'these', 'three', 'words'", () => {
    const output = getLongestOfThreeWords('these', 'three', 'words');
>>>>>>> upstream/master:topics/javascript/04-arrays/06-practice/13-get-longest-of-three-words/test/getLongestOfThreeWords.spec.js

    Assert.deepEqual(output, 'these');
  });

<<<<<<< HEAD:02-basic-programming/02-arrays/06-practice/13-get-longest-of-three-words/test/getLongestOfThreeWords.spec.js
  it("deve devolver 'three', para 'a', 'two', 'three', 'four'", function () {
    var output = getLongestOfThreeWords('a', 'two', 'three', 'four');
=======
  it("debería regresar 'three', para 'a', 'two', 'three', 'four'", () => {
    const output = getLongestOfThreeWords('a', 'two', 'three', 'four');
>>>>>>> upstream/master:topics/javascript/04-arrays/06-practice/13-get-longest-of-three-words/test/getLongestOfThreeWords.spec.js

    Assert.deepEqual(output, 'three');
  });
});
