import {PythonShell} from 'python-shell';

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
    return ans;
  });