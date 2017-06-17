var mongoose = require('mongoose');

var newMovieSchema = require('../schemas/newMovie');

module.exports = mongoose.model('newMovie', newMovieSchema);