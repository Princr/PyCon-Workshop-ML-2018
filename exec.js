var ml = require('./controllers/ml-model');
//var readline = require('readline-sync');
var Promise = require('promise');
var model_run = Promise.denodeify(ml.mlmodel)

ml.mlmodel(88, 22, 2, 0, 0, 1, 56, 56)
    .then(function(){
        var input = readline.prompt();
        var ansa = input;
        return ansa;
    });
//var input = readline.prompt();

//var ansa = input;
