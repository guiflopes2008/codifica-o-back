import Carro from "./Carro.js"

const objCarro = new Carro();
objCarro.nome = "o nome da menina";
let nome = objCarro.nome;
console.log("O nome é", nome);

const objCarro2 = new Carro()//instanciando minha classe
objCarro2.definirNomeChassi("123ABC!@#")//definindo o nome do meu chassi
let chassi = objCarro2.pegarNomeChassi()//aqui estou capturando o nome do meu chassi
console.log(chassi)//mostra o nome do chassi