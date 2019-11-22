## 登录 MySQL

命令行启动(管理员模式)：

```
// root 为用户, -p 指代密码登录
$ mysql -u root -p
```

## 管理

```mysql
// 1.显示所有数据库
SHOW DATABASES;

// 2.选择数据库
use dbname;

// 3.创建数据库
CREATE DATABASE dbname;

// 4.删除数据库
DROP DATABASE dbname;

// 5.显示所选数据库内的所有数据表
SHOW TABLES;

// 6.创建数据表
CREATE TABLE tbname(
  id INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  age INT(3) NOT NULL,
  name VARCHAR(30) NOT NULL UNIQUE,
  reg_date TIMESTAMP
);

// 7.删除数据表
DROP TABLE tbname;

// 8.显示数据表的属性等信息
SHOW COLUMNS FROM tbname;

// 9.显示数据表的详细索引，包括主键
SHOW INDEX FROM tbname;

// 10.查看表结构
DESC tbname;

// 11.查看创建表的SQL语句
SHOW CREATE TABLE tbname;

// 12.修改表
// 12-1.增加列
ALTER TABLE tbname ADD COLUMN age INT(3) NOT NULL; 

// 12-2.删除列
ALTER TABLE tbname DROP COLUMN age;

// 12-3.修改列
ALTER TABLE tbname CHANGE COLUMN age user_age INT(3) NOT NULL;
```


## 数据类型

+ 数值类型

|类型|字节大小|无符号范围|用途|
|-|-|-|-|
|`TINYINT`|1|0 ~ 255|小整数|
|`SMALLINT`|2|0 ~ 65535|大整数|
|`MEDIUMINT`|3|0 ~ 16,777,215|大整数|
|`INT/INTEGET`|4|0 ~ 4,294,967,295|大整数|
|`BIGINT`|8|0 ~ 18,446,744,073,709,551,615|极大整数|
|`FLOAT`|4|0 ~ (1.175,494,351E-38, 3.402,823,466E+38)|单精度浮点数|
|`DOUBLE`|8|0~(2.225,073,858,507,201,4E-308, 1.797,693,134,862,315,7E+308)|双精度浮点数|
|`DECIMAL`|依赖 M, D|DECIMAL(M, D)，M>D 则为 M+2，否则为 D+2|小数|

+ 日期类型

|类型|字节大小|范围|格式|用途|
|-|-|-|-|-|
|`DATE`|3|`1000-01-01`|`YYYY-MM-DD`|日期值|
|`TIME`|3|`'-838:59:59'/'838:59:59'`|`HH:MM:SS`|时间值|
|`YEAR`|1|`1901/2155`|`YYYY`|年份|
|`DATATIME`|8|`1000-01-01 00:00:00 23:59:59`|`YYYY-MM-DD HH:MM:SS`|混合日期|
|`TIMESTAMP`|8|`1970 01-01 00:00:00`|`YYYYMMDD HHMMSS`|时间戳|

+ 字符串类型

|类型|字节大小|用途|
|-|-|-|
|`CHAR`|0 ~ 255|定长字符串|
|`VARCHAR`|0 ~ 65535|变长字符串|
|`TINYBLOB`|0 ~ 255|二进制短字符串|
|`TINYTEXT`|0 ~ 255|短文本字符串|
|`BLOB`|0 ~ 65535|二进制长字符串|
|`TEXT`|0 ~ 65535|长本字符串|
|`MEDIUMBLOB`|0 ~ 16,777,215|二进制中长字符串|
|`MEDIUMTEXT`|0 ~ 16,777,215|中长文本字符串|
|`LONGBLOB`|0 ~ 4 294,967,295|二进制极大字符串|
|`LONGTEXT`|0 ~ 4 294,967,295|极大文本字符串|



## 关键字

+ 数据类型关键字

	+ `NOT NULL`
	+ `PRIMARY KEY`
	+ `AUTO_INCREMENT`
	+ `UNIQUE`

+ 语句关键字

	+ `INSERT INTO`：插入
	+ `REPLACE INTO`：替换插入
	+ `IGNORE`：插入时忽略
	+ `VALUES`：值列表
	+ `ADD COLUMN`：添加列
	+ `CHANGE COLUMN`：修改列
	+ `DELETE`：删除数据
	+ `DROP`：删除数据库/数据表
	+ `UPDATA`：更新数据
	+ `WHERE`：条件子句
	+ `LIKE`：包含子句
	+ `REGEX`：正则匹配
	+ `LIMIT`：数字，分页查询每页显示数量
	+ `OFFSET`：数字，分页查询指定偏移量，注意搜索结果下标从 0 开始
	+ `COUNT, AVG, SUM, MAX, MIN`：聚合函数
	+ `GROUP BY`：分组
	+ `ORDER BY`：排序
	+ `INNER JOIN`： 内连接，两个表都存在的部分，相当于 `A∩B`
	+ `RIGHT OUTER JOIN`：右外连接，右表所有，相当于 `B`，左表补 `NULL`
	+ `LEFT OUTER JOIN`：左外连接，左表所有，相当于 `A`，右表补 `NULL`
	+ `FULL OUTER JOIN`： 相当于 `A∪B`，不存在另一个表的值补 `NULL`



## 基础语句

### 增

```mysql
// 1.插入单行
INSERT INTO tbname(field1 [, field2]) VALUES(value1 [, value2]);
```

### 删

```mysql
// 1.删除满足条件的行
DELETE FROM tbname WHERE age=24;
```

### 改

```mysql
// 1.更新满足条件的
UPDATE tbname SET age=18 WHERE name='Anna';
```

### 查

基本查询

