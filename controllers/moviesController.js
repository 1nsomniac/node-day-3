var Movies = require('../models/movies');

// used for our 'undo' function
var lastKnownState;

module.exports = {
  create: function(req, res, next) {
    // receiving data
    // req.body
    // data structure
    // { title: '', length: NUM }
    console.log('Adding new movie ' + req.body.title + ' to movies');
    var newMovie = {
      title: req.body.title,
      length: req.body.length
    };
    Movies.push(newMovie);
    res.status(200).send(Movies);
  },
  read: function(req, res, next) {
    console.log('Getting movies');
    res.status(200).send(Movies);
  },
  searchQuery: function(req, res, next) {
    console.log('queries', req.query)
    if (req.query.operator === 'gt') {
      var rating = req.query.rating
    }

  } ,
  search: function(req, res, next) {
    console.log('params', req.params)
  },
  update: function(req, res, next) {
    console.log('Updating', req.params.id);
    // .map returns a new array with the values that you decide. This is basically copying everything over
    lastKnownState = Movies.map(function(item) {
      return item;
    });
    Movies[req.params.id] = req.body;
    res.status(200).send(Movies);
  },
  undo: function(req, res, next) {
    console.log('Retrieving last known state');
    Movies = lastKnownState;
    res.status(200).send(Movies);
  },
  destroy: function(req, res, next) {
    Movies.splice(req.params.id, 1);
    res.status(200).send(Movies);
  }
};
