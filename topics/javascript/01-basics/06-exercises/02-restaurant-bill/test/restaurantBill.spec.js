<<<<<<< HEAD:01-intro/02-variables-and-data-types/06-exercises/02-restaurant-bill/test/restaurantBill.spec.js
'use strict';

=======
>>>>>>> upstream/master:topics/javascript/01-basics/06-exercises/02-restaurant-bill/test/restaurantBill.spec.js
const Assert = require('chai').assert;
const restaurantBill = require('../solution/restaurantBill');

describe('restaurantBill()', () => {
<<<<<<< HEAD:01-intro/02-variables-and-data-types/06-exercises/02-restaurant-bill/test/restaurantBill.spec.js

  it('deveria devolver $11, para 50', () => {
=======
  it('debería regresar $11, para 50', () => {
>>>>>>> upstream/master:topics/javascript/01-basics/06-exercises/02-restaurant-bill/test/restaurantBill.spec.js
    const preTaxAmount = 50;
    const tax = preTaxAmount * 0.1;
    const total = `$${(preTaxAmount + tax) / 5}`;
    Assert.deepEqual(restaurantBill(preTaxAmount), total);
  });

  it('deveria devolver $22, para 100', () => {
    const preTaxAmount = 100;
    const tax = preTaxAmount * 0.1;
    const total = `$${(preTaxAmount + tax) / 5}`;
    Assert.deepEqual(restaurantBill(preTaxAmount), total);
  });

  it('deveria devolver $18.7, para 85', () => {
    const preTaxAmount = 85;
    const tax = preTaxAmount * 0.1;
    const total = `$${(preTaxAmount + tax) / 5}`;
    Assert.deepEqual(restaurantBill(preTaxAmount), total);
  });
});
