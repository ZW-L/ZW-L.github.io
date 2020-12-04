## 简介

+ `list`、`tuple`、`dictionary`、`set`、`str`、`generator` 都可以被 `for...in` 遍历，称之为可迭代对象：`Iterable`
+ 而 generator 是迭代器(Iterator)对象，其他也可以转化为 Iterator 对象
+ 可以使用 `isinstance()` 判断一个对象是否是 Iterator 对象
+ `iter(s)`：将可迭代对象 s 变成迭代器对象 Iterator