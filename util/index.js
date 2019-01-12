const fs = require('fs');
const path = require('path');
const Table = require('cli-table');

exports.show_table = () => {
    let template = fs.readFileSync(
        path.resolve(__dirname, '../template.json'),
        'utf-8',
    );
    template = JSON.parse(template);

    const table = new Table({
        head: ['Template Name', 'Owner/Name', 'Branch'],
        style: {
            head: ['white'],
        },
    });

    Object.keys(template).forEach(name => {
        let item = template[name];
        let row = [name, item.git, item.branch];
        table.push(row);
    });
    console.log(table.toString());
};