// Rest

const usuario1 = {
	nome: "Danilo",
	idade: 35,
	empresa: "Reluviaris",
};

const { nome, ...resto } = usuario1;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);
