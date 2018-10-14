"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var python_shell_1 = require("python-shell");
var options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'],
    scriptPath: 'controllers',
    args: ['value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7', 'value8']
};
python_shell_1.PythonShell.run('Concrete_Comp_Test_Beta2.py', options, function (err, results) {
    if (err)
        throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});
module.exports = python_shell_1.PythonShell;
