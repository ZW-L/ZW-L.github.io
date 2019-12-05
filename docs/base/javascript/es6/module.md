## 介绍

+ 模块语法自动使用严格模式(不管有没有显示声明 `use strict`)
+ 使用 `export`/`export default` 暴露内容
+ 使用 `import` 配合 `*`/`as`/`from` 引入模块内容
+ `export` 和 `import` 能够一起使用

## 语法

+ `export default`: 默认暴露，引入时默认引入的内容

```js
// util.js
export default {
  name: 'Alice',
  age: '24',
}

// main.js
import user from 'util'

console.log(user.name, user.age) // Alice 24
```

+ `export`: 单独暴露，引入时需要使用特定的名字引入

```js
// util.js
export const hello = 'Hello World!'
export function foo() {
  console.log('foo')
}

// main.js
import { hello, foo } from 'user'

console.log(hello) // Hello World!
console.log(foo()) // foo
```

::: tip 说明：
+ `export` 暴露的内容都是固定名字的，但是可以使用 `as` 改变
```js
// util.js
export const hello = 'Hello World!'
export { hello as str }

// main.js
import { str } from 'user'

console.log(hello) // Hello World!
```
+ 或者在 `import` 时修改名字
```js
// util.js
export const hello = 'Hello World!'

// main.js
import { hello as str } from 'user'

console.log(str) // Hello World!
```
:::


+ 同时引入两种暴露的内容

```js
// util.js
export const hello = 'Hello World!'
export function foo() {
  console.log('foo')
}
export default {
  name: 'Alice',
  age: '24',
}

// main.js
import user, { hello, foo } from 'util.js'
```

::: tip 说明：
+ 可以使用 `*` 通配符配合 `as` 引入全部内容
```js
// util.js
export const hello = 'Hello World!'
export function foo() {
  console.log('foo')
}
export default {
  name: 'Alice',
  age: '24',
}

// main.js
import * as util from 'util.js'

console.log(util.default) // { user: 'Alice', age: 24 }
console.log(util.hello) // Hello World!
console.log(util.foo()) // foo
```
:::






