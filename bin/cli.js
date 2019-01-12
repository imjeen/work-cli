#!/usr/bin/env node
'use strict';
// chmod +x cli.js           # Make the file executable
const path = require('path');
const program = require('commander');
const pack = require('../package.json');
// process.argv = ['node', 'yourscript.js', ...]
const [, , ...args] = process.argv;
// console.log(`hello, ${args}`);
process.env.NODE_PATH = path.resolve(__dirname, '../node_modules/');
// console.log(`process.env.NODE_PATH: => ${process.env.NODE_PATH}`);

program.version(pack.version);

// init
program
    .command('init')
    // .option('-f, --foo', 'enable some foo')
    .description('Generate a new project')
    .alias('i')
    .action(() => {
        require('../commands/init');
    });
// list
program
    .command('list')
    // .option('-f, --foo', 'enable some foo')
    .description('List the templates')
    .alias('l')
    .action(() => {
        require('../commands/list');
    });

// help
program.parse(process.argv);
if (!program.args.length) {
    program.help();
}
