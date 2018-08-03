const Assert = require('chai').assert;
const convertObjectToList = require('../solution/convertObjectToList');

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/10-convert-object-to-list/test/convertObjectToList.spec.js
describe("convertObjectToList()", function () {
  it("deve devolver [['a', 1], ['b', 'c'], ['d', true], ['e', 10]], para { a: 1, b: 'c', d: true, e: 10 }", function () {
    var obj = {
=======
describe('convertObjectToList()', () => {
  it("debería regresar [['a', 1], ['b', 'c'], ['d', true], ['e', 10]], para { a: 1, b: 'c', d: true, e: 10 }", () => {
    const obj = {
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/10-convert-object-to-list/test/convertObjectToList.spec.js
      a: 1,
      b: 'c',
      d: true,
      e: 10,
    };
    const hasil = [['a', 1], ['b', 'c'], ['d', true], ['e', 10]];

    Assert.deepEqual(convertObjectToList(obj), hasil);
  });

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/10-convert-object-to-list/test/convertObjectToList.spec.js
  it("deve devolver [['name', 'Holly'], ['age', 35], ['role', 'producer']], para { name: 'Holly', age: 35, role: 'producer' }", function () {
    var obj = {
=======
  it("debería regresar [['name', 'Holly'], ['age', 35], ['role', 'producer']], para { name: 'Holly', age: 35, role: 'producer' }", () => {
    const obj = {
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/10-convert-object-to-list/test/convertObjectToList.spec.js
      name: 'Holly',
      age: 35,
      role: 'producer',
    };
    const hasil = [['name', 'Holly'], ['age', 35], ['role', 'producer']];

    Assert.deepEqual(convertObjectToList(obj), hasil);
  });
});
