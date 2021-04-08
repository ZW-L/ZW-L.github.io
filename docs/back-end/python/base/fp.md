---
sidebarDepth: 2
---

## 函数基础


:::: tabs
::: tab 定义和调用
```python
# 函数定义
def hello():
  print('hello world')
# 函数调用
hello()
```
:::

::: tab 返回值
+ 用于退出函数和返回指定值，缺省时函数的返回值为 `None`
```python
  def hello():
    return 'hello world'
  s = hello()
  print(s)
```
:::

::: tab 函数参数
+ `必须参数`：调用函数时传入的参数的顺序和数量要和函数定义的参数保持一致
```python
def hello(str):
  print(str)

hello('hello world')
```

+ `关键字参数`：使用关键字，可以不要求传入参数的顺序
```python
def hello(str):
  print(str)

hello(str='hello world')
```

+ `默认参数`：指定默认参数，当不传入该参数时，会使用默认的参数
```python
def hello(str='hello world'):
  print(str)

hello()
```

+ `不定长参数`：使用带星号 * 的变量名保存所有未命名的参数，没有时其为空元组
```python
def hello(*variables):
  for v in variables:
    print(v)

hello('hello', 'world')
```
:::

::: tab 变量作用域
+ 函数内部的变量拥有局部作用域，不会使用影响全局变量；**global**关键字可引用全局变量
```python
count = 0
def add1(a, b):
  count = a + b
  return count

print(add1(1, 2)) # 3
print(count) # 0
print('---------')

def add2(a, b):
  global count
  count = a + b
  return count

print(add2(2, 2)) # 4
print(count) # 4
```
:::
::::




## 函数式编程

+ 把函数作为参数传入，这样的函数称为高阶函数，函数式编程就是指这种高度抽象的编程范式


## 高阶函数

+ `接收一个函数作为参数` 或 `返回一个函数` 的函数称为高阶函数

:::: tabs
::: tab 接收函数作为参数
```py
def add(a, b, abs):
  return abs(a) + abs(b)

print(add(-2, -4, abs)) # 6
```
:::

::: tab 返回一个函数
```py
def f(a):
  def add(b):
    return a + b
  return add

add10 = f(10)
print(add10(2)) # 12
```
:::
::::



## 闭包

+ 闭包是指一个高阶函数内返回的函数引用了该高阶函数内部的变量
```py
def f(a):
  def add(b):
    return a + b  # 引用了外部函数的变量 a
  return add      # 返回一个函数

add10 = f(10)
print(add10(2))   # 12

```



## 匿名函数

+ 支持简单的 lambda(匿名函数)，使用关键字 `lambda` 声明
+ lambda 函数是函数的简写，没有 `return` 语句，冒号左边是参数，右边是返回值
+ lambda 主体是一个表达式，而不是一个代码块
+ lambda 拥有自己的命名空间，且不能访问自身参数外或全局命名空间的

```py
add = lambda a, b: a + b 
print(add(2, 3))
```


## 偏函数

+ `functools` 模块的 `partial` 方法用于创建一个偏函数，其实就是封装了函数的定义
```py
import functools

int2 = functools.partial(int, base=2)
print(int2('11111110'))   # 254
```