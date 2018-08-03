# Bootstrap

- Tipo: `leitura`
- Formato: `individual`
- Duração: `60min`

***

## Objetivos de Aprendizagem

- Conhecer e entender o que é o Bootstrap.

## O que é Bootstrap?

<<<<<<< HEAD:04-social-network/01-css-frameworks/02-bootstrap/README.md
Bootstrap é um incrível framework que torna o desenvolvmento web front-end muito mais rápido e mais fácil.

Inicialmente foi criado como uma solução interna para o Twitter e posteriormente foi liberado ao público em agosto de 2011 como um projeto *open source* no GitHub.
=======
Bootstrap es un increíble framework que hace que el desarrollo web front-end sea
más rápido y más fácil.

Inicialmente fue creado como una solución interna para Twitter y posteriormente
fue liberado al público en agosto del 2011 como un proyecto Open Source en
GitHub.
>>>>>>> upstream/master:topics/css/03-frameworks/02-bootstrap/README.md

![Bootstrap](https://cdn-images-1.medium.com/max/800/1*aJ_JLvfVyiQj5iYryIulhw.jpeg)

Foi feito para que possa ser utilizado por pessoas de todos os níveis, por dispositivos de todas as formas e projetos de todos os tamanhos.

Bootstrap tem duas versões para trabalhar atualmente (versão 3 e 4). A mais poppular é a versão 3 e é a que aprenderemos. Podemos encontrar o Bootstrap [aqui](https://getbootstrap.com/docs/3.3/).

Podemos utilizar o Bootstrap em nosso projetos de diferentes formas, seja adicionando o código CDN ao nosso HTML para usá-lo de maneira remota ou baixando o Bootstrap na sua página web.

![Bootstrap](https://raw.githubusercontent.com/Laboratoria/curricula-js/c6232fc0a639688fc216c72d17e325a588abae9d/04-social-network/01-css-frameworks/02-bootstrap/bcdn.png)

<<<<<<< HEAD:04-social-network/01-css-frameworks/02-bootstrap/README.md
Se utilizarmos as opções de baixar o Bootstrap, devemos descompactar e adicionar os arquivos do framework ao projeto. Além disso, devemo *linkar* todos no HTML para que funcione.
=======
Si utilizamos las opción de descargar Bootstrap, debemos descomprimir y agregar
los archivos del framework al proyecto. Además, debemos *linkear* todo en el
HTML para que funcione.
>>>>>>> upstream/master:topics/css/03-frameworks/02-bootstrap/README.md

![Bootstrap](https://cdn-images-1.medium.com/max/800/0*NuuR2bjpZck1wC6g.)

Falando em CDN, precisamos entender: __O que é CDN?__

<<<<<<< HEAD:04-social-network/01-css-frameworks/02-bootstrap/README.md
Imagine que você queira usar o CSS de Bootstrap ou de alguma outra biblioteca. Poderíamos simplesmente baixar o arquivo .css ou .js e adicioná-lo a nosso HTML. Mas, o que acontecei se esse arquivo __NÃO__ está no nosso computador e sim em algum lugar da internet?

Quando temos o arquivo em algum lugar da internet, na verdade está __em outro computador__ em algum lugar do mundo.
=======
Imagina que quieres usar el CSS de Bootstrap o de alguna otra librería.
Podríamos simplemente descargar el archivo .css o .js y agregarlo a nuestro
HTML. Pero, ¿que pasa si este archivo __NO__ esta en nuestra computadora si no
en algún lugar de internet?

Cuando tenemos el archivo en algún lugar de internet, en realidad está __en otra
computadora__ alrededor del mundo.
>>>>>>> upstream/master:topics/css/03-frameworks/02-bootstrap/README.md

O que acontecerá se este computador estiver no outro lado do mundo? Na China? Coreia?

Você acha que a distância do nosso computador (que vai utilizar o arquivo) e o computador que tem o arquivo afeta o carregamento da página?

__Sim__, afeta muito.

Isto é porque conectar-se a um computador do outro lado do mundo é mais demorado que conectar-se ao computador que está ao nosso lado.

CDN significa __Content Delivery Network__ (Rede de distribuição de conteúdo).

<<<<<<< HEAD:04-social-network/01-css-frameworks/02-bootstrap/README.md
Imaginemos que o computador que tem o arquivo bootstrap.css está inicialmente na China.
=======
Imaginemos que la computadora que tiene el archivo de bootstrap.css está
originalmente en China.
>>>>>>> upstream/master:topics/css/03-frameworks/02-bootstrap/README.md

Utilizando a CDN você não vai se conectar à China.

Você se conecta a algum lugar mais próximo. Como os Estado Unidos.

Analize a imagem a seguir:

![cdn-example](http://ba-devlab.com/wp-content/uploads/2016/04/cdn.png)

Se estiver na África, não se conecta à Europa. __Conecta-se à África.__

Se estiver na Austrália, não se conecta à Europa. __Conecta-se à Austrália.__

Isto faz com que os arquivos __demorem menos__ para carregar (e sua página também).

Sigamos com Bootstrap.

Agora sim, já que está adicionado ao nosso projeto, podemos começar a testar um pouco de tudo o que nos oferece:

Uma grid, ícones, botões, barras de navegação, etc.

![Bootstrap](http://www.boss-development.biz/sites/default/files/bootstrap-02.png)

A grid de Bootstrap é composta por 12 colunas e conta com os elementos típicos de um *grid system* (como *rows* e *columns*). Também possui tipos de contêineres (*container-fluid* e *container*) e colunas para diferentes tamanhos de telas.

| Classe | Dispositivo | Medida |
| :-------: | :------: | :-----: |
| col-xs-   | móvel    | < 768 px  |
| col-sm-   | tablets  | >= 768 px|
| col-md-   | desktop  | >= 992 px |
| col-lg-   | Desktop maior| >= 1200 px |

<<<<<<< HEAD:04-social-network/01-css-frameworks/02-bootstrap/README.md
Além da grid e do que mencionamos antes, Bootstrap conta com muitos componentes que podemos reutilizar todas as vezes que sejam necessários.
=======
Además de la grid y lo mencionado antes, Bootstrap cuenta con muchos componentes
que podemos reutilizar las veces que sean necesarias.
>>>>>>> upstream/master:topics/css/03-frameworks/02-bootstrap/README.md

### Como fazemos uso deste grande poder?

<<<<<<< HEAD:04-social-network/01-css-frameworks/02-bootstrap/README.md
Para utilizar o que já nos oferece nosso framework, só necessitamos ir à sua página, procurar o componente que queremos utilizaer e *copiar e colar* em nosso HTML o código.
=======
Para utilizar lo que ya nos ofrece nuestro framework, solo necesitamos ir a su
página, buscar el componente que queremos usar y *copiar y pegar* en nuestro
HTML el código que ahí nos viene.
>>>>>>> upstream/master:topics/css/03-frameworks/02-bootstrap/README.md

![Bootstrap-btn](https://raw.githubusercontent.com/Laboratoria/curricula-js/f659ee55eeb322341c314d7d080bb22468e9a576/04-social-network/01-css-frameworks/02-bootstrap/btn-example.PNG)

E assim fácil e maravilhosamente já temos nosso botões.

Se quisermos saber um pouco mais sobre Bootstrap e como funciona [aqui](https://www.youtube.com/watch?v=_0PL45xM__0&list=PLBbHLUbqqCrTwIrdix6kl84m4OPE0JexR) há uma série de vídeos, mas sempre é mais divertido testá-lo nós mesmas.
