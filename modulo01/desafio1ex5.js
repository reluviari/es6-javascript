/**
 * Realize as operações utilizando o operador rest / spread.
 */

/**
 * 5.1
 * Rest
 * A partir do array: const arr = [1, 2, 3, 4, 5, 6],
 
 * a)defina uma variável x
 * que recebe a primeira posição do vetor e outra variável y que recebe
 * todo restante dos dados.
 * console.log(x); // 1
 * console.log(y); // [2, 3, 4, 5, 6]
 
 * b)Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
 * // function soma...
 * console.log(soma(1, 2, 3, 4, 5, 6)); // 21
 * console.log(soma(1, 2)); // 3
 */

// A
const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x);
console.log(y);

// B
function soma(...nums) {
	return nums.reduce((a, b) => a + b);
}
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

/**
 * 5.2
 * Spread
 * A partir do objeto e utilizando o operador spread:
 * const usuario = {
 *      nome: 'Danilo',
 *      idade: 35,
 *      endereco: {
 *          cidade: 'Toledo',
 *          uf: 'SC',
 *          pais: 'Brasil',
 *      }
 * };
 * Crie uma variável usuario2 que contenha todos os dados do usuário porém
 * com nome Gabriel.
 * Crie uma variável usuario3 que contenha todos os dados do usuário porém
 * com cidade Florianópolis.
 */
const usuario = {
	nome: "Danilo",
	idade: 35,
	endereco: {
		cidade: "Toledo",
		uf: "SC",
		pais: "Brasil",
	},
};
const usuario2 = { ...usuario, nome: "Marcelo" };
const usuario3 = {
	...usuario,
	endereco: { ...usuario.endereco, cidade: "Florianópolis" },
};
console.log(usuario2.nome);
console.log(usuario3.endereco.cidade);
