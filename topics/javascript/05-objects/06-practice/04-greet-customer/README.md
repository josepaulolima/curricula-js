# greetCustomer

Escreva uma função chamada `greetCustomer`.

Dado um nome, `greetCustomer` retorna uma saudação com base em quantas vezes o cliente visitou o restaurante. Consulte o objeto `customerData`.

A saudação deve ser diferente, dependendo do nome da reserva.

Caso 1 - Cliente desconhecido \(o nome não está presente nos dados do cliente\):

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/04-greet-customer/README.md
```javascript
var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
=======
```js
console.log(greetCustomer('Terrance'));
// => 'Welcome! Is this your first time?'
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/04-greet-customer/README.md
```

Caso 2 - Cliente que visitou apenas uma vez \(o valor das visitas é 1\)

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/04-greet-customer/README.md
```javascript
var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
=======
```js
console.log(greetCustomer('Joe'));
// => 'Welcome back, Joe! We're glad you liked us the first time!'
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/04-greet-customer/README.md
```

Caso 3 - Cliente repetido: \(o valor de 'visitas' é maior que 1\)

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/04-greet-customer/README.md
```javascript
var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
=======
```js
console.log(greetCustomer('Carol'));
// --> 'Welcome back, Carol! So glad to see you again!'
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/04-greet-customer/README.md
```

Notas:

* Sua função não deve alterar o objeto `customerData` para atualizar o número de visitas.
* Não codifique os dados exatos da amostra. Esta é uma má ideia:

```javascript
if (firstName === 'Joe') {
  // do something
}
```
