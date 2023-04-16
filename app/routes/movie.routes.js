const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");

// Get all movies
router.get("/movies", movieController.findAllMovies);

// Get all published movies
// router.get("/movies?status=PUBLISHED", movieController.getAllPublishedMovies);

// Get all released movies
// router.get("/movies?status=RELEASED", movieController.getAllReleasedMovies);

// Get a single movie by movieId
// router.get("/movies/:movieId", movieController.getMovieById);

// Get released movies by title, genres, artists, start date and end date
// router.get("/movies", movieController.getReleasedMoviesByFilter);

module.exports = router;
