# Array Proto

* Tipo: `leitura`
* Formato: `individual`
* Duração: `30 min`

***

Arranjos \(_arrays_\) em JavaScript são implementados como objetos, o que pode soar um pouco estranho mas, em JavaScript, quase todos os tipos de dados \(`number`, `string`, `array`, ...\) são implementados como objetos e, como tal, os valores desses _tipos_ terão uma série de _métodos_ e _propriedades_ associados a eles. Tecnicamente, eles herdam esses _métodos_ e _propriedades_ de um _protótipo_.

<<<<<<< HEAD:02-basic-programming/02-arrays/02-array-proto/README.md
Neste curso, nós não vamos aprofundar o mecanismo de _herança prototipal_  em JavaScript, mas precisamos ao menos saber que qualquer arranjo \(_array_\) em JavaScript é uma _instância_ do construtor \(_constructor_\) `Array` e, portanto, herda todos os _métodos_ e _propriedades_ definidos em `Array.prototype`.
=======
En este curso no vamos a profundizar en el mecanismo de _herencia prototipal_
en JavaScript, pero sí necesitamos saber que todo arreglo en JavaScript es una
_instancia_ del _constructor_ `Array`, y por tanto hereda todos los _métodos_ y
_propiedades_ definidas en `Array.prototype`.
>>>>>>> upstream/master:topics/javascript/04-arrays/02-array-proto/README.md

A propósito, todos os objetos têm um _protótipo_ e, por exemplo, é através desses protótipos que nossas `strings` magicamente possuem uma _propriedade_ `length` ou um método `toLowerCase()`. São herdados de `String.prototype.length` e `String.prototype.toLowerCase`, respectivamente.

Voltando aos arranjos... Vejamos um exemplo: abra o console do navegador e digite `[].`. Deve aparecer automaticamente uma lista com todos os _métodos_ e _propriedades _de nossa matriz vazia \(`[]`\):

