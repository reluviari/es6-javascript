/**
 * 7
 * Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
 * const nome = 'Danilo';
 * const idade = 35;
 * const usuario = {
 *      nome: nome,
 *      idade: idade,
 *      cidade: 'Toledo',
 * };
 */
const nome = "Danilo";
const idade = 35;
const usuario = {
	nome,
	idade,
	cidade: "Toledo",
};
console.log(usuario);
