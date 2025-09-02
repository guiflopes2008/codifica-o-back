const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT id, nome, email FROM usuarios");
        res.json(rows);
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({ erro: "Erro ao buscar usuarios" });
    }
});


module.exports = router;
