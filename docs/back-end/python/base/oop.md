
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


## 类和实例

+ class：创建对象的关键字
+ __init__：构造函数(方法)，可缺省；第一个参数为 `self`，指代实例自身
+ 使用 `people.age` 的形式为 people 实例添加更多的属性
+ 类中的函数称为方法，第一个参数一定为 `self`，用于指代当前实例

```py
class People:
  def __init__(self, name, age):
    self.name = name
    self.age = age
  
  def get_detail(self):
    print(self.name, self.age)

people = People('Alice', 22)
people.get_detail()
# Alice 22
```





## 访问控制

+ 使用双下划线 `__` 表示实例的私有属性，不允许外部访问或修改
+ 可以通过在类中定义类似 `get.__age` 或 `set.__age` 的方法来访问或修改私有属性
+ 一般约定(不是规则)使用下划线 `_` 表示可访问但不可修改的私有属性
+ 静态属性，属于类的属性，可以通过类名访问，也可以通过实例访问

```py
class People:
  love = 'china' # 静态属性

  def __init__(self, name, age):
    self.name = name
    self.__age = age
  
  def get__age(self):
    return self.__age

  def set_age(self, age):
    self.__age = age

people = People('Alice', 22)
print(people.name)  # Alice
print(people.get__age())  # 22
people.set_age(24)
print(people.get__age())  # 24
```




## 继承和多态

+ 继承
  + 实现继承：在类声明的后面指定要继承的类
  + 方法覆盖：子类声明同名的方法会覆盖父类的方法
+ 多态：子类声明同名的方法会覆盖父类的方法，用来实现各自的需求，称为多态

```py
class People:
  def say(self):
    print('a people')
  def other(self):
    print('other')

class Student(People):
  def other(self):
    print('a student')

student = Student()
student.say()  # a people
student.other()  #  a student
```




## 获取对象信息

+ type()：返回一个变量或对象的类型，或返回实例的构造类
+ isinstance()：返回布尔值，判断一个实例或对象是否继承自另一个对象
+ dir()：返回列表，包含了一个对象的所有属性和方法




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



## 其他

### @property

### 多重继承

### 定制类

### 枚举类

### 元类