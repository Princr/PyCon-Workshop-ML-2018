var ml = require('./controllers/ml-model');
var readline = require('readline-sync');

let x = () =>{
    var input = readline.prompt();
    var ansa = input;
    console.log(ansa);
};

let y = (cb) => {
    if (typeof cb == "function"){
        ml.mlmodel(88, 22, 2, 0, 0, 1, 56, 56);
        cb();
    } 
};

y(x);