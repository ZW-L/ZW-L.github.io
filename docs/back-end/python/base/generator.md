## 简介

+ generator 生成器，能用于生成迭代器(Iterator)对象，本质上是函数，但是在内部能够使用 `yield` 控制函数的暂停/执行
+ 使用 `next(iter_func)` 获取每一步 `yield` 返回的值

```py
def func(arr):
  for i in arr:
    yield i
  
my_iter = func([1, 2, 3])
print(next(my_iter))  # 1
print(next(my_iter))  # 2
print(next(my_iter))  # 3
print(next(my_iter))  # StopIteration
```