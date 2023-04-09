const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/movies') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('All Movies Data in JSON format from Mongo DB');
  } else if (req.url === '/genres') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('All Genres Data in JSON format from Mongo DB');
  } else if (req.url === '/artists') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('All Artists Data in JSON format from Mongo DB');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
