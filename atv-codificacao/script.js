// Crie um array com os nomes de 5 colegas da sua sala.
// Depois, use um for para imprimir no console a seguinte mensagem para
// cada um:
// Olá, Ana! Bem-vindo(a) à aula de JavaScript.
// Olá, Lucas! Bem-vindo(a) à aula de JavaScript.
// …
// Objetivo: praticar o uso do for para percorrer arrays e usar os valores.

let alunos = ["mikael", "guilherme", "gabriel", "prince", "raphael"]

for (let i = 0; i < alunos.length; i++)
    console.log(`Olá ${alunos[1]}bem-vindo(a) à aula de JavaScript.`)


// Crie um array com 5 números inteiros.
// Use um for para somar todos os números e mostrar o resultado final no
// console.
// Objetivo: praticar o uso de for com números e acumuladores (let soma = 0).

let numeros = [1,2,3,4,5]

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}
console.log("A soma dos números é:", soma)

//     Crie um array com 5 notas de um aluno. Depois, use um laço de repetição
// para somar as notas e, ao final, calcule e mostre a média.
// Objetivo: Reforçar a ideia de percurso com for, acumulador e uso prático do
// array em um cálculo real.



let notas = [7, 8, 6.5, 9, 7.5];
let add = 0;

for (let i = 0; i < notas.length; i++) {
  add += notas[i];
}

let media = add / notas.length;
console.log("A média do aluno é:", media.toFixed(2));



// Crie um exemplo prático que use os métodos de array aprendidos em aula
// (como push, pop, shift, unshift, length, entre outros).
// Use sua criatividade para montar uma situação em que esses métodos
// façam sentido — pode ser uma lista de tarefas, carrinho de compras, nomes
// de jogadores, etc.



let  fisiculturistas = ["Arnold Schwarzenegger","Ronnie Coleman","Jay Cutler","Phil Heath","Chris Bumstead"]

fisiculturistas.push("kevin levrone")

fisiculturistas.pop()

const asd = fisiculturistas.unshift(["Ramon Dino"])
console.log(asd)

fisiculturistas.shift()

console.log(fisiculturistas)
