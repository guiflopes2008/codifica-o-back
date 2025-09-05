const express = require('express')

let task = [
    { id: 1, title: "Estudar Apis", done: false },
    { id: 2, title: "praticar criaçao de apis", done: false },
]

const getAll = () => task

const getById = (id) => {
    const task = task.find(t => t.id === id)
    if (!task) throw { status: 404, message: "tarefa não encontrada"}
    return task
}

module.exports = {getAll, getById}