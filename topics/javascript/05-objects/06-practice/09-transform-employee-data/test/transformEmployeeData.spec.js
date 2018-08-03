const Assert = require('chai').assert;
const transformEmployeeData = require('../solution/transformEmployeeData');

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/09-transform-employee-data/test/transformEmployeeData.spec.js
describe("transformEmployeeData()", function () {
  it("deve devolver [{a: 1, b: 2, c: true}, {a: 10, b: 20, c: false}], para [[['a', 1], ['b', 2], ['c', true]],[['a', 10], ['b', 20], ['c', false]]]", function () {
    var array = [
=======
describe('transformEmployeeData()', () => {
  it("debería regresar [{a: 1, b: 2, c: true}, {a: 10, b: 20, c: false}], para [[['a', 1], ['b', 2], ['c', true]],[['a', 10], ['b', 20], ['c', false]]]", () => {
    const array = [
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/09-transform-employee-data/test/transformEmployeeData.spec.js
      [
        ['a', 1], ['b', 2], ['c', true],
      ],
      [
        ['a', 10], ['b', 20], ['c', false],
      ],
    ];
    const hasil = [
      { a: 1, b: 2, c: true },
      { a: 10, b: 20, c: false },
    ];
    Assert.deepEqual(transformEmployeeData(array), hasil);
  });

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/09-transform-employee-data/test/transformEmployeeData.spec.js
  it("deve devolver [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}], para [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]", function () {
    var array = [
=======
  it("debería regresar [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}], para [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]", () => {
    const array = [
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/09-transform-employee-data/test/transformEmployeeData.spec.js
      [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'],
      ],
      [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager'],
      ],
    ];
    const hasil = [
      {
        firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk',
      },
      {
        firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager',
      },
    ];
    Assert.deepEqual(transformEmployeeData(array), hasil);
  });
});
