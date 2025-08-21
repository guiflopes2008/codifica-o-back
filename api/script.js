const cep = '88052100' ;

// Fecth API - Nativo JavaScript
// método GET
fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(res => res.json())  //converte para objeto
.then(data => console.log(data)) //recebe os dados convertidos e mostra os dados
.catch(err => console.log(err))  //se der erro, captura e mostra o erro

// -----------------------------------------------------


// ler dados do arquivo
function lerDados(arquivo="usuarios.json") {
    // retorna os dados e convertidos para objeto
    return json.parse(fs.readFile(arquivo), 'utf-8'); //
}


// salvar os dados no arquivo
function saveDados(arquivo="usuarios.json"){
    // usa a função de escrever no arquivo, passando como parametros o arquivo e um metodo que converte para json
    fs.writeFile(arquivo, json.stringify(dados, null, 2));
}


// criar nosso servidor com node
const http = require(http);
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    //define o conteudo da resposta
    res.setHeader(200, {"Content-type": "application/json"}); //definindo o cabeçalho

    if(req.method === "GET" && req.url === 'dados'){
        const dados = lerDdos('usuarios.json'); //retorna os dados do json
        res.writeHead(200);
        res.end(JSON.stringify(dados));
    } 

    else if (req.method === "POST" && req.url === "/dados"){
        let body = '';
        //é um evento que escuta quando os dados chegam
        req.on('data', chunk =>{
            body += chunk.toString();
        });

        req.on('end', () =>{
            try { //td q der certo ele entra aqui 
                const novoDado = JSON.parse(body)
                const dados = lerDados('usuarios.json');  //le o json existente

                novoDado.id = 99;   //gera o id
                dados.push(novoDado); //adiciona o novo dado no jsno

                res.writeHead(201);  //responde ao cliente com status 201 (criado com sucesso)
                res.end("Dados adicionandos com sucesso.")


            } catch (error){  //se der errado, entra aqui
                console.log("Ocorreu um erro", error);
                res.writeHead(400);
            }
        })
    } 
     else{
        res.writeHead(404);
        res.end("Página não existe")
    }
})

server.listen(port, () => { //irá irá rodar na porta definida
    console.log(`Servidor rodando na porta ${port}. Só abrir localhost`)
})


const url = `http://localhost:${dados}/dados`;

const objNovoDado = {
    nome: "Ronaldo Emanuel Porshe do Victor",
    idade: 105,
    salario: 250.000
}

fetch(url, {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(novoDados)
})
.then(response => {
    if(!response.log("Error"));

    return response.json();
})
.then(data => console.log("Resposta do servidor: ", data))
.catch(error => {
    console.log('Error', error);
})