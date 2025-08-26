//  Atividade 1
// Contexto:
// ❏ Você foi contratado para desenvolver um sistema de cadastro de usuários. Para
// isso, será necessário criar uma classe que represente cada usuário,
// armazenando seu nome, e-mail e idade.
// Comando:
// ❏ Crie a classe Usuario utilizando os conceitos de encapsulamento para armazenar
// e recuperar os dados do usuário.

class Usuario {
    // atributos do usuário
    constructor(nome, email, idade) {
        this._nome = nome;
        this._email = email;
        this._idade = idade;
    }

    // métodos para definir (setters)
    setNome(nome) {
        this._nome = nome;
    }

    setEmail(email) {
        this._email = email;
    }

    setIdade(idade) {
        this._idade = idade;
    }

    // métodos para acessar (getters)
    pegarNome() {
        return this._nome;
    }

    pegarEmail() {
        return this._email;
    }

    pegarIdade() {
        return this._idade;
    }
}

const objetoUsuario = new Usuario ();
const objetoUsuario = new Usuario ();


// ● Atividade 2
// Contexto: Uma empresa quer organizar seus funcionários em um sistema de back-end. Para isso, você
// precisa criar uma estrutura que permita definir características comuns a todos os funcionários e métodos
// para gerenciar suas informações.
// Comando: Explique como a POO poderia ser aplicada para criar a estrutura de funcionários e quais
// vantagens ela oferece.
// A) Criando uma classe Funcionario que serve como modelo, permitindo instanciar vários objetos com dados
// individuais e métodos compartilhados
// B) Criando apenas variáveis separadas para cada funcionário, armazenando nome, cargo e salário
// C) Criando funções globais que modificam diretamente os dados de cada funcionário, sem organização
// D) Criando apenas um objeto literal que armazena todos os funcionários juntos, sem possibilidade de métodos

//Resposta correta:
//  A

//3
// Explique a diferença entre classe e objeto em POO.
// Qual a diferença de uma classe “Carro” e um objeto “meuCarro”?


// resposta:
// Classe é o modelo, ela descreve os atributos.
// Objeto é o que é criado a partir do modelo.

// ● Atividade 4
// Liste os atributos e métodos que você colocaria em uma classe “Aluno”

//atributos: 
// nome
// idade
// matricula
// nota
// frequencia

//metodos:
//faltar()
//estudar()
//participar()


//atv7

class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}
const objPessoa1 = new Pessoa("")

