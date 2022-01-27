const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('klappt');
});

router.get('/home', (req, res) => {
    res.send('home geht auch');
});


module.exports = router;