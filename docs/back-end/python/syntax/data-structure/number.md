## 简介

+ 数值类型都是 `Number` 对象


## 数学常量

+ pi
+ e


## 数学函数

+ `abs(x)`: 绝对值
+ `ceil(x)`: 上取整
+ `cmp(x, y)`: 比较两个数，相同返回0，大于返回1
+ `exp(x, y)`: e 的 x 次幂
+ `fabs(x)`: 绝对值
+ `floor(x)`: 下取整
+ `log(x)`: 对数
+ `log10(x)`: 以10为底的对数
+ `max(a, b, c, d, ...)`: 最大值
+ `min(a, b, c, d, ...)`: 最小值
+ `modf(x)`: 返回整数部分和小数部分，包括正负号
+ `pow(x, y)`: 相当于 x ** y
+ `round(x [,n])`: 返回浮点数的四舍五入值，n 为小数点后的位数
+ `sqrt(x)`: 平方根


## 三角函数

+ `acos(x)`: 反余弦弧度制
+ `asin(x)`: 反正弦弧度制
+ `atan(x)`: 反正切弧度制
+ `atan2(y, x)`: 反正切弧度制
+ `cos(x)`: 余弦值
+ `hypot(x)`: 欧几里得范数，`(x*x + y*y)`
+ `sin(x)`: 正弦值
+ `tan(x)`: 正切值
+ `degrees(x)`: 弧度转化为角度
+ `radians(x)`: 角度转化为弧度


## 随机数函数

+ `choice(seq)`: 从序列中随机选择一个元素
+ `randrange([start,] stop [,step])`: 从指定范围的集合选择一个随机数
+ `random()`: 生成 [0,1) 的随机数
+ `uniform(x, y)`: 随机生成 [x, y] 的随机数
+ `seed([x])`: 改变随机数生成器的种子 seed
+ `shuffle(lst)`: 打乱顺序