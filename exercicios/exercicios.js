// 1 Crie uma classe Pessoa com atributos privados nome e idade, e métodos públicos para
// acessar e alterar esses valores.

class Pessoa {
    #nome
    #idade

    constructor(nome, idade) {
        this.#nome
        this.#idade
    }
    getNome() {
        return this.#nome
    }
    setNome(novoNome) {
        this.#nome = novoNome
    }
    getIdade() {
        return this.#idade
    }
    setIdade() {
        this.#idade
    }
}

// Implemente uma classe ContaBancaria com saldo privado e métodos depositar e sacar que
// alteram o saldo.

class ContaBancaria {
    #saldo

    constructor(saldoInicial) {
        this.#saldo = saldoInicial
    }

    sacar(valor) {
        if (valor <= this.#saldo)
            this.#saldo = this.#saldo - valor
    }
    getExtrato() {
        return this.#saldo
    }

}

// Crie uma classe Produto com atributos privados nome e preco. Implemente métodos get e set
// para ambos 

class Produto {
    
    #nome;
    #preco;

    
    constructor(nome, preco) {
        this.#nome = nome;
        this.#preco = preco;
    }

    
    getNome() {
        return this.#nome;
    }

    
    setNome(novoNome) {
        this.#nome = novoNome;
    }

    
    getPreco() {
        return this.#preco;
    }

    
    setPreco(novoPreco) {
        this.#preco = novoPreco;
    }
}

// 4 Implemente uma classe Carro com atributos privados marca e velocidade. Adicione método
// para acelerar e frear.

class Carro{
    #marca
    #velocidade = 0

    constructor(marca, velocidade){
        this.#velocidade
    }

    ligar()

    freiar()
}
