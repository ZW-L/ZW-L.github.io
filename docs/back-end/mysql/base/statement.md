---
sidebarDepth: 2
---

## 增

+ 插入单行
```sql
INSERT INTO tbname(field1 [, field2]) VALUES(value1 [, value2]);
```



## 删

+ 删除满足条件的行
```sql
DELETE FROM tbname WHERE age=24;
```




## 改

+ 更新满足条件的
```sql
UPDATE tbname SET age=18 WHERE name='Anna';
```




## 查

+ 基本查询
  + 查询所有
  + 查询部分字段
  + 条件查询
  + 查询后排序
+ 其他查询
  + 分页查询
  + 聚合查询：使用聚合函数
  + 多表查询
  + 连接查询



### 基本查询

```sql
# 1.选择所有
SELECT * FROM tbname;

# 2.选择部分字段
SELECT age, name FROM tbname;

# 3.使用 WHERE 选择满足条件的部分
SELECT * FROM tbname WHERE <表达式>;

# 4.使用 LIKE 选择包含(开头结尾中间)
SELECT * FROM tbname WHERE name LIKE 'Anna%';

# 5.选择后排序 ORDER BY
SELECT * FROM tbname ORDER BY <字段1> [, <字段2>...];
```



### 分页查询

```sql
SELECT * FROM tbname 
ORDER BY <字段1> [, <字段2>...]
LIMIT <条目数> OFFSET <偏移量>;
```



### 聚合查询

```sql
# 1.COUNT 显示表行数，可以设置别名
SELECT COUNT(<字段>) [alias] FROM tbname [<子句>];
SELECT COUNT(user_age) age FROM tbname WHERE age>20;

# 2.AVG 求取平均数
SELECT AVG(<字段>) [alias] FROM tbname [<子句>];
SELECT AVG(age) age_average FROM tbname;

# 3.SUM


# 4.MAX


# 5.MIN

# 6.GROUP BY 分组聚合
SELECT [<字段>,...] COUNT(<字段>) [alia] FROM tbname 
GROUP BY <字段> [,<字段>...];
SELECT COUNT(*) num FROM tbname GROUP BY class_id;
SELECT class_id, gender, COUNT(*) num FROM tbname 
GROUP BY class_id, gender;
```



### 多表查询
```sql
# 1.笛卡尔积，n*m*... 条记录
SELECT * FROM <表1>, <表1> [,..];
SELECT * FROM users, cities;

# 2.别名
SELECT 
	users.id uid,
	users.name uname,
	users.age,
	cities.name cname,
FROM users, cities;

# 3.别名优化
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.name cname,
FROM users s, cities c;

# 4.添加 WHERE 子句筛选结果
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.name cname,
FROM users s, cities c
WHERE age<30 AND cities='shenzhen';
```



### 连接查询
```sql
# 1.同一个表中
SELECT age, name FROM tbname;

# 2.不同一个表中, INNER JOIN, 并使用 ON 指示两个表中相同的部分实现连接
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.include,
FROM users s
INNER JOIN cities c
ON u.city_name=c.name

# 3.RIGHT OUTER JOIN
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.include,
FROM users s
RIGHT OUTER JOIN cities c
ON u.city_name=c.name

# 4.LEFT OUTER JOIN
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.include,
FROM users s
LEFT OUTER JOIN cities c
ON u.city_name=c.name

# 4.FULL OUTER JOIN
SELECT 
	u.id uid,
	u.name uname,
	u.age,
	c.include,
FROM users s
FULL OUTER JOIN cities c
ON u.city_name=c.name
```