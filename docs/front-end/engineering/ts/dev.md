## 安装

+ 全局安装：安装可以使用 `tsc` 命令编译文件
```sh
$ npm install -g typescript
$ tsc -v  # Version 3.9.7

# 编译单个文件
$ tsc test.ts

# 监听修改并实时编译
$ tsc test.ts -w
```

+ 项目中安装：
```sh
$ yarn add -D typescript

# 一般开发都使用 webpack 构建，因此还需安装配置 ts-loader
$ yarn add -D ts-loader
```

+ 安装 `@types`：其实就是各个框架/库提供的 `.d.ts` 文件，一般使用 ts 编写的库都会提供 `.d.ts` 的 types 声明文件，或者在 [typescriptlang](https://www.typescriptlang.org/dt/search?search=) 查找是否有对应的 types 安装
```sh
$ yarn add -D @types/node
$ yarn add -D @types/webpack
$ yarn add -D @types/lodash
# ...
```



## tsconfig.json

+ 指示编译选项和需要编译的文件列表，一般作为配置文件放置于项目根目录
+ 字段说明：
  + `extends`：指定需要继承的配置文件
  + `compileOnSave`：告知 IDE 在保存文件时重新编译
  + `compilerOptions`：[编译选项列表](https://typescript.bootcss.com/compiler-options.html)，缺省时会使用默认的编译选项
  + `files`：需要编译的 ts 文件列表
  + `include`：匹配文件列表
  + `exclude`：排除文件列表

::: tip include/exclude 支持的 glob 通配符
+ `*`：匹配任意个字符（不包括目录分隔符）
+ `?`：匹配一个字符（不包括目录分隔符）
+ `**/`：递归匹配任意子目录
:::

::: warning 注意
+ `files` 和 `include` 同时使用时，会合并两者
+ `files` 的优先级高于 `exclude`，即 `files` 内的文件不能被排除
+ `exclude` 默认会排除一些目录：`node_module`, `bower_components`, `jspm_packages`, `<outDir>`
+ 命令行上指定的编译选项优先级高于 tsconfig.json 设置相应选项
:::


+ 使用 `files` 指定需要编译的文件列表
```json
{
  "compileOnSave": true,    // 保存时重新编译
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  },
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "emitter.ts",
    "program.ts",
    "commandLineParser.ts",
    "tsc.ts",
    "diagnosticInformationMap.generated.ts"
  ]
}
```

+ 使用 `include`/`exclude` 匹配/排除文件
```json
{
  "compileOnSave": true,    // 保存时重新编译
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "outFile": "../../built/local/tsc.js",
    "sourceMap": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```



## 配置 VS Code

+ 直接运行 `.ts` 脚本
```sh
# 1. 搜索并安装 Code Runner 插件
# 2. 全局安装 ts-node
$ npm i ts-node -g
# 3. 在目标 ts 文件中，右键选择运行即可
```



## .d.ts

+ 使用第三方库时我们可以使用现成的 `.d.ts`，但是当我们发布相关库时，就要自己编写 `.d.ts` 文件
