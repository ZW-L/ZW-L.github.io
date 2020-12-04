## 简介

+ `list` 列表，相当于其他语言的数组，是一种有序集合
+ `tuple` 元组，和列表类似，但是它一经初始化便不能被修改，相当于一个常量列表
+ 两者都有相同的操作符、切片，以及部分相同的函数
+ 区分语法：
```py
a = [1, 2, 3] # 列表
b = (1, 2, 3) # 元组
```
+ 当元组只有一个元素时，需要保留一个逗号，否则会被忽略元组的声明
```py
a = (1)
b = (1,)

print(a)  # 1
print(b)  # (1,)
```




## 操作符/运算符

+ `del`：从列表中删值
+ `list[index]`: 读取一个指定索引的元素，可以为负数，-1 为倒数第一个元素
+ `list1 + list2`: 连接两个列表
+ `list * n`: 将列表的元素重复指定次数
+ `el in list`: 判断元素是否在列表中
+ `for x in list`: 在 for 循环中迭代

```py
a = [1, 2, 3]
b = [4, 5]

print(a + b)  # [1, 2, 3, 4, 5]
print(a * 2)  # [1, 2, 3, 1, 2, 3]
print(1 in a) # True
del a[0]
print(a)      # [2, 3]

for i in a:
  print(i)
# 2
# 3
```


## 多重赋值

+ python 提供一种多重赋值的方式，但它要求赋值左侧的变量个数等于列表/元组的长度：
```py
l = [1, 2, 3]
a, b, c = l
print(a, b, c)  # (1, 2, 3)
```



## 切片

+ `list[:]`：读取所有元素，相当于 `list[0, len(list)]`，包括最后一个元素
+ `list[a:]`: 从指定下标读取至最后，相当于 `list[a, len(list)]`，包括最后一个元素
+ `list[:b]`：读取 [0, b)，不包括 b，相当于 `list[0, b]`
+ `list[a:b]`: 读取 [a, b)，不包括 b

```py
a = [1, 2, 3]

print(a[:])   # [1, 2, 3]
print(a[1:])  # [2, 3]
print(a[:1])  # [1]
print(a[1:2]) # [2]
```

+ 也可以使用负数的索引
```py
a = [1, 2, 3]

print(a[0:-1])  # [1, 2]
```



## 函数

+ `len(list)`: 返回列表/元组的长度
+ `max(list)`: 返回列表/元组的最大值
+ `min(list)`: 返回列表/元组的最小值
+ `cmp(list1, list2)`: 比较两个列表/元组包含的元素是否完全相同
+ `list(seq)`: 将字符串/元组转换为列表
+ `tuple(seq)`: 将字符串/列表转为元组



## 方法

以下方法仅适用于列表（因为元组不可变）：
+ `list.count(e)`: 计算元素出现的次数
+ `list.index(e)`: 返回第一个匹配的元素的索引
+ `list.append(e)`: 在末尾添加一个元素
+ `list.extend(seq)`: 在末尾扩展一组元素
+ `list.insert(index, e)`: 在指定位置插入元素
+ `list.pop(index=list[-1])`: 删除并返回一个元素，默认删除最后一个元素
+ `list.remove(e)`: 移除匹配的第一个元素
+ `list.reverse()`: 反转列表
+ `list.sort([func])`: 排序

```py
a = [1, 2, 3]

a.append(1)
print(a)    # [1, 2, 3, 1]

a.extend([1, 2])
print(a)    # [1, 2, 3, 1, 1, 2]

a.pop()
print(a)    # [1, 2, 3, 1, 1]

a.remove(1)
print(a)    # [2, 3, 1, 1]

a.insert(0, 1)
print(a)    # [1, 2, 3, 1, 1]

print(a.count(1)) # 3
print(a.index(2)) # 1

a.sort()
print(a)    # [1, 1, 1, 2, 3]

a.reverse()
print(a)    # [3, 2, 1, 1, 1]
```