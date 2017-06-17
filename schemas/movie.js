var mongoose = require('mongoose')

module.exports = new mongoose.Schema({
    downLoadUrls: Array,    
    title: String,
    date: String,
    cover: String,
    size: String,
    type: String,
    resolution: String,
    time: String,
    quality: String,
    tag: String,
    rating: String,
    movieInfo: String
})