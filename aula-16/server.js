const express = require('express');
const app = express();
const port = 3000;

const usuarioRoute = require('./src/routes/usuarios');

app.use(express.json());
app.use('/usuarios', usuarioRoute); // aqui o nome da rota deve bater com a rota usada no cliente

app.get('/', (req, res) => {
    res.send("Olá pessoal, estou no navegador");
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}. Abra http://localhost:${port}`);
});
