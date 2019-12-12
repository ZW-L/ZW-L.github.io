## Babel 核心插件和核心原理

**核心插件：**
+ `babel-core`：转译器，提供 `Babel` 转译的 `API`
+ `babel-babylon`：`Javascript` 词法解析器
+ `babel-traverse`：用于遍历 `AST`
+ `babel-generator`：根据 `AST` 生成 `Javascript` 代码

**核心原理：**
1. `Parse`：通过 `babel-babylon` 将代码解析生成 `AST`
2. `Transform`：通过 `babel-traverse` 遍历 `AST`，进行添加、更新及移除等操作
3. `Generate`：通过 `babel-generator` 将 `AST` 转换为 `Javascript` 代码


## 编写一个 Babel 插件

## 可以配置一种前端代码兼容方案，如 Polyfill




