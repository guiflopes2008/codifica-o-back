const express = require('express');
const express = require(',/src')

const app = express();

app.use(express.json());

app
//rotas

const PORT = 3000
app.listen(PORT, () => {
    console.log(`servidor rodando em https://localhost:${PORT})`)
})