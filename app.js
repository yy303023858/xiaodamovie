var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var swig = require('swig');
var Movie = require('./models/Movie');

var app = express();
var port = 3000;

app.use('/public', express.static(__dirname + '/public'));

app.engine('html', swig.renderFile);

app.set('views', './views');

app.set('view engine', 'html');

swig.setDefaults({
    cache: false
});

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/', require('./routers/main'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://movieuser:303023858@localhost:27017/movie', (err) => {
    if (err) {
        console.log('mongodb connect fail');
    } else {
        console.log('mongodb connect success');
        app.listen(port)
    }
});

// let count = 0;
// let movieData = require('./movie.json');

// for (item of movieData) {
//     if (/站长推荐/g.test(item.title)) {
//         item.date = item.title.split('][')[1];
//         item.title = item.title.split('][')[2];
//     }else{
//         item.date = item.title.split('][')[0];
//         item.title = item.title.split('][')[1];
//     }
//     if (/[0-9]{4}/.test(item.date)) {
//         item.date = item.date.match(/[0-9]{4}/)
//     }
//     item.quality = item.quality.substring(7);
//     item.rating = item.rating.substring(5);
//     new Movie(item).save((err) => {
//         count++
//         console.log(count, ' save status', err ? 'failed' : 'success');
//     })
// }