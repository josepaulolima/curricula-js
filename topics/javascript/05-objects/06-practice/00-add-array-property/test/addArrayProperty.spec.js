
const Assert = require('chai').assert;
const addArrayProperty = require('../solution/addArrayProperty');

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/01-add-array-property/test/addArrayProperty.spec.js
describe("addArrayProperty()", function () {
  it("deve devolver [5, 8, 12], para addArrayProperty({}, 'key', [5, 8, 12])", function () {
    var myObj = {};
    var myArray = [5, 8, 12];
=======
describe('addArrayProperty()', () => {
  it('debería regresar [5, 8, 12], para addArrayProperty({}, "key", [5, 8, 12])', () => {
    const myObj = {};
    const myArray = [5, 8, 12];
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/00-add-array-property/test/addArrayProperty.spec.js

    addArrayProperty(myObj, 'key', myArray);
    Assert.deepEqual(myObj.key, myArray);
  });
});
