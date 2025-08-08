console.log("Olá, mundo do Node!");

const chalk = require('chalk');
console.log(chalk.green('Servidor iniciado com sucesso!'));

// const soma = require('./utils.js/soma');
// console.log("Resultado:", soma(5, 7));

// const a = Number(process.argv[2]);
// const b = Number(process.argv[3]);
// console.log("Soma:", a + b);

const soma = require('./utils.js/soma');
const sub = require('./utils.js/subtracao');
const mult = require('./utils.js/multiplicacao');
const a = 10;
const b = 4;
console.log("Soma:", soma(a, b));
console.log("Subtração:", sub(a, b));
console.log("Multiplicação:", mult(a, b));