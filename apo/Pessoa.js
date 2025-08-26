class Pessoa{
    //atributos da classe pessoa
    nome;
    carroFavorito;
    dna;
    idade;
    cpf;
    doencas;
    cep;
    peso;

    //inicializa os meus 
    constructor (nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    //Um metodo para definir o nome 
    setNome(nome){
        this.nome= nome;
    }

    pegarNome(){
        return this.nome;
    }

}


module.exports = Pessoa;