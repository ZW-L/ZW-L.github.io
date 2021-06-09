## 变量

+ 使用英语，而不是其他语言
```js
/* Bad */
const primerNombre = 'Gustavo'
const amigos = ['Kate', 'John']

/* Good */
const firstName = 'Gustavo'
const friends = ['Kate', 'John']
```

+ 使用统一的多单词连接模式，如驼峰命名（camelCase），帕斯卡命名（PascalCase），蛇形命名（snake_case）三选一，并始终统一：
```js
/* Bad */
const page_count = 5
const shouldUpdate = true

/* Good */
const pageCount = 5
const shouldUpdate = true

/* Good as well */
const page_count = 5
const should_update = true
```

+ SID 原则
  + Short
  + Intuitive
  + Descriptive
```js
/* Bad */
const a = 5 // "a" could mean anything
const isPaginatable = a > 10 // "Paginatable" sounds extremely unnatural
const shouldPaginatize = a > 10 // Made up verbs are so much fun!

/* Good */
const postCount = 5
const hasPagination = postCount > 10
const shouldPaginate = postCount > 10 // alternatively
```



## 函数

+ A/HC/LC 模式

|Name|Prefix|Action(A)|High context(HC)|Low context(LC)|
|-|-|-|-|-|
|getUser||get|User||
|getUserMessages||get|User|Message|
|handleClickOutside||handle|Click||Outside|
|shouldDisplayMessage|should|Display|Message||