const db = require("../models");
const Artist = db.artists;

exports.findAllArtists = async (req, res) => {
  try {
    const artists = await Artist.findAll();
    res.status(200).json(artists);
  } catch (error) {
    res.status(500).send({
      message: "Some error occurred while retrieving artists.",
    });
  }
};
