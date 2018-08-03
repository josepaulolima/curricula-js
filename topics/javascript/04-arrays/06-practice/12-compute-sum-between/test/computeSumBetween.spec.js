const Assert = require('chai').assert;
const computeSumBetween = require('../solution/computeSumBetween');

<<<<<<< HEAD:02-basic-programming/02-arrays/06-practice/12-compute-sum-between/test/computeSumBetween.spec.js
describe("computeSumBetween()", function () {
  it("deve devolver [{a: 1, b: 2, c: true}, {a: 10, b: 20, c: false}], para [[['a', 1], ['b', 2], ['c', true]],[['a', 10], ['b', 20], ['c', false]]]", function () {
    var output = computeSumBetween(5, 5);
=======
describe('computeSumBetween()', () => {
  it("debería regresar [{a: 1, b: 2, c: true}, {a: 10, b: 20, c: false}], para [[['a', 1], ['b', 2], ['c', true]],[['a', 10], ['b', 20], ['c', false]]]", () => {
    const output = computeSumBetween(5, 5);
>>>>>>> upstream/master:topics/javascript/04-arrays/06-practice/12-compute-sum-between/test/computeSumBetween.spec.js

    Assert.deepEqual(output, 0);
  });

<<<<<<< HEAD:02-basic-programming/02-arrays/06-practice/12-compute-sum-between/test/computeSumBetween.spec.js
  it("deve devolver [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}], para [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]", function () {
    var output = computeSumBetween(2, 5);
=======
  it("debería regresar [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}], para [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]", () => {
    const output = computeSumBetween(2, 5);
>>>>>>> upstream/master:topics/javascript/04-arrays/06-practice/12-compute-sum-between/test/computeSumBetween.spec.js

    Assert.deepEqual(output, 9);
  });
});
