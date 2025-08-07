//funcoes assicronas

function esperar() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Demorou, mas chegou : D')
        }, 5000)
    })
}

//toda vez que eu fizer uma funcao assicrona 
//eu preciso utilizar o await
async function executar() {
    console.log('esperando...');
    const resultado = await esperar()//espera a promise finalizar com sucesso ou falha
    console.log(resultado)
}

executar()

//resultado desse codigo
//esperando...
//depois de 5 segundos...
//demorou mas chegou. 

//resultado a c b

let carro = {
    nome: "honda civic da ana beatriz",
    marca: "honda",
    modelo: "civic",
    atributos: ["som", "camera de re", "teto solar", "escapamento", "antena"]
}

console.log(carro.ano);
console.log(carro.atributos[2]);

carro.cor = "preto com vermelho"

carro.nome = "honda civic 2025"

//1 crie uma funcao criar Calculadora(operador) que retorne outra função capaz de realizar a operação dois números.Exemplo de uso 
//const somar = criarCalculadora('+);console.log(somar)(5,3)

function criarCalculadora(operador) {
    return function (a, b) {
        switch (operador) {
            case '+':
                return a + b;
            case '*':
                return a * b;
            default:
                return "Esse operador não faz cálculo";
        }
    }
}

const calculadora = criarCalculadora('+')
calculadora(5, 5)

//2 crie uma função chamada eviarEmail(destinatario)que:Use async simule o tempo de envio com setTimeout dentro de uma promise (ex: 2segundos)mostre no console;"enviando para [destinatario]..."Apos 2 segundos: "Email enviado com sucesso para[destinatario]"

async function enviarEmail(destinatario) {
    console.log(`enviando email para ${destinatario}`)
    await esperar();
    console.log('finalizado')
}

function esperar() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('enviado com sucesso');
        console.log('enviado com sucesso');
      }, 2000);
    });
  }


//3 crie um array de objetos chamado produtos, com pelo menos 2 produtos. cada produto deve ter nome  preco. converta esse array para um strinj json e mostre o resutado no console

const produtos = [
    { nome: "tenis", preco: 150.00 },
    { nome: "meia", preco: 20.00 },
]

const produtosJSON = JSON.stringify(produtos);
console.log(produtosJSON);