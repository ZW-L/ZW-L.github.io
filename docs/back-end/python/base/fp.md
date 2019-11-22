## 函数定义

**基础语法：**

```python
  # 函数定义
  def hello():
    print('hello world')
  # 函数调用
  hello()
```

**函数参数：**

+ 必须参数：调用函数时传入的参数的顺序和数量要和函数定义的参数保持一致
  ```python
    def hello(str):
      print(str)
    hello('hello world')
  ```
+ 关键字参数：使用关键字，可以不要求传入参数的顺序
  ```python
    def hello(str):
      print(str)
    hello(str='hello world')
  ```
+ 默认参数：指定默认参数，当不传入该参数时，会使用默认的参数
  ```python
    def hello(str='hello world'):
      print(str)
    hello()
  ```
+ 不定长参数：使用带星号 * 的变量名保存所有未命名的参数，没有时其为空元组
  ```python
    def hello(*variables):
      for v in variables:
        print(v)
    hello('hello', 'world')
  ```

## 匿名函数

+ lambda：
  + lambda 是一个表达式，函数体比 def 简单
  + lambda 的主体是一个表达式，而不是一个代码块
  + lambda 函数拥有自己的命名空间，且不能访问自身参数外或全局命名空间的参数
+ 语法

```python
  sum = lambda a, b: a + b
  res = sum(1, 2)
  print(res)
```

## return 

&emsp;&emsp;用于退出函数和返回指定值，缺省时函数的返回值为 None

语法：

```python
  def hello():
    return 'hello world'
  s = hello()
  print(s)
```

## 变量作用域

&emsp;&emsp;函数内部的变量拥有局部作用域，不会使用影响全局变量；**global**关键字可引用全局变量

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