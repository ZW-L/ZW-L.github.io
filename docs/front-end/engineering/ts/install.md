---
sidebarDepth: 2
---


## 安装

+ 全局安装
```sh
npm install -g typescript
```

+ 查看版本
```sh
tsc -v  # Version 3.9.7
```



## 编译

### 命令行编译

+ 编译
```sh
tsc test.ts
```

+ 监听文件的修改并实时编译
```sh
tsc test.ts -w
```




### tsconfig.json

+ 用于指示 TypeScript 的编译选项和需要编译的文件列表，一般作为配置文件放置于项目根目录
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
