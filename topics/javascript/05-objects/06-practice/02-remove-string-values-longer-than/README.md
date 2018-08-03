# removeStringValuesLongerThan

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/02-remove-string-values-longer-than/README.md
Escreva uma função chamada "removeStringValuesLongerThan".

Dado um número e um objeto, "removeStringValuesLongerThan" remove qualquer propriedade no objeto dado cujos valores são strings maiores que o número fornecido.
=======
Escribe una función llamada `removeStringValuesLongerThan`.

Dado un número y un objeto, `removeStringValuesLongerThan` elimina cualquier
propiedad en el objeto dado cuyos valores son cadenas de texto más largas que el
número dado.
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/02-remove-string-values-longer-than/README.md

Exemplo de entrada:

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/02-remove-string-values-longer-than/README.md
```javascript
var obj = {
=======
```js
const obj = {
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/02-remove-string-values-longer-than/README.md
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

removeStringValuesLongerThan(6, obj);
console.log(obj); // => { age: 20, location: 'Texas' }
```
