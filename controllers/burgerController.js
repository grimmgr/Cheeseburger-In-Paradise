const express = require('express');

const router = express.Router();

const burger = require('../models/burgerModel.js');

// get all entries from 'burgers' table of database and render
router.get('/', (req, res) => {
    burger.all(result => {
        res.render('index', { burgers: result });
    })
});

// create new row in 'burgers' table
router.post('/api/burgers', (req, res) => {
    burger.create('description', req.body.description, (result) => {
        res.json(result);
    })
});

// update row in 'burgers' table
router.put('/api/burgers/:id', (req, res) => {
    const condition = `id=${req.params.id}`;

    burger.update({eaten: req.body.eaten}, condition, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// delete row in table
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