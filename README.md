# Recycling learning with ES6

## Criação: 22 de Fevereiro de 2020
## Prática : @reluviari

## Ferramentas : 
![Javascript](/images/logo-javascript-es6.png)
![VSCode](/images/logo-VSCode.png)
![Yarn](/images/logo-yarn.png)
![ReactJS](/images/logo-reactjs.jpg)
![HTML e CSS](/images/logo-html-css.png)
![Git](/images/logo-git.png)
![GitHub](/images/logo-github.png)<br/>
![Rocketseat](/images/logo-rocketseat.png)

## Aulas

### SESSÃO 1 - Conceitos

#### Aula 1. Introdução 
- Definição : Javascript - Ecmascript 6 - ES6
1. Babel : navegadores entenderem ES6
2. Webpack : monitora modificações nos arquivos 
- `yarn dev` : Servidor executando e mantendo a visualização das alterações
3. classes
4. arrow function
5. desestruturação
6. rest / spread
7. import / export
8. async /await

#### Aula 2. Instalando Node e Yarn
1. node -v
2. yarn -v

#### Aula 3. Configurando Babel
1. `yarn add @babel/cli`
2. `yarn add @babel/preset-env`
3. Arquivos : 
- .gitignore
- .babelrc
- package.json
- main.js e index.html
- bundle.js

#### Aula 4. Classes
- `yarn dev`
- exemplificações estão em `main1.js`

#### Aula 5. Const e Let
1. const são constantes 
- Uma constante não pode ter seu valor reatribuído.
- Para realizar reatribuição de uma constante, executa-se uma mutação.
- Mutar uma constante está exemplificado em `main4.js`
2. let são variáveis de escopo
- Podem ser referenciadas apenas dentro do escopo que foram declaradas
- Exemplicações estão em `main5.js`

#### Aula 6. Operações em Array
- newArr
- reduce : Retorna um número de todo o vetor
- filter : Retorna true ou false
- finder
- map : Percorrer vetor
- Exemplicações estão em `main2.js`

#### Aula 7. Arrow Function
- Reduzir o código
- Exemplicações estão em `main6.js`

#### Aula 8. Valores padrão
- Exemplicações estão em `main7.js`

#### Aula 9. Desestruturação
- Exemplicações estão em `main8.js`

#### Aula 10. Operações rest / spread
- Pacote do plugin : `yarn add @babel/plugin-proposal-object-rest-spread`
- Exemplicação do rest está em `main9.js` 
- Exemplicação do spread está em `main10.js`

#### Aula 11. Template Literals
` `Meu nome é ${meunome} e estudo ${meucurso}` ` : não há necessidade de concatenar texto e variáveis.

#### Aula 12.  Object Short Syntax

#### Desafio.
- Finalizados.

### SESSÃO 2 - Webpack Server

#### Aula 13. Configurando Webpack
- Instalação webpack: `yarn add webpack webpack-cli -D`
- Arquivo que lista dependências: `webpack.config.js`
- Identificação das dependencias: `"webpack": "^4.30.0"` e `"webpack-cli": "^3.3.0"`
- Instalação babel loader: `yarn add babel-loader -D`
- Identificação das dependencias: `"babel-loader": "^8.0.5"`

#### Aula 14. Import / Export
- Maneiras de declação do import
- Maneiras de declaração do export

#### Aula 15. Webpack dev server
- Organizar estrutura de pastas
- Instalar Webpack dev server : ` yarn add webpack-dev-server -D`
- Monitorar as alterações em projeto e realizar um refresh no servidor para exibir.

#### Desafio.
- Finalizados.

### SESSÃO 3 - Async / Await

#### Aula 16. Async / Await
- Requisições acíncronas.
- Criação de promise.

#### Aula 17. Configurando Axios
- Instalar dependência `yarn add axios`
- try catch para tratar erro.

#### Desafio.
- Finalizados.

### SESSÃO 4 - Aplicação com ES6+

#### Aula 18. Estrutura e estilos
- HTML
- CSS

#### Aula 19. Adicionar repositórios
- class App no arquivo main.js.

#### Aula 19. Render em tela
- Criar o método render para exibir os elementos (repositórios) em tempo real ao ser adicionados.

#### Aula 20. Buscando API
- Configurando a API para usar no projeto
- Usar os elementos da API para alimentar o projeto com os repositórios reais.
- Elementos deixarão de ser estáticos e se tornarão dinâmicos.
- Instalar e configurar axios

#### Aula 21. Loading e error
- loading message
- error message