+ 查询所有
+ 查询部分字段
+ 条件查询
+ 查询后排序

其他查询

+ 分页查询
+ 聚合查询（聚合函数）
+ 多表查询
+ 连接查询

```mysql
// 1.选择所有
SELECT * FROM tbname;

// 2.选择部分字段
SELECT age, name FROM tbname;

// 3.使用 WHERE 选择满足条件的部分
SELECT * FROM tbname WHERE <表达式>;

// 4.使用 LIKE 选择包含(开头结尾中间)
SELECT * FROM tbname WHERE name LIKE 'Anna%';

// 5.选择后排序 ORDER BY
SELECT * FROM tbname ORDER BY <字段1> [, <字段2>...];

// 6.分页查询
SELECT * FROM tbname 
ORDER BY <字段1> [, <字段2>...]
LIMIT <条目数> OFFSET <偏移量>;

// 7.聚合查询
// 7-1.COUNT 显示表行数，可以设置别名
SELECT COUNT(<字段>) [alias] FROM tbname [<子句>];
SELECT COUNT(user_age) age FROM tbname WHERE age>20;

// 7-2.AVG 求取平均数
SELECT AVG(<字段>) [alias] FROM tbname [<子句>];
SELECT AVG(age) age_average FROM tbname;

// 7-3.SUM


// 7-4.MAX


// 7-5.MIN

// 7-6.GROUP BY 分组聚合
SELECT [<字段>,...] COUNT(<字段>) [alia] FROM tbname 
GROUP BY <字段> [,<字段>...];
SELECT COUNT(*) num FROM tbname GROUP BY class_id;
SELECT class_id, gender, COUNT(*) num FROM tbname 
GROUP BY class_id, gender;

// 8.多表查询
// 8-1.笛卡尔积，n*m*... 条记录
SELECT * FROM <表1>, <表1> [,..];
SELECT * FROM users, cities;

// 8-2.别名
SELECT 
	users.id uid,
	users.name uname,
	users.age,
	cities.name cname,
FROM users, cities;

// 8-3 别名优化
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.name cname,
FROM users s, cities c;

// 8-4.添加 WHERE 子句筛选结果
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.name cname,
FROM users s, cities c
WHERE age<30 AND cities='shenzhen';

// 9.连接查询
// 9-1.同一个表中
SELECT age, name FROM tbname;

// 9-2.不同一个表中, INNER JOIN, 并使用 ON 指示两个表中相同的部分实现连接
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.include,
FROM users s
INNER JOIN cities c
ON u.city_name=c.name

// 9-3.RIGHT OUTER JOIN
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.include,
FROM users s
RIGHT OUTER JOIN cities c
ON u.city_name=c.name

// 9-4.LEFT OUTER JOIN
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.include,
FROM users s
LEFT OUTER JOIN cities c
ON u.city_name=c.name

// 9-4.FULL OUTER JOIN
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.include,
FROM users s
FULL OUTER JOIN cities c
ON u.city_name=c.name
```





## 子句

### WHERE

附加表达式，匹配满足条件的结果

```mysql
// 语法
SELECT * FROM tbname WHERE <表达式>;

/* 一般表达式：
age=24 | name='Alice'
age>24 | name>'Alice'
age>=24 
age<24 
age<=24
age<>24
name LIKE '%an%'
*/
```



### LIKE

实现简易的包含匹配，更多的匹配模式可以用正则。

```mysql
// 1.以固定值开头
SELECT * FROM tbname WHERE name LIKE ‘An%’;

// 2.以固定值结尾
SELECT * FROM tbname WHERE name LIKE ‘%nd’;

// 3.中间包含固定值
SELECT * FROM tbname WHERE name LIKE ‘%en%’;

// 4.不使用 % 
SELECT * FROM tbname WHERE name LIKE 'An';
// 等同于
SELECT * FROM tbname WHERE name='An';
```



### ORDER BY

用于排序，默认为升序(ASC)，也可以指定降序(DESC)。

```mysql
// 1.升序
SELECT * FROM tbname WHERE score>60 ORDER BY score;

// 2.降序
SELECT * FROM tbname WHERE score>60 ORDER BY score DESC;

// 3.设定多个排序规则
SELECT * FROM tbname WHERE score>60 ORDER BY score DESC, age;
```



### REGEXP

使用正则进行匹配。

```mysql
SELECT * FROM tbname WHERE name REGEXP 'Anna|Alice';
```



## 常用SQL语句

### 表增加/更新/删除

+ 无记录则增加，有记录则删除后增加

```mysql
REPLACE INTO tbname(age, name) VALUES(22, 'Anna');
```

+ 无记录则增加，有记录则忽略

```mysql
INSERT IGNORE INTO tbname(age, name) VALUES(22, 'Anna');
```

+ 无记录则增加，有记录则更新

```mysql
INSERT INTO tbname(age, name, city) VALUES(23, 'Anna', 'shenzhen') 
ON DUPLICATE UPDATE age=23, city='guangzhou';
```



### 表复制

+ 创建快照

```mysql
CREATE TABLE tbname_2  SELECT * FROM tbname_1 WHERE age>20;
```

+ 将表查询结果写入另一个数据表

```mysql
INSERT INTO tbname_2 (class_id, average) 
SELECT class_id, AVG(score) FROM tbname_1 
GROUP BY class_id;
```



## 导入导出

### 导出数据

+ 导出到 `.txt` 文件

```mysql
SELECT * FROM tbname INTO OUTFILE 'data.txt';
```

+ 导出为 `CSV` 格式

```mysql
SELECT * FROM tbname OUTFILE 'data.txt'
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n';
```