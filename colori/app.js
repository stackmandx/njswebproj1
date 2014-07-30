
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine("dot", require("dot-emc").init({app: app, fileExtension:"dot"}).__express);
app.set("view engine", "dot");
//app.use(express.favicon(path.join(__dirname, '/icon.ico')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));
app.use("/public",express.static(path.join(__dirname, 'public')));
//"symlink" to dot in node_modules
app.use("/public/js/dot",express.static(path.join(__dirname,'node_modules/dot-emc/node_modules/dot/')));

require("./node_modules/dot-emc/node_modules/dot").templateSettings.strip =false;

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.all('/*', routes.index);
app.all('/index', routes.index);
app.all('/menu', routes.menu);
app.all('/catering', routes.catering);
app.all('/gallery', routes.gallery);
app.all('/reservations', routes.reserve);
app.all('/luigi', routes.luigi);
app.all('/contact', routes.contact);
app.error(function(err, req, res, next){
    if (err instanceof NotFound) {
        res.render('404');
    } else {
        next(err);
    }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
