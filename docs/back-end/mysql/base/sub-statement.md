## WHERE

+ 附加表达式，匹配满足条件的结果
```sql
# 在指定范围内
SELECT * FROM tbname WHERE age=24;
SELECT * FROM tbname WHERE age>24;
SELECT * FROM tbname WHERE age>=24;
SELECT * FROM tbname WHERE age<24;
SELECT * FROM tbname WHERE age<=24;
SELECT * FROM tbname WHERE age<>24;

# 包含 LIKE 子句
SELECT * FROM tbname WHERE name LIKE '%an%';
```




## LIKE

+ 实现简易的包含匹配，更多的匹配模式可以用正则
```sql
# 1.以固定值开头
SELECT * FROM tbname WHERE name LIKE ‘An%’;

# 2.以固定值结尾
SELECT * FROM tbname WHERE name LIKE ‘%nd’;

# 3.中间包含固定值
SELECT * FROM tbname WHERE name LIKE ‘%en%’;

# 4.不使用 % 
SELECT * FROM tbname WHERE name LIKE 'An';
# 等同于
SELECT * FROM tbname WHERE name='An';
```



## ORDER BY

+ 用于排序，默认为升序(ASC)，也可以指定降序(DESC)
```sql
# 1.升序
SELECT * FROM tbname WHERE score>60 ORDER BY score;

# 2.降序
SELECT * FROM tbname WHERE score>60 ORDER BY score DESC;

# 3.设定多个排序规则
SELECT * FROM tbname WHERE score>60 ORDER BY score DESC, age;
```



## REGEXP

+ 使用正则进行匹配
```sql
SELECT * FROM tbname WHERE name REGEXP 'Anna|Alice';
```