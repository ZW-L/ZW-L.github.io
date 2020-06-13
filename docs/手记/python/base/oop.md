
## 面向对象简介

### 类和对象

类：用于描述具有相同属性和方法的对象的集合，其定义了该集合中所有对象共有的属性和方法。
对象：对象是类的实例，包括成员变量和方法。

### 类的相关概念

成员变量：

+ 类变量：（类似Java的静态变量），**可以通过类名直接调用，也可以通过实例化的对象调用**
+ 实例变量：定义在构造方法中的变量，只作用于当前实例的对象，**实例化后才能调用**
+ 访问权限：私有变量('__'变量前双下划线)，**不允许外部访问**

方法：

+ 构造方法：方法名为 `__init__(self)`，传入第一个参数 self 表示当前对象实例，用于对象初始化
+ 实例方法：在类内部定义的函数，形式为`say(self, var1, ...)`，传入第一个参数 self 表示当前对象实例
+ 普通方法：（可以用，貌似意义不大），在类内部定义的函数，形式为`say(var1, ...)`，**只能通过类名直接调用**
+ 访问权限：私有方法('__'变量前双下划线)，**不允许外部访问**

继承：

+ 继承语法：`class Dog(Animal)`
+ 多继承：支持同时有多个基类 `class Dog(Animal, Pet)`
+ 方法重写（覆盖）：在派生类中定义与基类同名的方法

实例化：

+ 创建类的实例，产生一个具体对象 `afu = Dog(4, 'afu', 'wang wang!')`，**没有 `new` 关键字**



## 基础 Demo

### 类定义

```python
class Dog:
  # 类变量
  leg = 4
  # 构造方法
  def __init__(self, s):
    self.bark = s
  # 实例方法
  def yell(self):
    return self.bark
  # 普通方法
  def say():
    return 'wang wang wang!'
```

### 类属性的直接引用

```python
class Dog:
  leg = 4
  # 构造方法
  def __init__(self, s):
    self.bark = s
  def yell(self):
    return self.bark
  def say():
    return 'wang wang wang!'
print(Dog.leg)      # 4
print(Dog.say())    # wang wang wang!
print(Dog.yell())   # error
```

### 类实例化

```python
class Dog:
  leg = 4
  def __init__(self, s):
    # 实例变量
    self.bark = s
  def yell(self):
    return self.bark

d = Dog('wang!')
print(d.bark)       # wang!
print(d.yell())     # wang!
```

### 私有属性/方法

```python
class Dog:
  __name = ''
  def __init__(self, name):
    self.__name = name
  def __getName(self):
    print(self.__name)
  def getName(self):
    print(self.__name)

d = Dog('afu')
d.getName()         # 'afu'
d.__getName()       # error  
print(Dog.__name)   # error
```

### 继承

```python
class Animal:
  def desc(self):
    print('An animal.')
  def yell(self):
    print('bling bling.')

class Dog(Animal):
  # 方法重写/覆盖
  def yell(self):
    print('wang wang!')

d = Dog()
d.desc()        # An animal.
d.yell()        # wang wang!
```

## 类的专有方法

+ `__init__`: 构造函数，创建对象时调用
+ `__del__`: 析构函数，释放对象时使用
+ `__repr__/__repr__`: 打印，转换
+ `__setitem__`: 按照索引赋值
+ `__getitem__`: 按照索引获取值
+ `__len__`: 获得长度
+ `__cmp__`: 比较运算
+ `__call__`: 函数调用
+ `__add__`: 加
+ `__sub__`: 减
+ `__mul__`: 乘
+ `__div__`: 除
+ `__mod__`: 求余
+ `__pow__`: 乘方

## 运算符重载