const express = require('express');  // Corrigido 'express'
const router = express.router();     // Corrigido 'router'
const bdd = require('./bdd');         // Importando 'db' corretamente

router.post('/login', (req, res) => {  // Corrigido o caminho da rota
    const {email, senha} = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    bdd.query(query, [email, senha], (err, result) => {
        if(err) throw err;

        if(result.length > 0) {
            res.json({ message: 'Login efetuado com sucesso' });
        } else {
            res.json({ message: 'Email ou senha inválidos' });
        }
    });
});

module.exports = router;
