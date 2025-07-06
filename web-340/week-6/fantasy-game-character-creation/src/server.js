
const http = require('http');
const url = require('url');

const parsedUrl = url.parse(req.url, true); // `true` returns `query` as an object
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;


let createdCharacter = null;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const { pathname, searchParams } = url;

  if (req.method === 'POST' && pathname === '/create-character') {
    createdCharacter = {
      class: searchParams.get('Warrior, Mage, Rouge'),
      gender: searchParams.get('Male, Female, Other'),
      funFact: searchParams.get('funFact'),
    };
    res.end('Character created successfully!');
  
  } else if (req.method === 'POST' && pathname === '/confirm-character') {
    res.end('Character confirmed!');
  
  } else if (req.method === 'GET' && pathname === '/view-character') {
    if (createdCharacter) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(createdCharacter));
    } else {
      res.end('No character created yet.');
    }
  
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }

});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;