// Converter o código em Arrow Functions

/**
 * 3.1
 * const arr = [1, 2, 3, 4, 5];
 * arr.map(function(item) {
 *      return item + 10;
 * });
 */
const arr = [1, 2, 3, 4, 5];
console.log(arr);

const soma10 = arr.map(ar => ar + 10);
console.log(soma10);

/**
 * 3.2
 * Dica: Utilize uma constante pra function
 * const usuario = { nome: 'Danilo', idade: 35 };
 * function mostraIdade(usuario) {
 *      return usuario.idade;
 * }
 * mostraIdade(usuario);
 */
const usuario = { nome: "Danilo", idade: 35 };
const mostrarIdade = usuario => usuario.idade;
console.log(mostrarIdade(usuario));

/**
 * 3.3
 * Dica: Utilize uma constante pra function
 * const nome = "Danilo";
 * const idade = 35;
 * function mostraUsuario(nome = 'Marcelo', idade = 18) {
 *      return { nome, idade };
 * }
 * mostraUsuario(nome, idade);
 * mostraUsuario(nome);
 */
const nome = "Danilo";
const idade = 35;
const mostrarUsuario = (nome = "Marcelo", idade = 18) => ({
	nome,
	idade,
});
console.log(mostrarUsuario(nome, idade));
console.log(mostrarUsuario());

/**
 * 3.4
 * const promise = function() {
 *      return new Promise(function(resolve, reject) {
 *          return resolve();
 *      })
 * }
 */
const promise = () => new Promise((resolve, reject) => resolve());
