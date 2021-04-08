## 错误

### 错误处理

+ try: 检测可能发生错误的语句块
+ except: 可以有多个，只匹配一个，也可以同是处理多个(放置于一个元组中)，最后的 except 可以不带异常名
+ else: 没有发生任何异常时执行
+ finally: 是否发生异常都会执行


### 抛出错误

+ raise：可以不带参数，参数只能是异常类或异常实例
+ 自定义异常
+ 清理行为



## 异常

&emsp;&emsp;程序运行中发生的错误，发生异常时程序会终止执行；但对异常进行处理后，程序不会中断执行

### 异常处理

+ `try...except` 语句
+ 可以有多个 `except` 语句，且 `except` 可以同时处理多个异常，最后一个 `except` 子句可以忽略异常的名称
+ 可以有一个可选的 `else` 子句，用在所有的 `except` 子句之后，在没有发生任何异常时执行
+ 可选的 `finally` 子句，任何时候都会执行
+ 使用 `raise` 抛出异常

```python
  try:
    a = 10/0
  except ZeroDivisionError as e:
    print(e)
  print('done')
```


### 自定义异常

+ 创建新的 `Exception` 类来自定义异常，但必须继承自 `Exception` 类




## 调试和测试

### 调试

+ print()：打印信息
+ assert：断言
+ logging 模块：打印错误日志
+ IDE 断点和调试

### 单元测试