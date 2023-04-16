// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/movies') {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end('All Movies Data in JSON format from Mongo DB');
//   } else if (req.url === '/genres') {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end('All Genres Data in JSON format from Mongo DB');
//   } else if (req.url === '/artists') {
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end('All Artists Data in JSON format from Mongo DB');
//   } else {
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.end('404 Not Found');
//   }
// });
const express = require("express");
const app = express();
// import controllers
const movieController = require('./controllers/movie.controller');
const genreController = require('./controllers/genre.controller');
const artistController = require('./controllers/artist.controller');
const userController = require('./controllers/user.controller');
app.use(cors({ 
    origin: 'http://localhost:9000'
  }));
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});
// use controllers as middleware
app.use('/api/movies', movieController);
app.use('/api/genres', genreController);
app.use('/api/artists', artistController);
app.use('/api/auth', userController);
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});