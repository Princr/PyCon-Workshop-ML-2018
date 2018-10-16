"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var python_shell_1 = require("python-shell");
var options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'],
    scriptPath: 'controllers',
    args: ['compile', a, b, c, d, e, f, g, h]
};
python_shell_1.PythonShell.run('Run_Model.py', options, function (err, results) {
    if (err)
        throw err;
    // results is an array consisting of messages collected during execution
    var ans = results;
    return ans;
});
