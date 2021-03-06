// const chalk = require('chalk');
//import the greet module that is the current folder
// const greet = require('./greet');

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)
var figlet = require('figlet');

figlet.text('Hello, Xola!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
