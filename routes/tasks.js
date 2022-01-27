const express = require('express');
const router = express.Router();
const Task = require('../modules/Task');

router.get('/', (req, res) => {
    res.send('klappt');
});

router.get('/home', (req, res) => {
    res.send('home geht auch');
});

router.post('/', (req, res) => {
    console.log(req.body);
    const task = new Task ({
        title: req.body.title,
        description: req.body.description
    });
    task.save()
        .then(data => {
        res.json(data);
    })
        .catch (err => {
        res.json({message: err});
    }); 
});

module.exports = router;