var mongoose = require('mongoose');

var movieSchema = require('../schemas/movie');

module.exports = mongoose.model('Movie', movieSchema);