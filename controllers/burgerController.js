const express = require('express');

const router = express.Router();

const burger = require('../models/burgerModel.js');

router.get('/', (req, res) => {
    burger.all(result => {
        res.render('index', { burgers: result });
    })
});

router.post('/api/burgers', (req, res) => {
    burger.create('description', req.body.description, (result) => {
        console.log({id: result.insertId});
        // res.json({id: data.insertId});
    })
    
    res.end();
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id=${req.params.id}`;

    console.log(`request body: ${JSON.stringify(req.body)}`);
    console.log(req.body.eaten);

    burger.update({eaten: req.body.eaten}, condition, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete('/api/burgers/:id', (req, res) => {
    const condition = `id=${req.params.id}`;

    burger.delete(condition, result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;