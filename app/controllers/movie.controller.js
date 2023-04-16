const db = require('../models');
const Movie = db.movie;
// Find all movies by status
// exports.findAll = (req, res) => {
//   Movie.find({}).then(err, movies) => {
//     if (err) {
//       return res.status(500).send({ message: err.message });
//     }
//     res.status(200).send(movies);
//   });
// };


exports.findAllMovies = (req, res) => {
  Movie.find({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving courses."
        });
      });
  };
// Find one movie by id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Movie.findById(id, (err, movie) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    if (!movie) {
      return res.status(404).send({ message: 'Movie not found' });
    }
    res.status(200).send(movie);
  });
};

// Find all shows for a specific movie
// exports.findShows = (req, res) => {
//   const id = req.params.id;
//   Show.find({ movieId: id }, (err, shows) => {
//     if (err) {
//       return res.status(500).send({ message: err.message });
//     }
//     if (!shows) {
//       return res.status(404).send({ message: 'Shows not found' });
//     }
//     res.status(200).send(shows);
//   });
// };
