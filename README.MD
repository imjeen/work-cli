[TOC]

# CLI: `work-cli`

[![Github][github-image]][github-url] [![TypeScript][ts-image]][ts-url]

[github-image]: https://badges.aleen42.com/src/github.svg
[github-url]: https://github.com/imjeen/work-cli
[ts-image]: https://badges.aleen42.com/src/typescript.svg
[ts-url]: https://www.typescriptlang.org/

## Usage (TODO)

1. `npx work-cli <YOUR_PRO_NAME>` (recommend) or Global install: `npm i -g work-cli`
2. Use the cli: `work-cli`

```SHELL
# list template
$ work-cli list

# init project and interaction
$ work-cli init

# create from user inputting data
$ work-cli create
```

## Development

1.  package.json 的 bin 定义 CLI 的别名：
    ` "work-cli": "./bin/cli.js"`

2.  `yarn link` link 到全局，执行 CLI，可以用于调试。 （取消 link： `yarn unlink`）

3.  使用 `work-cli` 命令

## Dockerizing

便于开发可以使用 Docker 容器化环境：

1. 进入容器：`docker run --rm -it -w /root/cli -v $PWD:/root/cli node:12.13.1-alpine sh`
2. `yarn link`
