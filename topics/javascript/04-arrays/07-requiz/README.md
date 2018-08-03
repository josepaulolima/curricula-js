# Requiz

* Tipo: `quiz`
* Formato: `individual`
* Duração: `15 min`

***

## Objetivos

* Faça um segundo teste para garantir que terminamos a unidade com total compreensão dos conceitos.

## Perguntas

### 1\) No exemplo a seguir, o _array_  `mixedArray` apresenta um erro de sintaxe.

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var mixedArray = [3, hola mundo, 627.5];
=======
```js
const mixedArray = [3, hola mundo, 627.5];
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md
```

#### Opções

1. Verdadeiro
2. Falsa

<solution style="display:none;">1</solution>

### 2\) Qual das seguintes opções NÃO é um método?

#### Opções

1. `push`
2. `concat`
3. `length`
4. `lastIndexOf`

<solution style="display:none;">3</solution>

### 3\) Considere o código abaixo:

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var listOfNumbers = [1, 2, 3, 4, 5, 6];
=======
```js
const listOfNumbers = [1, 2, 3, 4, 5, 6];
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md
```

Que resultado obtenho ao executar `console.log(listOfNumbers[6])`?

#### Opções

1. `''`
2. `4`
3. `5`
4. `6`
5. `undefined`

<solution style="display:none;">5</solution>

### 4\) No código a seguir,

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var listOfNumbers = [1, 2, 3, 4, 5, 6];
=======
```js
const listOfNumbers = [1, 2, 3, 4, 5, 6];
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md
```

como ficaria o _array _se executarmos `listOfNumbers[3] = 'hola'`?

#### Opções

1. `[1, 2, 'hola', 4, 5, 6]`
2. `[1, 2, 3, 'hola', 5, 6]`
3. `[1, 2, , 4, 5, 6]`
4. `[1, 2, 3, , 5, 6]`
5. `undefined`

<solution style="display:none;">2</solution>

