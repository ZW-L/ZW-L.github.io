## 简介

+ 严格模式是 ES5 引入的，目标是对早期 Javascript 的不足进行规约，引导使用者使用新的语法
+ 在脚本第一行或函数顶部使用字符串 `use strict` 开启严格模式

## 语法规定

+ 变量必须声明后再使用
+ 不能对只读属性赋值
+ 不能删除不可删除的属性（如不能删除变量，只能删除属性 `delete global[prop]`）
+ 不能使用前缀 0 表示八进制数
+ 禁止 `this` 指向全局对象
+ 函数的参数不能有同名属性
+ `eval` 不会在它的外层作用域引入变量
+ `eval` 和 `arguments` 不能被重新赋值
+ `arguments` 不会自动反映函数参数的变化

::: tip 说明：
+ 更好的方法是尽量不要使用 `eval`
+ 在 ES6 中尽量用 `rest` 参数代替 `arguments`
:::

## 不能使用

+ 不能使用 `with` 语句
+ 不能使用 `arguments.callee` 和 `arguments.caller`
+ 不能使用 `fn.caller` 和 `fn.arguments` 获取函数调用的堆栈
+ 不能使用新增的保留字（`protected`, `static`, `interface` 等）

::: tip 说明：
+ `with` 语句虽然简便，但是使作用域链变长导致性能变差了
:::