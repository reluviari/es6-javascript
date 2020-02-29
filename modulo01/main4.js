// Mutação de Const

/**
 * Não é permitido :
 * const a = 1;
 * a = 3;
 * Mutação de uma const :
 * */
const usuario = { nome: "Danilo" };
usuario.nome = "Diego";
console.log(usuario);
