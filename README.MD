[TOC]

# CLI: `work-cli`

## Usage (TODO)

1. Global install: `npm i -g work-cli`
2. Use the cli: `work-cli`

```SHELL
# list template
$ work-cli list

# init project and interaction
$ work-cli init
```

## Development

1.  package.json 的 bin 定义 CLI 的别名：
    ` "work-cli": "./bin/cli.js"`

2.  `npm link` link 到全局，执行 CLI，可以用于调试。 （取消 link： `npm unlink`）

3. 使用 `work-cli` 命令

## Dockerizing

便于开发可以使用Docker容器化环境：

1. 进入容器：`docker run --rm -it -w /root/cli -v $PWD:/root/cli node:10.15.3-alpine sh`
2. `npm link`
