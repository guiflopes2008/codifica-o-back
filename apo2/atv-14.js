// Contexto: É importante entender quem pode acessar cada tipo de dado para proteger informações
// e manter a lógica correta.
// Comando:
// 1º Explique COM AS SUAS PALAVRAS o que é public, private e protected.



//Public: é como algo que todo mundo pode ver e mexer, sem restrição.

// Private: é como um segredo guardado, só a própria classe pode acessar.

// Protected: é meio-termo — só a própria classe e quem herda dela têm acesso.



// 2º Explique COM AS SUAS PALAVRAS o que é GET e SET dentro de uma classe.

// O get serve pra pegar dados já o set altera dados

// 3º Explique COM AS SUAS PALAVRAS para que serve o encapsulamento

// Protege os dados do código, controlando o acesso e deixando tudo mais seguro e organizado.


// Contexto: Um professor quer armazenar informações sobre os alunos, como nome e
// nota. Para proteger esses dados, eles devem ser privados, permitindo acesso apenas
// por métodos controlados.
// Comando: Crie a classe utilizando os conceitos de encapsulamento para armazenar e
// recuperar os dados.



class Aluno {
    #nome;
    #nota;

    constructor(nome, nota) {
        this.#nome = nome;
        this.#nota = nota;
    }

    // Getter para nome
    getNome() {
        return this.#nome;
    }

    // Setter para nome
    setNome(novoNome) {
        this.#nome = novoNome;
    }

    // Getter para nota
    getNota() {
        return this.#nota;
    }

    // Setter para nota
    setNota(novaNota) {
        this.#nota = novaNota;
    }
}

const aluno1 = new Aluno("Carlos", 8.5);

console.log(aluno1.getNome()); // Carlos
console.log(aluno1.getNota()); // 8.5

// ● Atividade 3
// Contexto: Você precisa criar um sistema que controla carros. Alguns comportamentos, como ligar
// ou frear, devem ser públicos, mas a velocidade do carro deve ser privada e não acessível
// diretamente.
// Comando: Crie uma classe Carro aplicando os conceitos de encapsulamento. O atributo
// velocidade deve ser privado, não podendo ser acessado diretamente. Implemente métodos
// públicos ligar() e frear() para controlar o carro, além de getters e setters que permitam acessar e
// alterar a velocidade de forma segura, incluindo validações quando necessário. Teste a classe
// criando um objeto Carro e chamando seus métodos

class Carro {
    #velocidade = 0;
    
    ligar() {
      console.log("Ligou");
    }
  
    frear() {
      this.#velocidade = --;
      console.log("Parou");
    }
  
    getVelocidade() {
      return this.#velocidade;
    }
  
    setVelocidade(v) {
      this.#velocidade = v;
    }
  }
  
  const Carro = require('./Carro');
  const c = new Carro();
  
  c.ligar();
  c.setVelocidade(50);
  console.log(c.getVelocidade());
  c.frear();

  
//   ● Atividade 4
// Contexto: Um banco quer proteger as contas de seus clientes. O saldo deve ser privado e
// só pode ser alterado por métodos que validam depósitos e saques.
// Comando: Crie uma classe ContaBancaria que represente uma conta de cliente, garantindo
// que os dados internos sejam protegidos e que o comportamento da conta siga regras de
// segurança e consistência. Teste a classe criando objetos e simulando operações típicas de
// uma conta bancária.


  