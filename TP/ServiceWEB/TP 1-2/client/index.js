// define constants

const express = require('express');
const app = express();
const port = 3030;

// to set view engine as ejs
app.set('view engine', 'ejs');

// to use static pages
app.use(express.static(__dirname + '/public'));

// get client view
app.get('/', function (req, res) {
  res.render('client');
}
);

//with callback
/* app.get('/', function (req, res) {
  res.render('client', { title: 'hey' });
}
); */

// Bind and listen to port  
app.listen(port, function (err) {
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", port);
})