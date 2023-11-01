const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.render('index', { title: 'Rest API with Node.js, Express and PostageSQL' });
    res.send({ title: 'Rest API with Node.js, Express and PostageSQL', message: 'Rest API successfully' });
});

router.get('/auth/login', (req, res) => {
    res.render('auth/login', { title: 'login' });
});

router.get('/auth/register', (req, res) => {
    res.render('auth/register', { title: 'register' });
});

module.exports = router;
