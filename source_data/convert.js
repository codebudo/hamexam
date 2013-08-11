var tech = require('./technician.js');
var questions = tech.split('&'); // for tech, general and extra
//var questions = tech.split('!'); // for commercial and canadian
var q_arr = [];

questions.forEach(function(question){
  //console.log( q );
  var info = question.split('|');
  //console.log( info);
  var q = {};
  q.num = parseInt(info[0])-1;
  q.sample = info[1]+info[2]+info[3]+info[4];
  q.correct = info[5];
  q.question = info[6];
  q.answers = {};
  q.answers.a = info[7];
  q.answers.b = info[8];
  q.answers.c = info[9];
  q.answers.d = info[10];
  //q.debug = question;

  //console.log( q );
  if( q.num > -1 )
    q_arr.push(q);
});

console.log( JSON.stringify(q_arr) );

//console.log( tech );
