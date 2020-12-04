## 简介

+ 把函数作为参数传入，这样的函数称为高阶函数，函数式编程就是指这种高度抽象的编程范式。



## 高阶函数

&emsp;&emsp;`接收一个函数作为参数` 或 `返回一个函数` 的函数称为高阶函数。

**接收函数作为参数：**
```py
def add(a, b, abs):
  return abs(a) + abs(b)

print(add(-2, -4, abs))
# 6
```

**返回一个函数：**
```py
def f(a):
  def add(b):
    return a + b
  return add

add10 = f(10)
print(add10(2))
# 12
```



## 闭包

&emsp;&emsp;闭包是指一个高阶函数内返回的函数引用了该高阶函数内部的变量：
**返回一个函数：**
```py
def f(a):
  def add(b):
    return a + b  # 引用了外部函数的变量 a
  return add

add10 = f(10)
print(add10(2))
# 12
```



## 匿名函数

&emsp;&emsp;python 支持简单的 `lambda`(匿名函数)，使用关键字 `lambda` 声明:
```py
add = lambda a, b: a + b 
print(add(2, 3))
```

注意：
+ lambda 函数是函数的简写，没有 return 语句，冒号左边是参数，右边是返回值



## 装饰器

&emsp;&emsp;在 `OOP`(面向对象)编程中有一个装饰器模式，它需要通过继承和组合来实现。python 的装饰器模式，除了用类实现，还能用函数实现。而且，装饰器能够增强函数的功能，只是定义比较复杂。

**使用装饰器：**
```py
import time

def log(func):
  def wrapper():
    print('begin call')
    return func()
  return wrapper

@log
def now():
  print(time.time())

now()
# begin call
# 1568118346.7405224
```

**传入参数的装饰器：**
```py
import time

def log(text):
  def decorator(func):
    def wrapper():
      print(text)
      return func()
    return wrapper
  return decorator

@log('add text')
def now():
  print(time.time())

now()
# add text
# 1568118437.2600157
```



## 偏函数

&emsp;&emsp;`functools` 模块的 `partial` 方法用于创建一个偏函数，其实就是封装了函数的定义：
```py
import functools

int2 = functools.partial(int, base=2)
print(int2('11111110'))
# 254
```