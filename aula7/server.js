const http = require("http");//modulo interno do node
const port = 3001;//porta onde o node/servidor irá rodar

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" })//definindo o cabeçalho
    res.write("Olá, servidor em node.js está funcionando. :D")//corpo
    res.end();//finalizar
})

server.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
})

//Lendo arquivos

const fs = require("fs");//importanto modulo interno do node chamado file System
// fs.readFile(`dados.txt`,`utf-8`,(err,data)=>{//chamando o metodo para ler meu arquivo
//     if(err)//se erro, vai aparecer no console
//         console.log(`Erro:`,err)
//     console.log(data)//nessa linha irá mostrar os dados do meu arquivo"dados.txt
// });

fs.writeFile("dados.txt","ola pessoal",(erro)=>{
        if(erro)
         console.log("Houve um erro " +erro)
     console.log("arquivo salvo com sucesso")
 });

 fs.appendFile("dados.txt","linha acrescentada!  acaba logo",(err)=>{
    if(err)
        console.log(`Erro`,err)
    console.log("linha adicionada com sucesso")
 });
