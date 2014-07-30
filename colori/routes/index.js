
/*
 * GET home page.
 */

exports.index = function (req, res, next) {
    
  res.render('index', { title: 'Colori Kitchen' });
};

exports.menu = function (req, res) {
    res.render('index', {});
};
exports.catering = function (req, res){
    res.render('index', {});
};
exports.gallery = function (req, res){
    res.render('index', {});
};
exports.reserve = function (req, res){
    res.render('index', {});
};
exports.luigi = function (req, res){
    res.render('index', {});
};
exports.contact = function (req, res){
    res.render('index', {});
};