### 5\) No código a seguir,

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var questions = [
=======
```js
const questions = [
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md
  ['¿En cuántos países opera Laboratoria?', 3],
  ['¿Cuál es la capital de Perú?', 'Lima'],
  ['¿Cuál es baile típico Chileno?', 'Cueca'],
  ['¿Cuál es la moneda de México?', 'Peso']
];
```

como obtenho o elemento `Peso`?

#### Opções

1. `console.log(questions[1][3])`
2. `console.log(questions[2][4])`
3. `console.log(questions[3][1])`
4. `console.log(questions[4][2])`

<solution style="display:none;">3</solution>

### 6\) No exemplo a seguir, qual método devo usar para obter o resultado do comentário de código?

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var courses = ['Intro JS', 'Intro UX', 'UX master'];
var removed = courses.__________;
=======
```js
const courses = ['Intro JS', 'Intro UX', 'UX master'];
const removed = courses.__________;
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md

console.log('Elemento eliminado: ' + removed);
// → Elemento eliminado: Intro JS
```

#### Opções

1. `pop()`
2. `push()`
3. `shift()`
4. `unshift()`

<solution style="display:none;">3</solution>

### 7\) No exemplo a seguir, quais dos seguintes métodos você poderia usar para obter o resultado solicitado? Você pode escolher mais de uma opção.

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var courses = ['Intro JS', 'Intro UX', 'UX master'];
=======
```js
const courses = ['Intro JS', 'Intro UX', 'UX master'];
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md
courses.__________('JS master', 'English for Developers');

console.log(courses.length);
// → 5
```

#### Opções

1. `pop()`
2. `push()`
3. `shift()`
4. `unshift()`

<solution style="display:none;">2,4</solution>

### 8\) No exemplo a seguir, quais métodos devo usar para obter o resultado solicitado?

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var listOfNumbers = [];
for (var i = 1; i <= 7; i++) {
=======
```js
const listOfNumbers = [];
for (let i = 1; i <= 7; i += 1) {
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md
  listOfNumbers.__________(i);
}
listOfNumbers.__________();

console.log(listOfNumbers.length);
// → 6
```

#### Opções

1. `join` - `search`
2. `push` - `pop`
3. `shift` - `unshift`
4. `slice` - `splice`

<solution style="display:none;">2</solution>

### 9\) Qual seria o resultado do código a seguir?

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var coder1 = 'Michelle, ';
var coder2 = 'Lourdes, ';
var coder3 = 'Ruth.';
=======
```js
const coder1 = 'Michelle, ';
const coder2 = 'Lourdes, ';
const coder3 = 'Ruth.';
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md

const allCoders = coder1.concat(coder2, coder3);

console.log(allCoders);
```

#### Opções

1. `Michelle, Lourdes, Ruth.`
2. `[Michelle, Lourdes, Ruth.]`
3. `['Michelle', 'Lourdes', 'Ruth'.]`
4. No hay resultado, debido a que el código está mal escrito.

<solution style="display:none;">1</solution>

### 10\) Qual é o resultado do código abaixo?

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var coders = ['Michelle', 'Lourdes', 'Ruth'];
=======
```js
const coders = ['Michelle', 'Lourdes', 'Ruth'];
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md
coders.pop();
coders.indexOf('Lourdes');
```

#### Opções

1. `0`
2. `1`
3. `2`
4. `3`

<solution style="display:none;">2</solution>

### 11\) No código a seguir, qual seria o resultado?

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var coders = ['Michelle', 'Lourdes', 'Ruth'];
=======
```js
const coders = ['Michelle', 'Lourdes', 'Ruth'];
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md
coders.push('Alejandra');
coders.join();
```

#### Opções

1. `['Michelle,Lourdes,Ruth,Alejandra']`
2. `['Michelle,Lourdes,Ruth']`
3. `['Michelle', 'Lourdes', 'Ruth', 'Alejandra']`
4. `'Michelle,Lourdes,Ruth,Alejandra'`

<solution style="display:none;">4</solution>

### 12\) No exemplo a seguir, complete os espaços

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var coders = ['michelle', 'lourdes', 'ruth', 'alejandra'];
=======
```js
const coders = ['michelle', 'lourdes', 'ruth', 'alejandra'];
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md
coders.pop();
coders.slice(____,____);

// → ['lourdes', 'ruth']
```

#### Opções

1. `1` - `3`
2. `2` - `4`
3. `1` - `2`
4. `2` - `3`

<solution style="display:none;">1</solution>

### 13\) No exemplo a seguir, qual método devo usar para obter o resultado comentado?

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var listOfNumbers = [1, 2, 3, 1, 2, 3];
=======
```js
const listOfNumbers = [1, 2, 3, 1, 2, 3];
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md
listOfNumbers.____________(2);

// → 4
```

#### Opções

1. `pop()`
2. `indexOf()`
3. `unshift()`
4. `lastIndexOf()`

<solution style="display:none;">4</solution>

### 14\) No código a seguir, qual seria o resultado?

<<<<<<< HEAD:02-basic-programming/02-arrays/07-requiz/README.md
```javascript
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
=======
```js
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
>>>>>>> upstream/master:topics/javascript/04-arrays/07-requiz/README.md

for (let i = 0; i < array.length; i += 1) {
  const item = array.pop();
  array.splice(i, 0, item);
}

console.log(array);
```

#### Opções

1. `[1, 2, 3, 4, 5]`
2. `[6, 7, 8, 9, 10]`
3. `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
4. `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

<solution style="display:none;">4</solution>

### 15\) No código a seguir, qual seria o resultado?

```javascript
function search(array, element) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === element) {
      return i;
    }
  }
}

console.log(search([7, 6, 5, 4, 3, 2, 1], 5));
```

#### Opções

1. `2`
2. `3`
3. `4`
4. `5`

<solution style="display:none;">1</solution>
