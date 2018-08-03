const Assert = require('chai').assert;
const fromListToObject = require('../solution/fromListToObject');

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/07-from-list-to-object/test/fromListToObject.spec.js
describe("fromListToObject()", function () {
  it("deve devolver { make: 'Ford', model: 'Mustang', year: 1964, quality: 'eeehhh' }, para [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['quality', 'eeehhh']]", function () {
    var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['quality', 'eeehhh']];
    var hasil = {
=======
describe('fromListToObject()', () => {
  it("debería regresar { make: 'Ford', model: 'Mustang', year: 1964, quality: 'eeehhh' }, para [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['quality', 'eeehhh']]", () => {
    const array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964], ['quality', 'eeehhh']];
    const hasil = {
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/07-from-list-to-object/test/fromListToObject.spec.js
      make: 'Ford',
      model: 'Mustang',
      year: 1964,
      quality: 'eeehhh',
    };
    Assert.deepEqual(fromListToObject(array), hasil);
  });

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/07-from-list-to-object/test/fromListToObject.spec.js
  it("deve devolver { make : 'Ford', model : 'Mustang', year : 1964 }, para [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]", function () {
    var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
    var hasil = {
=======
  it("debería regresar { make : 'Ford', model : 'Mustang', year : 1964 }, para [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]", () => {
    const array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
    const hasil = {
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/07-from-list-to-object/test/fromListToObject.spec.js
      make: 'Ford',
      model: 'Mustang',
      year: 1964,
    };
    Assert.deepEqual(fromListToObject(array), hasil);
  });

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/07-from-list-to-object/test/fromListToObject.spec.js
  it("deve devolver { Kemal: 'Mahmud' }, para [['Kemal', 'Mahmud']]", function () {
    var array = [['Kemal', 'Mahmud']];
    var hasil = {
      Kemal: 'Mahmud'
    }
=======
  it("debería regresar { Kemal: 'Mahmud' }, para [['Kemal', 'Mahmud']]", () => {
    const array = [['Kemal', 'Mahmud']];
    const hasil = {
      Kemal: 'Mahmud',
    };
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/07-from-list-to-object/test/fromListToObject.spec.js
    Assert.deepEqual(fromListToObject(array), hasil);
  });
});
