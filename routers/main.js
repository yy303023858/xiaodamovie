var express = require('express');
var Movie = require('../models/Movie');
var NewMovie = require('../models/NewMovie');
var Comments = require('../models/Comments');

var router = express.Router();
// 主页
router.get('/', (req, res, next) => {
    Movie.find().limit(300).then(function (allMovies) {
        Movie.find().limit(12).then((movies) => {
            var randomMovies = []
            for (var i = 0; i < 10; i++) {
                randomMovies.push(allMovies[Math.ceil(Math.random() * allMovies.length)]);
            }
            res.render('main/index', {
                type: 'index',
                recentMovies: movies,
                randomMovies: randomMovies
            });
        });
    });
});
router.get('/index', (req, res, next) => {
    Movie.find().limit(200).then(function (allMovies) {
        Movie.find().limit(12).then((movies) => {
            var randomMovies = []
            for (var i = 0; i < 10; i++) {
                randomMovies.push(allMovies[Math.ceil(Math.random() * allMovies.length)]);
            }
            res.render('main/index', {
                type: 'index',
                recentMovies: movies,
                randomMovies: randomMovies
            });
        });
    });
});
// 下载详情页
router.get('/download/:id', (req, res, next) => {
    Movie.findOne({
        _id: req.params.id
    }).then((data) => {
        res.render('main/download', {
            movie: data
        });
    });
});
// 更多列表页
router.get('/list', function (req, res, next) {
    var page = Number(req.query.page || 1);
    var limit = 10;
    var pages = 0;
    Movie.count().then(function (count) {
        // 计算总页数
        pages = Math.ceil(count / limit);
        // 取值不能超过pages
        page = Math.min(page, pages)
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
        // sort({id: })
        // 1升序
        // -1降序
        Movie.find().limit(limit).skip(skip).then(function (movies) {
            res.render('main/list', {
                movies: movies,
                count: count,
                pages: pages,
                limit: limit,
                page: page
            });
        });
    });
});
// 搜索列表
router.get('/search', function (req, res, next) {
    var str = req.query.name;
    var page = Number(req.query.page || 1);
    var limit = 10;
    var pages = 0;
    Movie.find({
        title: new RegExp(str)
    }).count().then(function (count) {
        // 计算总页数
        pages = Math.ceil(count / limit);
        // 取值不能超过pages
        page = Math.min(page, pages)
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
        Movie.find({
            title: new RegExp(str)
        }).limit(limit).skip(skip).then(function (movies) {
            res.render('main/list', {
                type: 'index',
                movies: movies,
                count: count,
                pages: pages,
                limit: limit,
                page: page
            });
        });
    });
});
// 动作列表页
router.get('/action', function (req, res, next) {
    var page = Number(req.query.page || 1);
    var limit = 10;
    var pages = 0;
    Movie.find({
        tag: /动作/g
    }).count().then(function (count) {
        // 计算总页数
        pages = Math.ceil(count / limit);
        // 取值不能超过pages
        page = Math.min(page, pages)
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
        Movie.find({
            tag: /动作/g
        }).limit(limit).skip(skip).then(function (movies) {
            res.render('main/list', {
                type: 'action',
                movies: movies,
                count: count,
                pages: pages,
                limit: limit,
                page: page
            });
        });
    });
});
// 喜剧列表
router.get('/comedy', function (req, res, next) {
    var page = Number(req.query.page || 1);
    var limit = 10;
    var pages = 0;
    Movie.find({
        tag: /喜剧/g
    }).count().then(function (count) {
        // 计算总页数
        pages = Math.ceil(count / limit);
        // 取值不能超过pages
        page = Math.min(page, pages)
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
        Movie.find({
            tag: /喜剧/g
        }).limit(limit).skip(skip).then(function (movies) {
            res.render('main/list', {
                type: 'comedy',
                movies: movies,
                count: count,
                pages: pages,
                limit: limit,
                page: page
            });
        });
    });
});
// 爱情列表
router.get('/affectional', function (req, res, next) {
    var page = Number(req.query.page || 1);
    var limit = 10;
    var pages = 0;
    Movie.find({
        tag: /爱情/g
    }).count().then(function (count) {
        // 计算总页数
        pages = Math.ceil(count / limit);
        // 取值不能超过pages
        page = Math.min(page, pages)
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
        Movie.find({
            tag: /爱情/g
        }).limit(limit).skip(skip).then(function (movies) {
            res.render('main/list', {
                type: 'affectional',
                movies: movies,
                count: count,
                pages: pages,
                limit: limit,
                page: page
            });
        });
    });
});
router.get('/science_fiction', function (req, res, next) {
    var page = Number(req.query.page || 1);
    var limit = 10;
    var pages = 0;
    Movie.find({
        tag: /科幻/g
    }).count().then(function (count) {
        // 计算总页数
        pages = Math.ceil(count / limit);
        // 取值不能超过pages
        page = Math.min(page, pages)
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
        Movie.find({
            tag: /科幻/g
        }).limit(limit).skip(skip).then(function (movies) {
            res.render('main/list', {
                type: 'science_fiction',
                movies: movies,
                count: count,
                pages: pages,
                limit: limit,
                page: page
            });
        });
    });
});
router.get('/dracula', function (req, res, next) {
    var page = Number(req.query.page || 1);
    var limit = 10;
    var pages = 0;
    Movie.find({
        tag: /恐怖/g
    }).count().then(function (count) {
        // 计算总页数
        pages = Math.ceil(count / limit);
        // 取值不能超过pages
        page = Math.min(page, pages)
        page = Math.max(page, 1);
        var skip = (page - 1) * limit;
        Movie.find({
            tag: /恐怖/g
        }).limit(limit).skip(skip).then(function (movies) {
            res.render('main/list', {
                type: 'dracula',
                movies: movies,
                count: count,
                pages: pages,
                limit: limit,
                page: page
            });
        });
    });
});
router.get('/comments', function (req, res, next) {
    var name = req.query.comment_name;
    var content = req.query.comment_content;
    if (name && content) {
        new Comments({
            name: name,
            content: content
        }).save().then(function () {
            Comments.find().then(function (data) {
                req.query = null,
                res.render('main/comments', {
                    type: 'comments',
                    comments: data
                });
            })
        })
    } else {
        Comments.find().then(function (data) {
            req.query = null,            
            res.render('main/comments', {
                type: 'comments',
                comments: data
            });
        });
    }
});

module.exports = router