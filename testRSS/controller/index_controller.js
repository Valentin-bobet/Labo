const parser = require('rss-parser');

exports.index = function(req, res, next) {

    parser.parseURL('http://www.lorfm.com/actualites/sport.rss', function(err, parsed) {
        console.log(typeof parsed.feed.entries);
        res.render('index', { title: 'Express', donnees : parsed });

    })
}