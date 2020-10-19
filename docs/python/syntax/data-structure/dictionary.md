## 简介

+ 键唯一，值不唯一
+ 键不可变，可以是 `Number`/`String`/`Tuple`，因此不能为列表和字典


## 内置函数

+ `cmp(dict1, dict2)`：比较
+ `len(dict)`：长度
+ `str(dict)`：转换为字符串
+ `type(variable)`：返回输入的变量类型


## 内置方法

+ `dict.clear()`：清空字典
+ `dict.copy()`：字典浅复制
+ `dict.fromkeys(seq)`：创建新字典
+ `dict.get(key, default=None)`：返回指定键的值
+ `dict.has_key(key)`：是否存在键
+ `dict.items()`：以列表返回可遍历的元组数组
+ `dict.keys()`：以列表返回所有键
+ `dict.setdefault(key, default=None)`：设置指定键的值
+ `dict.update(dict2)`：更新元素
+ `dict.values()`：以列表返回所有值