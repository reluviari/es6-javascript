/**
 * 1.1
 * No arquivo principal, importe apenas a classe Usuario renomeando-a
 * para ClasseUsuario e chame a função info();
 */

import ClasseUsuario from "./functions";

ClasseUsuario.info();

/**
 * 1.2
 * No arquivo principal, importe a variável de idade e exiba a mesma em tela;
 */

import { idade } from "./functions";

console.log(idade);

/**
 * 1.3
 * No arquivo principal, importe tanto a classe quanto a variável idade
 * e renomeie a variável idade para IdadeUsuario.
 */

import Usuario, { idade as IdadeUsuario } from "./functions";

console.log(Usuario.info());
console.log(IdadeUsuario);
