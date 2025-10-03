const db = require('../dataBase/db');

const getAllUsers = async () => {
    const [rows] = await db.query('SELECT * FROM users');
    returnrows;
};

const getAllUserById = async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

const createUser = async (user) => {
    const {nome, email} = user;
    const [result] = await db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email]);
    return {id: result.insertId, ...user};
};

const deleteUser = async (id) => {
    await db.query('DELETE FROM users WHERE id = ?',[id]);
    return {Message: 'Usuário deletado'};
};

module.exports = {getAllUsers, getAllUserById, createUser, deleteUser}