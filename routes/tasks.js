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
        produkt_ersteller: req.body.produkt_ersteller,
        produkt_mindestwert: req.body.produkt_mindestwert,
        produkt_beschreibung: req.body.produkt_beschreibung,
        produkt_bild: req.body.produkt_bild
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