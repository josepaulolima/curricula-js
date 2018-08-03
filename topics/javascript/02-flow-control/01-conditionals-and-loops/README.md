# Estruturas condicionais e repetitivas

- Tipo: `leitura`
- Formato: `individual`
- Duração: `90min`

***

## Objetivos

- Entender o que é o controle de fluxo de um programa
- Entender o que são `estruturas condicionais` e como eles afetam o fluxo do programa
- Entender o que são `estruturas repetitivas` e como afetam o fluxo do programa

***

O texto a seguir se baseia em grande medida, com alguns ajustes, ao
capítulo 2 do [Eloquent JavaScript](http://eloquentjavascript.net/),de Marijn
Haverbeke, 2014. Tradução em [Español](http://hectorip.github.io/Eloquent-JavaScript-ES-online/chapters/01_values.html)
disponível graças a [hectorip](http://hectorip.github.io), e ao capítulo 6 do
[JavaScript for kids](http://pepa.holla.cz/wp-content/uploads/2015/11/JavaScript-for-Kids.pdf),
Nick Morgan, 2015;

## Controle de Fluxo

A razão pela qual criamos programas de computador é para **resolver
problemas**. Um programa, como vimos, é simplemente um conjunto de
"instruções" que os computadores seguem. Esse conjunto de instruções
resolve um problema. Até agora, aprendemos a obter, representar,
manipular e armazenar dados em `variáveis`. Com isso, conseguimos 
criar programas que resolvem problemas muito simples. Este é o caso, por exemplo,
do programa que fizemos para transformar a temperatura de graus Celsius (°C) 
para Farenheit (°F). No entanto, para criar programas mais complexos, 
é necessário expandir nosso conhecimento sobre o _controle de fluxo de um programa_ 
e as estruturas existentes para modificar esse fluxo.

Para usar a terminologia correta de JavaScript, a partir de agora, 
substituiremos a palavra "instruções" pela palavra "sentenças". 
Uma instrução JavaScript é o equivalente a uma sentença em linguagem humana. 
Entendemos, portanto, que um programa em JavaScript é uma lista de "instruções 
JavaScript", isto é, um conjunto de sentenças que informa ao computador o que fazer.

### 1. Fluxo em linha reta

Quando um programa contém mais de uma frase, elas são executadas de cima para baixo,
uma por uma. Por exemplo, o programa a seguir tem três sentenças: a primeira 
declara uma variável chamada `name` com o valor do string 'Michelle'; a segunda exibe
no terminal uma mensagem de saudação personalizada: "Olá Michelle";
e a terceira exibe "Que nome longo você tem!".

```js
<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
var name = 'Michelle';
console.log('Olá ' + name);
console.log('Que nome longo você tem!');
// returns > Olá Michelle
//           Que nome longo você tem!
=======
const name = 'Michelle';
console.log('Hola ' + name);
console.log('Qué nombre tan largo tienes!');
// returns > Hola Michelle
//           Qué nombre tan largo tienes!
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md
```

Uma representação trivial esquemática de um fluxo de controle direto seria:

![Flujo recto](http://eloquentjavascript.net/img/controlflow-straight.svg)

### 2. Fluxo condicional

A execução de frases em linha reta não é a única opção que temos. 
Uma alternativa é a execução condicional, em que escolhemos entre duas rotas 
diferentes com base em um valor `Boolean`, assim:

![Flujo condicional](http://eloquentjavascript.net/img/controlflow-if.svg)

<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
A execução condicional é escrita com a palavra-chave `if` en JavaScript. A
instrução `if` é a mais simples das estruturas de controle dessa linguagem. 
Ela é usada para executar código se, e somente se, uma condição for verdadeira. 
Uma condicional diz: "Se algo é verdade, faça isso". Por exemplo, se você 
fez sua lição de casa, recebe um sorvete, mas se você não fez sua lição, não o recebe.
=======
La ejecución condicional se escribe con el keyword `if` en JavaScript. La
instrucción `if` es la más simple de las estructuras de control de JavaScript.
Se utiliza para ejecutar código _si y sólo si_ una condición es verdadera. Un
condicional dice: _"Si algo es verdad, haz esto"_. Por ejemplo, si hiciste tu
tarea (true), recibes un helado, pero si **no** hiciste tu tarea (false),
no recibes el helado.
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md

Como o exemplo abaixo mostra, uma sentença `if` em duas partes principais: 
a condição e o corpo. A condição deve ser um valor `Boolean`
entre parênteses. O corpo consiste em uma ou mais instruções JavaScript 
que serão executadas se, e somente se, a condição for verdadeira (`Boolean` igual a
`true`).

```js
if (condição) {
  // Conjunto de sentenças a executar
}
```

Quando precisamos executar várias instruções, podemos colocá-las entre chaves
({ y }). As chaves agrupam as sentenças, tornando-as apenas uma. Uma sequência 
de sentenças entre chaves é chamada de **bloco** (de código). Muitos programadores 
JavaScript incluem chaves em todo corpo de  `if` (e nos loops, como você verá mais adiante). 
Eles fazem isso em nome da consistência e para não ter que adicionar ou remover 
as chaves quando o número de sentenças no corpo mudar. Outros, valorizam a brevidade 
e no caso do `if` não utilizam as chaves. Neste curso, sempre usaremos as chaves 
para nos ajudar a organizar nosso código.

Vamos voltar ao exemplo anterior e adicionar uma condição antes da frase que imprime 
a segunda mensagem:

```js
<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
var name = 'Michelle';
console.log('Olá ' + nome);
=======
const name = 'Michelle';
console.log('Hola ' + name);
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md
if (name.length > 7) {
  console.log('Que nome longo você tem!');
}
<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
// returns > Olá Michelle
//           Que nome longo você tem!
```

Com esta modificação, antes de imprimir no terminal a segunda mensagem 
('Que nome longo você tem!'), o programa verifica se o tamanho da string
`name` é maior que 7. Se sim, a segunda mensagem é impressa. Caso contrário, 
essa sentença não é executada. Neste caso, como Michelle tem 8 caracteres, 
a condição é `true`. Portanto, a segunda mensagem é impressa.
=======
// imprime > Hola Michelle
//           Qué nombre tan largo tienes!
```

Con esta modificación, antes de imprimir en la consola el segundo mensaje ('Qué
nombre tan largo tienes!'), el programa verifica si la longitud del string
`name` es mayor a 7. De ser así, se imprime el segundo mensaje. De no ser así,
no se ejecuta esa sentencia. En este caso, dado que _Michelle_ tiene 8
caracteres (letras), la condición es `true`. Por lo tanto, se imprime el segundo
mensaje.
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md

Vamos mudar um pouco este exemplo, modificando o valor de `name` para 'Ana'.

```js
<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
var name = 'Ana';
console.log('Olá ' + name);
=======
const name = 'Ana';
console.log('Hola ' + name);
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md
if (name.length > 7) {
  console.log('Que nome longo você tem!');
}
// returns > Olá Ana
```

Nesta ocasião, a condição **não** é `true` (é `false`) porque o comprimento
do nome é 3, que **não** é maior que 7. Portanto, o corpo do `if`
**não** se executa. Desta forma, apenas a primeira mensagem 'Olá Ana' 
é executada. 

#### _Sentença `if... else`_

Muitas vezes, você não só terá o código que é executado quando uma condição 
é verdadeira, mas também quando acontece o outro caso. Esse caminho alternativo
é representado pela segunda seta no diagrama de fluxo. A palavra-chave 
`else` pode ser usada, junto com `if`, para criar dois caminhos de execução 
separados e alternativos.

Adicionemos uma sentença `else` ao nosso exemplo:

```js
const name = 'Ana';
console.log('Hola ' + name);
if (name.length > 7) {
  console.log('Que nome longo você tem!');
} else {
  console.log('O seu nome não é muito longo');
}

// returns > Olá Ana
//           O seu nome não é muito longo
```

Como você pode ver, o resultado deste caso é similar ao anterior, mas se `name`
**não** tiver um comprimento maior que 7, existe uma "mensagem alternativa" 
que é executada.

Como o exemplo abaixo mostra, as sentenças `if ... else` são semelhantes às sentenças
`if`, mas incluem dois corpos. Se a condição é 
`true`, as sentenças do primeiro corpo são executadas; 
caso contrário, as sentenças do segundo corpo são executadas.


```js
if (condição) {
  Sentenças para execução se a condição for VERDADEIRA
} else {
  Sentenças para execução se a condição for FALSA
}
```

Se tivermos mais de dois caminhos para escolher, vários pares if... else 
podem ser "encadeados". Aqui está um exemplo:

```js
<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
var num = parseInt(prompt('Digite um número', '0'));

if (num < 10){
  alert('Você digitou um número pequeno');
}
else if (num < 100){
  alert('Você digitou um número médio');
}
else {
  alert('Você digitou um número grande');
=======
const num = parseInt(prompt('Dame un número', '0'));

if (num < 10) {
  alert('Diste un número Pequeño');
} else if (num < 100) {
  alert('Diste un número Mediano');
} else {
  alert('Diste un número Grande');
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md
}
```

O programa primeiro verificará se `num` é menor que 10. Se for, ele escolhe esse caminho, 
mostra "Você digitou um número pequeno" em uma caixa de alerta e termina. 
Se não for, toma o caminho do  `else`, que em si mesmo contém um segundo `if`. Se a
segunda condição (< 100) for atendida, significa que o número está entre 10 e 100, 
e "Você digitou um número médio" é exibido em uma caixa de alerta. 
Se não for, o segundo e último `else` é escolhido, mostrando "Você digitou um número grande".

O fluxograma deste programa é algo assim:

![Flujo condicional](http://eloquentjavascript.net/img/controlflow-nested-if.svg)

Vamos ver outro exemplo da aplicação da sentença  `if...else`. Desta vez, com um vídeo
de outra excelente professora da Laboratoria, Alexandra :)

[![ejercicio guiado if...else JS for Kids pg 94](https://img.youtube.com/vi/-rNwUIEQJnc/0.jpg)](https://www.youtube.com/watch?v=-rNwUIEQJnc)

#### _Utilizando Switch_

É comum ver o código assim:

```js
if (variable == 'valor1') {
  accion1();
} else if (variable == 'valor2') {
  accion2();
} else if (variable == 'valor3') {
  accion3();
} else {
  accionDefault();
}
```

Existe uma estrutura chamada `switch` que serve para "decidir" de maneira mais 
direta. Infelizmente, a sintaxe que o JavaScript usa para isso (que é herdada 
da linha da linguagem de programação C/Java) é um pouco estranha. Uma sequência 
de frases `if` geralmente parece melhor. Aqui está um exemplo:

```js
switch (prompt('Como está o clima?')) {
  case 'chuvoso':
    console.log('Lembre-se de levar um guarda-chuva.');
    break;
  case 'ensolarado':
    console.log('Vista roupas leves.');
  case 'nublado':
    console.log('Saia para a rua.');
    break;
  default:
    console.log('Tipo de tempo desconhecido.');
    break;
}
```

Você pode colocar qualquer número de etiquetas `case` dentro do bloco `switch`.
O programa irá pular para o rótulo correspondente ao valor que foi dado ao
`switch` ou ao default se não houver nenhum valor igual. Daí, eles começam a 
executar as sentenças, incluindo os abaixo de outro rótulo, até que uma sentença 
`break` seja alcançada (o que em português significa "pare").

Em alguns casos, como no caso de "ensolarado" no exemplo, é possível compartilhar 
o código entre os casos (é recomendado ir ao ar livre tanto para tempo ensolarado 
quanto nublado). Mas cuidado: é fácil esquecer o break, o que fará com que o programa 
execute um código que você não deseja executar.

A seguir, Michelle ajuda você a entender esse caso um pouco melhor:

[![ejemplo de Switch](https://img.youtube.com/vi/Aa0JhU6KZXs/0.jpg)](https://www.youtube.com//watch?v=Aa0JhU6KZXs)

### 3. Fluxo repetitivo: Loops

Outra forma de modificar o fluxo de um programa é por meio de estruturas repetitivas,
também chamadas "loops" em inglês. Como já estamos vendo, as
condicionais permitem executar um conjunto de sentenças uma vez se uma
condição _**é**_ verdadeira. Os loops permitem executar um código várias
vezes, dependendo se uma condição _**continua sendo**_ verdadeira.

Imagine um programa que imprima todos os números pares do 1 ao 12. Uma
maneira de escrevê-lo seria assim:

```js
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
// → 0
// → 2
//   … etcetera
```

Isso funciona, mas a ideia de escrever um programa é trabalhar menos, e não mais. Se
necessitamos todos os números menores que 1,000, o modo anterior seria impossível de
trabalhar. O que necessitamos é uma forma de repetir partes de código. Esta forma
de **controle de fluxo** é chamada loop. O controle de fluxo por loops nos
permite voltar a certo ponto no programa em que estivemos antes e
repetí-lo com nosso estado atual, como descreve o seguinte diagrama:

![Fluxo loop](http://eloquentjavascript.net/img/controlflow-loop.svg)

#### Loops `while`

O loop mais simples é o loop `while` (que significa "enquanto" em português).
Um loop `while` executa repetidamente uma série de sentenças até que uma
condição particular deixe de ser verdadeira. Ao escrever um loop `while`, você está
dizendo: _"Continue fazendo isto enquanto esta condição seja verdadeira. Pare
quando a condição se tornar falsa."_

Como revela o exemplo a seguir, uma sentença que começa com a
keyword `while` cria um loop. Depois de `while` vem uma expressão em
parênteses que representa a condição e depois um conjunto de sentenças (muito
parecido ao caso do `if`). Porém, diferentemente do `if`, o loop executa
a sentença enquanto a condição produza um valor que seja `true`. Por isso é
muito importante que o conjunto de sentenças inclua algo que _"muda"_ para
que a condição eventualmente seja falsa. Do contrário, criaria um
ciclo infinito que nunca termina, e isto usualmente é ruim.

```js
while (condición) {
  // Conjunto de sentenças, onde
  // se inclui algo que "muda" para
  // que a condição eventualmente seja FALSA
}
```

Vamos voltar agora ao problema de imprimir todos os números pares do 1 ao 12, e
criar um programa que utilize um loop `while`:

```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera até 12
```

<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
Neste caso, como queremos imprimir os números pares do 1 ao 12, criamos uma
variável `number`, inicializamos com o valor 0, e a utilizamos na
condição. Queremos que o bloco dentro do `while` funcione enquanto o valor de
`number` seja igual ou menor a 12. O corpo do `while` inclui duas sentenças:
a primeira imprime o número (com console.log), e a segunda incrementa
`number` em 2 (porque queremos imprimir os pares unicamente). A variável
`number` demonstra a forma em que uma variável pode dar seguimento ao
progresso de um programa. Cada vez que o loop se repete, `number` se incrementa
em 2. Então, no início de cada repetição, o valor da variável
`number` é comparado com o número 12 para decidir se o programa fez todo
o trabalho que deveria fazer. É importante que entendamos que se não
modificamos o valor de `number` com a segunda sentença, a condição (number
  <=12) sempre será `true` e teremos um ciclo infinito que nunca se deterá.
Isto pode causar que o seu computador tenha problemas e trave.

Se você cria um loop infinito em um dos exemplos, usualmente será perguntado
se você quer deter o script depois de alguns segundos. Se isso falha,
você terá que fechar a aba na qual está trabalhando, ou, em outros
navegadores, fechar o navegador inteiro para se recuperar.

Vejamos algumas variantes deste mesmo problema para assegurar que entendemos
bem como funciona o ciclo `while`:

- Como fazemos para imprimir os números **pares** do 1 ao 100?: Modificamos
  a condição para que o loop aconteça enquanto `number` seja <= 100.
=======
En este caso, como queremos imprimir los números pares del 1 al 12, creamos una
variable `number` (es importante preguntarse _¿cuántas veces necesitamos
**crear** la variable number?_), la inicializamos con el valor `0`, y la
utilizamos en la condición. Queremos que el bloque dentro del `while` corra
mientras el valor de `number` sea igual o menor a `12`. El cuerpo del `while`
incluye dos sentencias: la primera, imprime el número (con `console.log`), y la
segunda incrementa `number` en `2` (porque queremos imprimir los pares
únicamente). La variable `number` demuestra la forma en que una variable puede
dar seguimiento al progreso de un programa. Cada vez que el bucle se repite,
`number` se incrementa en `2`. Entonces, al principio de cada repetición, el
valor de la variable `number` es comparado con el número 12 para decidir si el
programa ha hecho todo el trabajo que tenía que hacer. Es importante que
entendamos que si no modificamos el valor de `number` con la segunda sentencia,
la condición (`number <= 12`) siempre será `true` y tendremos un ciclo infinito
que nunca se detendrá. Esto puede causar que tu computadora tenga problemas y se
congele.

Si creas un bucle infinito en uno de los ejemplos, usualmente se te preguntará
si quieres detener el script después de unos cuantos segundos. Si eso falla,
tendrás que cerrar la pestaña en la que estás trabajando, o, en otros
navegadores, cerrar el navegador entero para recuperarte.

Veamos algunas variantes de este mismo problema para asegurarnos que entendemos
bien cómo funciona el ciclo `while`:

- ¿Cómo hacemos para imprimir los números **pares** del 1 al 100?: Modificamos
  la condición para que el bucle corra mientras `number` sea <= 100.
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md

```js
let number = 0;
while (number <= 100) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera até 100
```

- Como fazemos para imprimir os números **ímpares** do 1 a 12?:
  Iniciamos o valor de `number` com o valor de 1 (ao invés de 0).

```js
let number = 1;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 1
// → 3
//   … etcetera até 11
```

- Como fazemos para imprimir todos os números **pares** e **ímpares** do 1 ao
  12?: Na segunda sentença do while, incrementamos `number` em 1 (no lugar
  de 2) a cada ciclo.

```js
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 1;
}
// → 0
// → 1
// → 2
//   … etcetera até 12
```

#### Loops `do`

O loop `do` é uma estrutura de controle similar ao loop `while`. A
diferença está em um só ponto: um loop `do` sempre executa seu corpo **pelo
menos uma vez** e começa a verificar se devería parar somente depois da
primeira execução. Para refletir isto, a condição aparece depois do corpo
do loop. Vejamos um exemplo:

```js
do {
<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
  var yourName = prompt('Qual é seu nome?');
=======
  const yourName = prompt('¿Quién eres?');
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md
} while (!yourName);

console.log('seu nome é ' + yourName);
```

Este programa te obrigará a introduzir um nome. Perguntará uma e outra vez
até que obtenha algo que não seja uma cadeia vazia. Aplicar o operador `!`
converte um valor a `Boolean` negando-o e todas as cadeias exceto `''` se
convertem a `true`. Isto significa que ele continua rodando até que
você dê um nome que não seja uma cadeia vazia.

#### _Loop `for`_

Muitos loops seguem um padrão dos exemplos prévios do `while`. Primeiro, uma
variável “contador” é criada para dar seguimento ao progresso do loop. Logo depois
vem o loop `while`, cuja expressão condicional normalmente verifica se o
contador alcançou certo limite. Ao final do corpo do loop, o contador
é atualizado para dar seguimento ao progresso.

Devido ao fato de que este padrão é muito comum, JavaScript e outras linguagens similares
proporcionam uma versão um pouco mais curta e mais completa: o loop `for`.

```js
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etc.
```

Este programa é exatamente equivalente ao exemplo prévio de impressão de
números pares. A única mudança é que todas as sentenças que estão
relacionadas com o "estado" do ciclo estão agrupadas.

Os parênteses depois do keyword `for` devem conter ponto e vírgula
(`;`). A parte que está antes do primeiro ponto e vírgula _inicia_ o loop,
normalmente ao definir uma variável. A segunda parte é a expressão que
_verifica_ se o loop tem que continuar. A parte final _atualiza_ o estado
do loop antes de cada iteração. Na maioria dos casos, isto é mais curto
e claro que uma construção com `while`.

A seguir mostramos um código que calcula 2^10 (2 exponencial 10), usando o loop `for`:

```js
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```

A representação geral do loop `for` é a seguinte:

```js
for (initial setup; condition; increment){
  Bloco de código a executar
}
```

<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
O _initial setup_ (por exemplo: var counter = 0) se executa antes de que se
inicie o loop. Geralmente se usa para criar uma variável que rastreia o
número de vezes que foi executado o loop. A _condition_ (counter < 10) se
comprova antes de cada execução do corpo do loop. Se a condição é
verdadeira, o corpo é executado; se é falsa, o loop se detém. Neste
caso, o loop se deterá uma vez que counter já não seja inferior a 10. O
_increment_ (counter = counter + 1) se executa depois de cada execução do
corpo do loop. Geralmente se utiliza para atualizar a variável do loop.
No nosso exemplo, utilizamos para agregar 1 a counter cada vez que se executa
o loop.
=======
El _initial setup_ (por ejemplo: let counter = 0) se ejecuta antes de que se
inicie el bucle. Generalmente se usa para crear una variable que rastrea el
número de veces que se ha ejecutado el bucle. La _condition_ (counter < 10) se
comprueba antes de cada ejecución del cuerpo de bucle. Si la condición es
verdadera, el cuerpo es ejecutado; si es falsa, el bucle se detiene. En este
caso, el bucle se detendrá una vez que counter ya no sea inferior a 10. El
_increment_ (counter = counter + 1) se ejecuta después de cada ejecución del
cuerpo de bucle. Generalmente se utiliza para actualizar la variable de bucle.
En nuestro ejemplo, lo usamos para agregar 1 a counter cada vez que se ejecuta
el bucle.
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md

A seguir Alexandra te ajudará a entender o fluxo de um loop `for` que
imprime o texto 'Hola mundo!' várias vezes:

[![loop for](https://img.youtube.com/vi/lKwx1RAxTfo/0.jpg)](https://www.youtube.com/watch?v=lKwx1RAxTfo)

#### _Forçando a saída de um loop_

Fazer com que a condição do loop produza _false_ não é a única forma para que um
loop termine. Podemos usar a sentença especial `break`, utilizada en
`switch`, que tem o efeito de sair inmediatamente do loop que o esta
fechando.

O programa a seguir ilustra o uso da sentença `break` para sair de um
loop. Queremos fazer um programa que encontre o primeiro número que é maior ou igual a 20 e divisível por 7.

```js
<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
for (var current = 20; current++) {
=======
for (let current = 20; ; current++) {
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md
  if (current % 7 == 0)
    break;
}
console.log(current);
// → 21
```

Usar o operador de resto ou módulo (%) é uma forma fácil de provar se o
número é divisível por outro. Se for, o resto da divisão é zero.
Também lembre-se que `current++` é o mesmo que `current = current + 1`.

O `for` neste exemplo não tem a parte que verifica se o loop deve
terminar. Isto significa que o loop nunca terminará até que a sentença
`break` que está dentro seja executada.

Como já estamos aprendendo, se você deixasse fora essa sentença `break` ou acidentalmente
escrevesse uma condição que sempre produza `true`, o seu programa se ficaria
travado em um loop infinito.

A palavra chave `continue` é parecida ao `break` pois influencia o progresso
do loop. Quando se encontra `continue` no corpo de um loop, o controle
sai do corpo do loop imediatamente e continua na próxima iteração do
loop.

<<<<<<< HEAD:01-intro/04-flow-control/01-conditionals-and-loops/README.md
A seguir Michelle explica, com um exemplo, as aplicações de
`break` e `continue` dentro de um `for`:
[![exemplo de break e continue](https://img.youtube.com/vi/C5rIORzHOgg/0.jpg)](https://www.youtube.com/watch?v=C5rIORzHOgg)
=======
A continuación Michelle te ayuda explica, con un ejemplo, las aplicaciones de
`break` y `continue` dentro de un `for`:
[![ejemplo de break y continue](https://img.youtube.com/vi/C5rIORzHOgg/0.jpg)](https://www.youtube.com/watch?v=C5rIORzHOgg)

#### _Diferencias entre `for` y `while`_

Puntualmente, se usa el `for` cuando sabes _por adelantado_ cuantas repeticiones
vas a realizar y el `while` cuando no lo sabes.

Si decimos, "gira el ventilador 10 veces", de ante mano sabes que vamos a girar
el ventilador 10 veces, por tal, el `for` seria buena idea.

Si decimos: "mientras haga calor gira el ventilador". En realidad no sabemos de
ante mano cuantas veces vamos a girar el ventilador por que no sabemos cuanto
tiempo tendremos calor, por ende, usar un `while` sería buena idea.
>>>>>>> upstream/master:topics/javascript/02-flow-control/01-conditionals-and-loops/README.md
