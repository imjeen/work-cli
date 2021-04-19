import { exec, spawn } from "child_process";
import { prompt } from "inquirer";
// @ts-ignore
import * as DOWNLOAD from "download-git-repo";
import * as ora from "ora";
import * as chalk from "chalk";
import * as TEMPLATE from "../template.json";

const TEMPLATE_NAMES = Object.keys(TEMPLATE); // 默认模版列表

let question_list = [
    // project
    {
        type: "input",
        name: "project",
        default: "template",
        message: "Project Name",
        filter(val: string) {
            return val.trim();
        },
        validate(val: string) {
            const validate = val.trim().split(" ").length === 1;
            return validate || "Project name is not allowed to have spaces ";
        },
    },
    // template
    {
        type: "list",
        name: "template",
        message: "Project template",
        choices: TEMPLATE_NAMES,
        default: TEMPLATE_NAMES[0],
        validate(val: string) {
            return true;
        },
        transformer(val: string) {
            return val;
        },
    },
    // description
    {
        type: "input",
        name: "description",
        message: "Project description",
        default: "a project",
        validate(val: string) {
            return true;
        },
        transformer(val: string) {
            return val;
        },
    },
    // author
    {
        type: "input",
        name: "author",
        message: "Author",
        default: "project author",
        validate(val: string) {
            return true;
        },
        transformer(val: string) {
            return val;
        },
    },
];

prompt(question_list)
    .then((answer) => {
        console.log(JSON.stringify(answer, null, 2));
        // @ts-ignore
        let tpl = TEMPLATE[answer.template];
        let git = `${tpl.git}#${tpl.branch || "master"}`;
        console.log("github: ", git);

        return {
            ...answer,
            git,
        };
    })
    .then((data) => {
        const { project: dirname, git } = data;
        const spinner = ora("Downloading please wait...");
        return new Promise((resolve, reject) => {
            spinner.start();
            DOWNLOAD(git, `./${dirname}`, {}, (err: any) => {
                spinner.stop();
                if (err) {
                    console.log(chalk.red(err));
                    process.exit();
                    // return reject(err);
                }
                resolve({ ...data, dirname });
            });
        });
    })
    .then(({ dirname }: Record<string, string>) => {
        // TODO `cd ${dirname}`
        console.log(`cd ./${dirname}`);
        // let last = exec(`cd ./${dirname}`);
    });
