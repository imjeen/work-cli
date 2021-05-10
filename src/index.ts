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

// create
program
    .command("create")
    // .alias("")
    // .option('-f, --foo', 'enable some foo')
    .description(
        `create project from a git repository. 
        The shorthand repository string to download the repository from:
            1. GitHub - github:owner/name or simply owner/name
            2. GitLab - gitlab:owner/name or gitlab:custom.com:owner/name
            3. Bitbucket - bitbucket:owner/name
        `
    )
    .action(() => {
        require("./commands/create");
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
