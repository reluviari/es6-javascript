/**
 * 4.1 
 * Desestruturação simples
 * A partir do seguinte objeto:
 * const empresa = {
 *          nome: 'Rocketseat',
 *          endereco: {
 *              cidade: 'Rio do Sul',
 *              estado: 'SC',
 *          }
 * };
 * Utilize a desestruturação para transformar as propriedades 
 * nome, cidade e estado em variáveis, no fim deve ser possível
 * fazer o seguinte:
 * console.log(nome);   // Rocketseat
 * console.log(cidade); // Rio do Sul
 * console.log(estado); // SC
 */
const empresa = {
    nome: "Rocketseat",
    endereco: {
        cidade: "Rio de Janeiro",
        estado: "SC",
    }
};
const {nome, endereco:{cidade, estado}} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

/**
 * 4.2 
 * Desestruturação em parâmetros
 * Na seguinte função:
 * function mostraInfo(usuario) {
 *      return ${usuario.nome} tem ${usuario.idade} anos.; entre crases
 * }
 * mostraInfo({ nome: 'Diego', idade: 23 })
 * Utilize a desestruturação nos parâmetros da função para buscar o nome e 
 * idade do usuário separadamente e a função poder retornar apenas:
 * return ${nome} tem ${idade} anos.; entre crases
 */
function mostrarInfo( {nome, idade} ){
    return `${nome} tem ${idade} anos.`;
}
console.log(mostrarInfo({nome: "Diego", idade: 23}));

