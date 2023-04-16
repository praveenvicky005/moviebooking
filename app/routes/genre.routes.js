const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genre.controller');

// GET all genres
router.get('/genres', genreController.findAllGenres);

module.exports = router;
