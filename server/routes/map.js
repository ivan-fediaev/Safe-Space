const express = require('express');
const router = express.Router();
const Map = require('../models/map');

// Get all markers
router.get('/', async (req, res) => {
    try {
        const maps = await Map.find();
        res.json(maps);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single marker
router.get('/:id', getMarker, (req, res) => {
    res.json(res.marker);
});

// Create a marker
router.post('/', async (req, res) => {
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
router.patch('/:id', getMarker, async (req, res) => {
    if (req.body.title != null) {
        res.marker.title = req.body.title;
    }
    if (req.body.address1 != null) {
        res.marker.address1 = req.body.address1;
    }
    if (req.body.address2 != null) {
        res.marker.address2 = req.body.address2;
    }
    if (req.body.coords != null) {
        res.marker.coords = req.body.coords;
    }
    if (req.body.placeId != null) {
        res.marker.placeId = req.body.placeId;
    }
    if (req.body.upvotes != null) {
        res.marker.upvotes = req.body.upvotes;
    }
    if (req.body.downvotes != null) {
        res.marker.downvotes = req.body.downvotes;
    }
    res.marker.save()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(400).json({ message: err.message });
    });
});

// Delete a marker
router.delete('/:id', getMarker, async (req, res) => {
    try {
        await res.marker.remove();
        res.json({ message: 'Deleted this marker' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getMarker(req, res, next) {
    let marker;
    try {
        marker = await Map.findById(req.params.id);
        if (marker == null) {
          return res.status(404).json({ message: "Cannot find marker" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.marker = marker;
    next();
}

module.exports = router;