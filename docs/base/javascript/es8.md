## 简介


## async/await


## Function 变动

+ 函数参数列表结尾允许逗号，主要作用是方便使用 git 进行多人协作开发时修改同一个函数减少不必要的行变更

## Object 新增方法

+ `Object.values(obj: Object): Iterator`: 返回一个由对象的值组成的 `Iterator`
+ `Object.entries(obj: Object): Iterator`: 返回一个由对象的键值数组(类似 [key, value] 的形式)组成的 `Iterator`
+ `Object.getOwnPropertyDescriptors(obj: Object): Object | Null`: 获取一个对象的所有自身属性描述符

## String 新增方法

+ `String.prototype.padStart(len: Number, padStr?: String): String`: 将指定字符串填充到原始字符串的开头
+ `String.prototype.padEnd(len: Number, padStr?: String): String`: 将指定字符串填充到原始字符串的结尾

::: tip 说明：
+ 当 len 小于原始字符串时，会将原始字符串截断
+ padStr 默认为空字符串，此时会将字符串的长度变为 len 指定的长度，不足的部分用空格代替
+ 填充的意思是会重复使用指定字符串
:::