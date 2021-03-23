const http = require('http'); //chargement du module http

const hostname = '127.0.0.1'; //notez la notation ES6
const port = 3000;

//que doit faire le serveur lorsq’une requête lui parvient ?
const server = http.createServer((req, res) => { //req et res sont les requête et réponses HTTP
  res.statusCode = 200; //code retour portée par la réponse HTTP
  res.setHeader('Content-Type', 'text/plain'); //type MIME de la réponse HTTP
  res.end('Hello World\n'); //corps de la réponse et envoi dans une même fonction
});

// lancement du serveur
server.listen(port, hostname, () => { //que faire si le serveur s’est bien lancé ?
  console.log(`Server running at http://${hostname}:${port}/`);
});