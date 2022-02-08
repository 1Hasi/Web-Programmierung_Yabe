import Router from 'express';



const router = Router();

router.get('/', (req, res) => {
    res.send('Hier ist unser Shop lol');
});


router.get('/meineprodukte', (req, res) => {
    res.send('hier liste der produkte des user');
});

/*router.get('/meineprodukte/produktanlegen', (req, res) => {
    res.send('hier kann der user ein produkt anlegen');
});
*/

// Alle Produkte abfragen
router.get('/meineprodukte/produktanlegen', async (req, res) => {
    try {
        const task = await find()
        res.json(task);
    } catch(err) {
        res.status(500).json({message: err.message})
    }
});

// Produktanlegen 
router.post('/meineprodukte/produktanlegen', (req, res) => {
    const task = new Product ({
        produkt_ersteller: req.body.produkt_ersteller,
        produkt_bezeichnung: req.body.produkt_bezeichnung,
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

export default router;