var winston   = require('winston');
var morgan    = require('morgan');

// TODO add npm module 'winston-filerotatedate' so we don't blow up

var logger = new winston.Logger({
  transports:[
    new winston.transports.Console({
      level: 'verbose',
      handleExceptions: false,
      colorize: true
    })
  ],
  colors:{
    //info: 'blue'
  }
});

logger.stream = {
  write: function(message, encoding){
    logger.info(message);
  }
};

logger.express = morgan('combined', { 'stream': logger.stream });

module.exports = logger;
