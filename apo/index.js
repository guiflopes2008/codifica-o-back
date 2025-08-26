 //importando o arquivo da classe pessoa js
 import Pessoa from "./Pessoa.js"

 //instanciando a classe pessoa
 const pessoa1 = new Pessoa("Gui", 15, "1111122233333")// a constante pessoal é um objeto

 pessoa1.setNome("Ronaldo");//definido o nome Ronaldo

 let nomePessoa = pessoa1.pegarNome()

 console.log(nomePessoa);

 