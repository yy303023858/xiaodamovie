var mongoose = require('mongoose')

module.exports = new mongoose.Schema({
    name: String,
    cover: String,
    url: String
})