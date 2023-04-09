// Importing required modules and controller
const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist.controller');

// Defining routes
router.get('/artists', artistController.findAllArtists);

// Exporting router
module.exports = router;
