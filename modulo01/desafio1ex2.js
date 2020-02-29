// dado o vetor :
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    { nome: 'Danilo', idade: 25, empresa: 'Rocketseat' },
];

//utilizar os métodos de array (map, reduce, filter e find)

/**
 * 2.1 Utilizando o map : Crie uma variável que contenha todas idades dos usuários: 
 * Resultado : [23, 15, 30]
 */
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);
//extras
const empresas = usuarios.map(usuario => usuario.empresa);
console.log(empresas);
const nomes = usuarios.map(usuario => usuario.nome);
console.log(nomes);

/**
 * 2.2 Utilizando o filter :  
 * Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos:
 * Resultado : [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
 */
const rocketseat18 = usuarios.filter(
    usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18
);
console.log(rocketseat18);

/**
 * 2.3 Utilizando o find : 
 * Crie uma variável que procura por um usuário que trabalhe na empresa Google:
 * Resultado : undefined
 */
const salarioGoogle = usuarios.find(
    usuario => usuario.empresa === 'Google'
);
console.log(salarioGoogle);

/**
 * 2.4 Unindo operações :
 * Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem 
 * no máximo 50 anos:
 * Resultado:
 * [
 *  { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 *  { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
 * ]
 */
const calculo = usuarios
    .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50
);
console.log(calculo);