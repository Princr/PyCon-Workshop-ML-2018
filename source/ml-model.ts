import {PythonShell} from 'python-shell';
 
exports.mlmodel = function(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) {
  let options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'controllers',
    args: ['compile',a, b, c, d, e, f, g, h]
  };
  PythonShell.run('Run_Model.py', options, function (err: string, results: string) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    var ans = results;
    console.log(ans)
  });
};




 

