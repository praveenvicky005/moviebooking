const express = require("express");
bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // createIndexes: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Upgrad InSession application development by Rocky Sir." });
});

// import controllers
const movieController = require('./routes/movie.routes');
const genreController = require('./routes/genre.routes');
const artistController = require('./routes/artist.routes');
const userController = require('./routes/user.routes');
// use controllers as middleware
app.use('/api/movies', movieController);
app.use('/api/genres', genreController);
app.use('/api/artists', artistController);
app.use('/api/auth', userController);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});