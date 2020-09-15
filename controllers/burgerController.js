const express = require('express');

const router = express.Router();

const burger = require('../models/burgerModel.js');

router.get('/', (req, res) => {
    burger.all(data => {
        console.log(data);

        res.render('index', { burgers: data });
    })
});

router.post('/api/burgers', (req, res) => {

    console.log(req.body);
    // burger.create('description', req.body.)
    res.end();
})

module.exports = router;