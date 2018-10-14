import {PythonShell} from 'python-shell';
 
let options = {
  mode: 'text',
  pythonPath: '',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: 'controllers',
  args: ['value1', 'value2', 'value3', 'value4', 'value5', 'value6','value7', 'value8']
};
 
PythonShell.run('Run_Model.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});

module.exports = PythonShell