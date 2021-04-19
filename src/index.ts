import * as path from "path";
import { Command } from "commander";
const program = new Command();

// special:  import package.json
const pkg = require("../package.json");
const VERSION = pkg.version;
const [, , ...args] = process.argv;
// console.log(`hello, ${args}`);
// process.env.NODE_PATH = path.resolve(__dirname, "../node_modules/");
// console.log(`process.env.NODE_PATH: => ${process.env.NODE_PATH}`);

// prettier-ignore
program.version(
    VERSION,
    "-v, --vers",
    `work-cli: it is just for work. \nversion: ${VERSION}`
);

// init
program
    .command("init")
    .alias("i")
    // .option('-f, --foo', 'enable some foo')
    .description("Generate a new project")
    .action(() => {
        require("./commands/init");
    });
// list
program
    .command("list")
    .alias("ls")
    // .option('-f, --foo', 'enable some foo')
    .description("List the templates")
    .action(() => {
        require("./commands/list");
    });

// help
program.parse(process.argv);
// Migration: if (!program.args.length)
// @ts-ignore
if (program.rawArgs.length < 3) {
    program.help();
}
