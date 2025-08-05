// 1- Um site precisa validar dados de um formulário de cadastro (nome, e-mail e idade). Crie uma função
// tradicional para validar o nome e uma arrow function para validar a idade se for maior ou igual a 21.

function validarNome2(nome) {
    return nome.length > 2;
}

function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

const validarIdade = idade => idade >= 21;


const nome = "guilherme";
const email = "guilherme@email.com";
const idade = 25;

console.log("Nome válido?", validarNome(nome));       // true
console.log("Email válido?", validarEmail(email));    // true
console.log("Idade válida?", validarIdade(idade));    // true


// 2    Um sistema precisa validar se o usuário existe no banco de dados e, caso sim, redirecionar para a área
// logada. Simular essa autenticação usando uma função login(usuario, senha, callback) onde o callback define
// o que fazer após o login.

function login(usuario, senha, callback) {
    if (usuario === "ana@email.com.br")
        console.log('existe')
    if (senha === "123456")
        console.log('senha correta')
    else {
        console.log("senha incorreta")

        callback;
    }
    login("iasmin@gmail.com", "12345", function () { console.log("Carregando login...") })
}


// 3 Calculadora de Frete com Funções Anônimas
// Um e-commerce calcula o frete com base no peso e região do cliente. Criar uma função calcularFrete(peso,
// regiao) que utilize uma função anônima dentro para aplicar as taxas.

function calcularFrete(peso, regiao) {
    const taxaPorRegiao = function (r) {
        switch (r.tolowercase()) {
            case "norte": return 20; break;
            case "sul": return 10; break;
            case "leste": return 15; break;
            case "oeste": return 12; break;
            default: return 25;

        }
    }
    const taxa = taxaPorRegiao(regiao);
    const frete = peso * taxa;
    return frete;
}

console.log(calcularFrete(5, "norte"));
console.log(calcularFrete(3, "sul"));





// 4) Crie uma função chamada MULT que receba 3 parametros e retorne a multiplicação
// deles. Depois crie outra funcao chamada MEDIA que calcule a média de três notas e
// retorne o resultado.

function mult(n1, n2, n3) {
    return n1 * n2 * n3
}

function mult(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

mult(2, 2, 2)
media(10, 20, 30)