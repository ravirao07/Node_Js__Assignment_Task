const express = require('express');
const fs = require('fs');
const addID = require('../middlewares/addID');
const auth = require('../middlewares/auth');

const router = express.Router();

// Helper function to read and write db.json
const readData = () => JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
const writeData = (data) => fs.writeFileSync('./db.json', JSON.stringify(data, null, 2));

// 1. Add a new hero
router.post('/add/hero', addID, (req, res) => {
    try {
        const data = readData();
        data.heroes.push(req.body);
        writeData(data);
        res.status(200).json(data.heroes);
    } catch (error) {
        res.status(500).json({ err: 'Error adding hero' });
    }
});

// 2. Retrieve details of all heroes
router.get('/', (req, res) => {
    try {
        const data = readData();
        res.status(200).json(data.heroes);
    } catch (error) {
        res.status(500).json({ err: 'Error retrieving heroes' });
    }
});

// 3. Update villains for a hero
router.patch('/update/villain/:hero_id', auth, (req, res) => {
    try {
        const { hero_id } = req.params;
        const data = readData();
        const hero = data.heroes.find((h) => h.id == hero_id);

        if (!hero) return res.status(404).json({ message: 'Hero not found' });

        hero.villains.push(req.body);
        writeData(data);
        res.status(200).json(hero);
    } catch (error) {
        res.status(500).json({ err: 'Error updating villains' });
    }
});

// 4. Delete a hero
router.delete('/delete/hero/:hero_id', auth, (req, res) => {
    try {
        const { hero_id } = req.params;
        const data = readData();
        const heroIndex = data.heroes.findIndex((h) => h.id == hero_id);

        if (heroIndex === -1) return res.status(404).json({ message: 'Hero not found' });

        data.heroes.splice(heroIndex, 1);
        writeData(data);
        res.status(200).json(data.heroes);
    } catch (error) {
        res.status(500).json({ err: 'Error deleting hero' });
    }
});

module.exports = router;
