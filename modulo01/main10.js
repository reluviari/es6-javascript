// Spread

const usuario1 = {
	nome: "Danilo",
	idade: 35,
	empresa: "Reluviaris",
};

const usuario2 = { ...usuario1, nome: "João" };

console.log(usuario2);
