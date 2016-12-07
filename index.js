// MODULES
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3001;

// when you require .js files, the .js is optional
var Movies = require('./models/movies');
// require in our controller
var MoviesController = require('./controllers/moviesController');

// MIDDLEWARE
// parses json and takes care of JSON.parse and JSON.stringify for us
app.use(bodyParser.json());
// parses and makes req.body available
// Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST) and exposes the resulting object (containing the keys and values) on req.body.
app.use(bodyParser.urlencoded({ extended: true }));

// ENDPOINTS
app.get('/movies', MoviesController.read);

// create
app.post('/movies', MoviesController.create);

// req.params to specify which movie we want to 'put'/edit/update
app.put('/movies/:id', MoviesController.update);

app.get('/movies/undo', MoviesController.undo);

app.delete('/movies/:id', MoviesController.destroy);

// LISTEN
app.listen(port, function() {
  console.log('Listening on port', port);
});
