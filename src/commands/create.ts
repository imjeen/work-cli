import { exec, spawn } from "child_process";
import * as path from "path";
import { prompt } from "inquirer";
import gitly, { download } from "gitly";
import * as ora from "ora";
import * as chalk from "chalk";

const question_list = [
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
    // URL
    {
        type: "input",
        name: "url",
        default: "",
        message: "Git URL Address, like: gitlab:owner/name or https://gitlab.com/owner/name",
        filter(val: string) {
            return val.trim();
        },
        validate(val: string) {
            const validate = val.trim().split(" ").length === 1;
            return validate || "URL is not allowed to have spaces ";
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

prompt(question_list).then(async (answer: Record<string, string>) => {
    console.log(JSON.stringify(answer, null, 2));
    const { project: dirname, url } = answer;
    const destination = path.resolve(process.cwd(), `./${dirname}`);

    console.log(`destination`, destination);

    const spinner = ora("Downloading please wait...");
    try {
        spinner.start();
        // @ts-ignore
        // const res = await download(url, {
        //     temp: path.join(process.cwd(), "output", "fetch", ".gitcopy"),
        // });

        const res = await gitly(url, destination, {});
        console.log(`res`, res);

        spinner.stop();
    } catch (error) {
        console.log(`error`, error);
    }
});
