import * as fs from "fs";
import * as path from "path";
// @ts-ignore
import * as Table from "cli-table";

export function showTable() {
    const data = fs.readFileSync(
        path.resolve(__dirname, "../template.json"),
        "utf-8"
    );
    const template = JSON.parse(data) as Record<string, Record<string, string>>;

    const table = new Table({
        head: ["Template Name", "Owner/Name", "Branch"],
        style: {
            head: ["white"],
        },
    });

    Object.keys(template).forEach((name) => {
        let item = template[name];
        let row = [name, item.git, item.branch];
        table.push(row);
    });
    console.log(table.toString());
}
