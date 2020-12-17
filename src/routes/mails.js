const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/add', isLoggedIn, (req, res) => {
    res.render('mails/add');
});

router.post('/add', isLoggedIn, async (req, res) => {
    const { asunto, remitente, mensaje } = req.body;
    const newMsj = {
        asunto,
        remitente,
        mensaje,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO mails set ?', [newMsj]);
    req.flash('success', 'Correo enviado correctamente');
    res.redirect('/mails');
});

router.get('/', isLoggedIn, async (req, res) => {
    const mails = await pool.query('SELECT * FROM mails WHERE user_id = ?', [req.user.id]);
    res.render('mails/list', { mails });
});



module.exports = router;