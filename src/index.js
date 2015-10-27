var express   = require('express');
var log       = require('./logger');
var conf      = require('./conf');

var app = express();

app.use(log.express);

// static file serving
app.use(express.static('public'));

app.on('error', function(exc){
  log.error(exc);
});
app.on('uncaughtException', function(exc){
  log.error(exc);
});
app.listen( conf.localPort, function() {
  log.info('The server is running on ' + conf.localPort);
});
