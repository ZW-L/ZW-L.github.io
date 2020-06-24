## 数据库

```sql
# 1.显示所有数据库
SHOW DATABASES;

# 2.选择数据库
use dbname;

# 3.创建数据库
CREATE DATABASE dbname;

# 4.删除数据库
DROP DATABASE dbname;
```



## 数据表

```sql
# 1.显示所选数据库内的所有数据表
SHOW TABLES;

# 2.创建数据表
CREATE TABLE tbname(
  id INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  age INT(3) NOT NULL,
  name VARCHAR(30) NOT NULL UNIQUE,
  reg_date TIMESTAMP
);

# 3.删除数据表
DROP TABLE tbname;

# 4.显示数据表的属性等信息
SHOW COLUMNS FROM tbname;

# 5.显示数据表的详细索引，包括主键
SHOW INDEX FROM tbname;

# 6.查看表结构
DESC tbname;

# 7.查看创建表的SQL语句
SHOW CREATE TABLE tbname;

# 8.修改表
# 8-1.增加列
ALTER TABLE tbname ADD COLUMN age INT(3) NOT NULL; 

# 8-2.删除列
ALTER TABLE tbname DROP COLUMN age;

# 8-3.修改列
ALTER TABLE tbname CHANGE COLUMN age user_age INT(3) NOT NULL;
```