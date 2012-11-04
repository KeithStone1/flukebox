
/**
 * Module dependencies.
 */

var express  = require('express')
  , register =  require('./register')
  , http     = require('http')
  , path     = require('path')
  , cons     = require('consolidate');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 81);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.engine('html', cons.mustache);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.bodyParser());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.errorHandler());
});

register.routesFor(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
