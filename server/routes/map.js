const express = require('express');
const router = express.Router();
const Map = require('../models/map');

// Get all markers
router.get('/', (req, res) => {
    try {
        const maps = await Map.find();
        res.json(maps);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single marker
router.get('/:id', (req, res) => {

});

// Create a marker
router.post('/', (req, res) => {
    const map = new Map({
        title: req.body.title,
        address1: req.body.address1,
        address2: req.body.address2,
        coords: req.body.coords,
        placeId: req.body.placeId,
        upvotes: req.body.upvotes,
        downvotes: req.body.downvotes,
    });
    try {
        const newMap = await map.save();
        res.status(201).json(newMap);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a marker
router.patch('/:id', (req, res) => {

});

// Delete a marker
router.delete('/:id', (req, res) => {

});

module.exports = router;