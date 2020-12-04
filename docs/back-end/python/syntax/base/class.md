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