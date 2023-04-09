const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controller');

// GET /api/movies
router.get('/movies', movieController.findAllMovies);

// GET /api/movies?status=PUBLISHED
router.get('/movies?status=PUBLISHED', movieController.findAllPublishedMovies);

// GET /api/movies?status=RELEASED
router.get('/movies?status=RELEASED', movieController.findAllReleasedMovies);

// GET /api/movies/{movieId}
router.get('/movies/:movieId', movieController.findOne);

// GET /api/movies?status=RELEASED&title={title}&genres={genres}&artists={artists}&start_date={startdate}&end_date={enddate}
router.get('/movies?status=RELEASED&title=:title&genres=:genres&artists=:artists&start_date=:startdate&end_date=:enddate', movieController.findReleasedMoviesWithFilters);

module.exports = router;
