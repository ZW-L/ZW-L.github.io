---
sidebarDepth: 2
---

## ESLint

+ [ESLint](https://eslint.bootcss.com/) 是 [Nicholas C.Zakas](https://humanwhocodes.com/) 创建的一个 JavaScript/JSX 代码 Lint 工具
+ ESLint 是插件化的，允许使用插件来组装符合团队的代码 Lint 规范


### 快速开始

+ 在项目安装 `ESLint`
```sh
$ yarn add eslint -D
```

+ 在项目根目录创建 `.eslintrc.js` 配置文件：
```js
module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  rules: {
    "no-tabs": "off",
    semi: ["error", "always"]   // 也可以是 [2, "always"]
  }
};
```

::: tip .eslintrc 构成：
+ `env`：预定义环境变量，若 'es6' 选项缺省(或设置为 false)，则有关 'es6' 的语法都会报错
+ `extends`：扩展/继承规则
+ `plugins`：需要使用的规则
+ `parser`：
+ `parserOptions`：
+ `rules`：设置规则（会覆盖插件的规则），每条规则为一个键值对；其中键为一个规则名，查看 [所有规则](https://eslint.bootcss.com/docs/rules/)，值是字符串或数组：
  + 字符串：`off`(0, 关闭规则)、`warn`(1, 提醒)、`error`(2, 错误)
  + 数组：
:::



### 继承规则

+ ESLint 允许引入使用他人的配置，只需要安装相应的插件并在 `.eslintrc.js` 中配置即可
+ 安装相关包
```sh
# 不要忘记安装 eslint
$ yarn add -D eslint
# 安装 airbnb 代码规范，后面四个插件都要安装，它们为前者服务
$ yarn add -D eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

+ 在 `.eslintrc.js` 中配置 `extends`：
```js
module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: "airbnb",  // 指定继承的配置
  rules: {
    "semi": "off"     // 覆盖配置
  }
};
```

::: tip 备注：
+ 其他规则的安装也类似，具体查看官方的 README 即可，如 standard 代码规范依赖几个包：
```sh
$ yarn add -D eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```
:::


### 集成 VS Code

+ VS Code：搜索安装 `ESLint` 插件，并重启编辑器，若项目已配置好 `ESLint`：在 VS Code 中，将鼠标移动到错误/提醒的地方，会显示 `Quick fix` 蓝色小字，点击打开选项，可以选择自动修改发生错误的地方
+ 在 `setting.json` 中添加一些配置：
```json
// 保存代码时根据 ESLint 规则自动 fix 代码
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true // 每当其他插件触发 ESLint 校验时即格式化
},
// 触发 ESLint 校验的文件类型
"eslint.validate": [
  "javascript",
  "typescript"    // 监听 .ts 文件
],
```




## Prettier

+ [Prettier](https://prettier.io/) 是一个代码格式化工具，支持很多语言的格式化，其遵循最少配置原则


### 项目配置

+ ESLint 集成了 `prettier/prettier` 包，因此直接在根目录创建 `.prettierrc.js` 配置文件即可
+ 其常用配置项很少，如：
```js
module.exports = {
  "printWidth": 100,        // 一行的字符数，如果超过会进行换行，默认为 80
  "singleQuote": false,     // 是否使用单引号
  "useTabs": false,         // 是否使用 tab 缩进
  "tabWidth": 2,            // tab 代表的空格数
  "semi": true,             // 行位是否使用分号
  "trailingComma": "none",  // 是否使用尾逗号，可选值 "<none|es5|all>"
  "bracketSpacing": true,   // 为花括号两侧添加空格
  "parser": "babylon",      // 代码的解析引擎，默认 babylon（与 babel 相同）
  "jsxBracketSameLine": false
};
```

::: tip 备注：
+ ESLint 和 Prettier 会有部分配置冲突（如单引号、分号等），在处理配置冲突时，推荐：`对于引起冲突的配置项保持一致`，即二选一：
  + 在 ESLint 中关闭该规则，由 Prettier 接管（推荐）
  + Prettier 的配置跟随 ESLint
:::



### 集成 VS Code

+ 搜索并安装插件：`Prettier - Code formatter`
+ 在 `setting.json` 添加格式化规则，其规则与项目配置的一致
```json
/* prettier */
"prettier.printWidth": 80,        // 每行代码的最大字符数
"prettier.semi": true,            // 行尾分号
"prettier.singleQuote": true,     // 字符串单引号
"prettier.trailingComma": "es5",  // 尾逗号，<none|es5|all>
"prettier.tabWidth": 2,           // tab 代表的空格数
"prettier.useTabs": false,        // 使用 tab 进行缩进
"prettier.arrowParens": "avoid",  // 箭头函数括号，<always|avoid>
"prettier.bracketSpacing": true,  // 是否为对象括号内侧添加空格
"prettier.quoteProps": "as-needed",       // 对象属性添加引号，<as-needed|consistent|preserve>
"prettier.endOfLine": "lf",               // 换行符，<lf|crlf|cr|auto>
"prettier.jsxSingleQuote": true,          // 在 JSX 中是否使用单引号
"prettier.jsxBracketSameLine": false,     // 在 JSX 中是否将 '>' 放在下一行
"prettier.vueIndentScriptAndStyle": false,
```
+ 使用快捷键 `Option Shift F` 格式化代码（或通过 VS Code 的控制面板选择）




## 使用两者

区分两者：
+ ESLint：代码 Lint 工具
+ Prettier：代码格式化工具

也就是说：
+ 使用 ESLint 规范团队的代码，使代码更易读（准确来说是对于团队来说更易读）
+ 使用 Prettier 作为代码格式化工具，它能一键 format 代码为约定的格式

::: tip 备注：
+ 需要注意的是，使用 ESLint 和 Prettier 都要在项目中安装并配置，编辑器的插件只是给你提供更加便捷的操作，它并不会入侵你的项目（不要指望编辑器插件为你配置好项目）
:::