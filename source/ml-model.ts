import {PythonShell} from 'python-shell';
 

exports.mlmodel = function(a, b, c, d, e, f, g, h) {
  let options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'controllers',
    args: ['compile',a, b, c, d, e, f, g, h]
  };
  
  PythonShell.run('Run_Model.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    return( results);
  });
};
 

