## 装饰器

+ 在 `OOP`(面向对象)编程中有一个装饰器模式，它需要通过继承和组合来实现
+ python 的装饰器模式，除了用类实现，还能用函数实现
+ 装饰器能够增强函数的功能，只是定义比较复杂

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