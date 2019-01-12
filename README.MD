[TOC]

# CLI: `work-cli`

-   package.json 的 bin 定义 CLI 的别名
-   `npm link` link 到全局，执行 CLI，可以用于调试。 （取消 link： `npm unlink`）

`docker run --rm -it -v $PWD:/root/cli node:10.15.0-alpine sh`
