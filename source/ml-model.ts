import {PythonShell} from 'python-shell';
 
let options = {
  mode: 'text',
  pythonPath: '',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: '',
  args: ['value1', 'value2', 'value3', 'value4', 'value5', 'value6','value7', 'value8']
};
 
PythonShell.run('Concrete_Comp_Test_Beta2.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});