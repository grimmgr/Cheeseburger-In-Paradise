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
    burger.create('description', req.body.description, (data) => {
        console.log({id: data.insertId});
        // res.json({id: data.insertId});
    })
    
    res.end();
})

module.exports = router;