![M&#xE9;todos e propriedades de &quot;Array&quot; no console do navegador](https://user-images.githubusercontent.com/110297/37485550-c77d636e-2859-11e8-8b76-21fc103691e5.png)

## Propriedades de `Array.prototype`

<<<<<<< HEAD:02-basic-programming/02-arrays/02-array-proto/README.md
A única propriedade dos arranjos que nos interessa por agora é `Array.prototype.length`, uma propriedade de somente leitura que sempre nos mostra o comprimento atual do _array_. Por exemplo:

```javascript
console.log([].length); // => 0
console.log(['a'].length); // => 1
console.log([true, 0, 'foo'].length); // => 3
=======
Antes de comenzar, recordemos cómo era nuestra función
que nos permitía comparar arrays

```js
const equal = (one, other) => JSON.stringify(one) === JSON.stringify(other);

```

La única propiedad que nos interesa por ahora de los arreglos es
`Array.prototype.length`, que es una propiedad de sólo lectura que siempre nos
muestra la longitud actual del arreglo. Por ejemplo:

```js
console.assert([].length === 0);
console.assert(['a'].length === 1);
console.assert([true, 0, 'foo'].length === 3);

>>>>>>> upstream/master:topics/javascript/04-arrays/02-array-proto/README.md
```

## Métodos comuns de `Array.prototype`

O JavaScript nos fornece um monte de métodos para manipular arranjos, iterá-los, etc. Não se preocupe em memorizar a lista completa \(não acredito que alguém saiba de cabeça\), pois você irá se familiarizar com eles conforme o uso,  aprendendo a tirar vantagem de seus benefícios. Lembre-se de que sempre há a [documentação oficial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) disponível. Faça uso dela, é a melhor referência.

Vejamos alguns métodos comuns dos arranjos.

### `Array.prototype.push`

O método `Array.prototype.push` recebe um valor, adiciona-o ao final do arranjo pelo qual foi chamado e devolve o novo tamanho \(ou comprimento\).

<<<<<<< HEAD:02-basic-programming/02-arrays/02-array-proto/README.md
```javascript
const arr = [0, 0, 0];
console.log(arr.length); // => 3
console.log(typeof arr.push); // => "function"
console.log(arr.push(1)); // => 4
console.log(arr); // => [0, 0, 0, 1]
=======
```js
let arr = [0, 0, 0];
console.assert(arr.length === 3);
console.assert(typeof arr.push === 'function');
console.assert(arr.push(1) === 4);
console.assert(equal(arr, [0, 0, 0, 1]));

>>>>>>> upstream/master:topics/javascript/04-arrays/02-array-proto/README.md
```

Nesse caso, a funcionalidade do método `push()` pode ser replicada usando uma simples atribuição:

<<<<<<< HEAD:02-basic-programming/02-arrays/02-array-proto/README.md
```javascript
const arr = [0, 0, 0];
console.log(arr.length); // => 3
=======
```js
arr = [0, 0, 0];
console.assert(arr.length === 3);
>>>>>>> upstream/master:topics/javascript/04-arrays/02-array-proto/README.md
arr[arr.length] = 1;
console.assert(equal(arr, [0, 0, 0, 1]));

```

A maior diferença é uma questão de semântica e estilo/paradigma. Talvez pareça sutil, mas acredite, mais tarde você verá o quanto é valioso. Na programação, muitas vezes veremos que há mais de uma maneira de fazer as coisas, o que pode criar confusão e frustração mas, no final das contas, isso é o reflexo de diferentes maneiras de pensar no código, e cada uma tem o seu lugar. Por exemplo, na _programação funcional_ que veremos mais adiante no Bootcamp, favorecemos o uso de múltiplos processadores aplicando argumentos a funções e evitando a atribuição e mudança de valores. Neste contexto, e em particular no JavaScript moderno, veremos que os métodos dos arranjos nos permitirão escrever códigos mais expressivos, concisos e, por que não, bonitos.

### `Array.prototype.pop`

Esse método não recebe nenhum argumento. Ele simplesmente extrai o último elemento do arranjo e o retorna \(modificando o arranjo diretamente - _in place_\).

<<<<<<< HEAD:02-basic-programming/02-arrays/02-array-proto/README.md
```javascript
const arr = ['oh', 'my', 'god'];
console.log(arr.pop()); // => "god"
console.log(arr); // => ['oh', 'my']
=======
```js
arr = ['oh', 'my', 'god'];
console.assert(arr.pop() === 'god');
console.assert(equal(arr, ['oh', 'my']));

>>>>>>> upstream/master:topics/javascript/04-arrays/02-array-proto/README.md
```

### `Array.prototype.slice`

`Array.prototype.slice` cria um novo arranjo através de uma cópia superficial _ _\(_shallow copy_\) de uma parte do arranjo pelo qual é invocado. Ele recebe dois argumentos: `begin` e `end` que indicam qual parte do arranjo queremos copiar \(sem incluir o elemento de índice `end`\).

O arranjo original não é modificado.

Execute os seguintes exemplos no console do navegador para ver como o método `slice()` se comporta.

<<<<<<< HEAD:02-basic-programming/02-arrays/02-array-proto/README.md
```javascript
const arr = [3, 2, 1];
console.log(arr.slice(0)); // => [3, 2, 1]
console.log(arr.slice(1)); // => [2, 1]
console.log(arr.slice(2)); // => [1]
console.log(arr.slice(-1)); // => [1]
console.log(arr.slice(0, 2)); // => [3, 2]
console.log(arr); // => [3, 2, 1];
=======
```js
arr = [3, 2, 1];
console.assert(
  equal(arr.slice(0), [3, 2, 1]),
);
console.assert(
  equal(arr.slice(1), [2, 1]),
);
console.assert(
  equal(arr.slice(2), [1]),
);
console.assert(
  equal(arr.slice(-1), [1]),
);
console.assert(
  equal(arr.slice(0, 1), [3]),
);
console.assert(
  equal(arr, [3, 2, 1]),
);

>>>>>>> upstream/master:topics/javascript/04-arrays/02-array-proto/README.md
```

### `Array.prototype.indexOf`

O método `indexOf()` recebe um valor e devolve o índice do vetor que contém esse valor se ele for encontrado, ou `-1` caso contrário.  Esse método é usado com muita frequência para verificar se um arranjo contém um determinado valor \(basta que o resultado seja diferente de `-1`\).

<<<<<<< HEAD:02-basic-programming/02-arrays/02-array-proto/README.md
```javascript
const arr = ['foo', 'bar', 'baz'];
console.log(arr.indexOf('foo')); // => 0
console.log(arr.indexOf('hmmm')); // => -1
=======
```js
arr = ['foo', 'bar', 'baz'];
console.assert(arr.indexOf('foo') === 0);
console.assert(arr.indexOf('hmmm') === -1);

>>>>>>> upstream/master:topics/javascript/04-arrays/02-array-proto/README.md
```

## Propriedades e métodos herdados de Object.prototype

Vale ressaltar que os arranjos também herdam de `Object.prototype` indiretamente, assim como todos os demais objetos em JavaScript. Então nossos arranjos também terão métodos como `toString()` ou `isPrototypeOf()`. Na próxima unidade \(e cursos posteriores\), vamos explorar `Object.prototype`, o conceito de _herança_ e a cadeia de protótipos.

Nesta leitura, vimos alguns exemplos de métodos que todos os arranjos possuem, mas há muitos mais. Recomendamos que você explore a documentação oficial do [Array.prototype no MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype); lá, você pode ver todos os _métodos_ e _propriedades_ disponíveis e suas interfaces \(quais argumentos eles esperam, o que devolvem, ...\).

## Leituras complementares

* [Array na MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Object.prototype na MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

<<<<<<< HEAD:02-basic-programming/02-arrays/02-array-proto/README.md
=======
- [Array en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Object.prototype en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
- [Array en javascript.info](https://javascript.info/array)
>>>>>>> upstream/master:topics/javascript/04-arrays/02-array-proto/README.md
