const express = require('express');
const router = express.Router();
const Task = require('../modules/Task');

router.get('/', (req, res) => {
    res.send('Hier ist unser Shop lol');
});

router.get('/meineprodukte', (req, res) => {
    res.send('hier liste der produkte des user');
});

router.get('/meineprodukte/produktanlegen', (req, res) => {
    res.send('hier kann der user ein produkt anlegen');
});

router.post('/meineprodukte/produktanlegen', (req, res) => {
    const task = new Task ({
        title: req.body.title,
        description: req.body.description
    });
    task.save()
        .then(data => {
        res.status(201).json(data);
    })
        .catch (err => {
        res.status(400).json({message: err});
    }); 
});

module.exports = router;