// Desestruturação

const usuario = {
	nome: "Danilo",
	idade: 35,
	endereco: {
		cidade: "São Paulo",
		estado: "SP",
	},
};

/**
 * Recuperar informações do objeto :
 * const nome = usuario.nome;
 * const idade = usuario.idade;
 * const cidade = usuario.endereco.cidade;
 */

// Desestruturação do objeto
const { nome, idade } = usuario;
console.log(nome);
console.log(idade);

// O mesmo se aplica para parâmetros de funções
