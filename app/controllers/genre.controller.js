const db = require('../models');
const Genre = db.genere;


exports.findAllGenres = (req, res) => {
  Genre.find({}, (err, genres) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'An error occurred while retrieving genres.' });
    } else {
      res.send(genres);
    }
  });
};
