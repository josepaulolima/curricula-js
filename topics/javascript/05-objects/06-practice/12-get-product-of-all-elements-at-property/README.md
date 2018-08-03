# getProductOfAllElementsAtProperty

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/12-get-product-of-all-elements-at-property/README.md
Escreva uma função chamada `getProductOfAllElementsAtProperty`.
=======
Escribe una función llamada `getProductOfAllElementsAtProperty`.
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/12-get-product-of-all-elements-at-property/README.md

Dado um objeto e uma chave, `getProductOfAllElementsAtProperty` retorna o produto de todos os elementos do _array_.

Notas:

* Se o _array_ estiver vazio, ela deve devolver 0.
* Se a propriedade na chave fornecida não for um _array_, ela deverá devolver 0.
* Se não houver nenhuma propriedade na chave fornecida, ela deverá devolver 0.

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/12-get-product-of-all-elements-at-property/README.md
```javascript
var obj = {
  key: [1, 2, 3, 4];
=======
```js
const obj = {
  key: [1, 2, 3, 4];
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/12-get-product-of-all-elements-at-property/README.md
};

const output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // => 24
```
