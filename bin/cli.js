#!/usr/bin/env node
"use strict";
// chmod +x cli.js           # Make the file executable
const path = require("path");
const program = require("commander");
const pack = require("../package.json");
// process.argv = ['node', 'yourscript.js', ...]
const [, , ...args] = process.argv;
// console.log(`hello, ${args}`);
process.env.NODE_PATH = path.resolve(__dirname, "../node_modules/");
// console.log(`process.env.NODE_PATH: => ${process.env.NODE_PATH}`);

// prettier-ignore
program
    .version(pack.version)
    .description(`work-cli: it is just for work. \nversion: ${pack.version}`);

// init
program
    .command("init")
    .alias("i")
    // .option('-f, --foo', 'enable some foo')
    .description("Generate a new project")
    .action(() => {
        require("../commands/init");
    });
// list
program
    .command("list")
    .alias("ls")
    // .option('-f, --foo', 'enable some foo')
    .description("List the templates")
    .action(() => {
        require("../commands/list");
    });

// help
program.parse(process.argv);
// Migration: if (!program.args.length) 
if (program.rawArgs.length < 3) {
    program.help();
}
