const bodyParser = require('body-parser')
const express = require('express')
const app = express

app.use(express.json())

let tickets = []

app.get("/ticket", (req, res) => {
    res.json(tickets)
})

app.post("/ticket", (req, res) => {
    const novoTickets = {
        id: tickets.length +1,
        ...req.body
    }
    tickets.push(novoTickets);
})

app.put("/ticket/:id",(req, res) => {
    const {id} = req.params

    let ticket = tickets.find(t => t.id === id)

    if(!ticket){
        return res.status(404).json({msg: "Ticket não encontrado, então ele não sera atualizado)"})
    }

    ticket = {...ticket, ...req.body}

    tickets = tickets.map(t =>(t.id === id ? ticket : t))
    res.json(ticket)
})

app.delete("/ticket/:id", (req, res) => {
    const {id} = req.params;
    tickets = tickets.filter(t => t.id != id);
    res.json({
        msg: "Ticket atualizado com sucesso"
    })
})

function midllewareValidarTicket(req, res, next) {
    const {titulo, prioridade, descricao, categoria, nomeSolicitante, deparatamento, telefone, email}= req.body 

    if(titulo){
        return res.status(400).json({msg: "Titulo obrigatorio"})
    }

    next()

}

module.exports = usuario