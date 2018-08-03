# transformEmployeeData

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/09-transform-employee-data/README.md
Escreva uma função chamada "transformEmployeeData" que transforma alguns dados de funcionários de um formato para outro.
=======
Escribe una función llamada `transformEmployeeData` que transforma algunos
datos de los empleados de un formato a otro.
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/09-transform-employee-data/README.md

O argumento ficará assim:

```javascript
[
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ]
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36 ], ['role', 'manager']
  ]
]
```

Dada a entrada, o valor de retorno deve ficar assim:

```javascript
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
```

<<<<<<< HEAD:02-basic-programming/03-objects/08-practice/09-transform-employee-data/README.md
Observe que a entrada pode ter um número diferente de linhas ou chaves diferentes da amostra fornecida.

Por exemplo, digamos que o departamento de recursos humanos inclua um campo "tshirtSize" em cada registro de funcionário. Seu código deve ser flexível para tratar essa situação.
=======
Tenga en cuenta que la entrada puede tener un número diferente de filas o llaves
diferentes de la muestra dada.

Por ejemplo, digamos que el departamento de recursos humanos agrega un campo
"tshirtSize" a cada registro de empleado. Su código debería acomodarse de manera
flexible.
>>>>>>> upstream/master:topics/javascript/05-objects/06-practice/09-transform-employee-data/README.md
