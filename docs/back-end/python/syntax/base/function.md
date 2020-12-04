## 函数定义

+ 使用 `def` 关键字声明一个函数：
```py
def say(s):
  return 'Hello ' + s
```

::: tip 说明
+ 使用 `return` 语句返回值，否则默认返回 `None`
+ 可以返回多个值，其实是返回一个元组(`tuple`)
:::



## 函数调用

+ 直接使用函数名和传递参数来调用函数：
```py
def say(s):
  return 'Hello ' + s

print(say('Anna'))
# 'Hello Anna'
```



## 函数参数

+ **必须参数**： 不能缺省
```py
def say(name):
  return 'My name is ' + name + '.'

print(say('Anna'))
# 'My name is Anna.'
```

+ **默认参数**：可缺省的传入参数，需要按照顺序传入，并且默认参数不能在前面，而且**不要使用可变对象作为默认参数**
```py
def say(name, s = 'Hello '):
  return s + name

print(say('Anna'))
# 'Hello Anna'
```

+ **不定长参数**：`*args`，args 元组存储了剩下的参数；也可以用 `*` 来展开列表或元组，将它们传入函数
```py
def say(*names):
  hello = 'Hello '
  for i in names:
    hello += i + ' '
  return hello

print(say('Anna', 'Alice'))
# Hello Anna Alice 
```

+ **关键字参数**：`**dict`，dict 字典存储参数，可以不按顺序传入；也可以用 `**` 来展开字典，将它们传入函数
```py
def say(city, **people):
  print(city, people)

say('shenzhen', name='Alice', age=22)
# shenzhen {'name': 'Alice', 'age': 22}
```

+ **命名关键字参数**：使用 `*` 分割前面的参数，之后的参数被视为命名关键字参数，命名关键字参数不可缺省但是能使用默认值
```py
def say(name, *, age, city='shenzhen'):
  print(name, age, city)

say('Alice', age=22)
# Alice 22 shenzhen
```