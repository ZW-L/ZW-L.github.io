## 标识数据类型

+ 创建表时，用于标识数据的数据类型

|类型|描述|
|-|-|
|`NOT NULL`|标识数据不能为空|
|`PRIMARY KEY`|设置为主键|
|`AUTO_INCREMENT`|设置值自增|
|`UNIQUE`|设置键唯一|


+ 示例
```sql
CREATE TABLE tbname(
  id INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  age INT(3) NOT NULL,
  name VARCHAR(30) NOT NULL UNIQUE,
  reg_date TIMESTAMP
);
```



## 补充语句

+ 用于对语句的补充

|类型|描述|
|-|-|
|`INSERT INTO`|插入|
|`REPLACE INTO`|插入并替换|
|`IGNORE`|插入时忽略|
|`VALUES`|值列表|
|`ADD COLUMN`|添加列|
|`CHANGE COLUMN`|修改列|
|`DELETE`|删除数据|
|`DROP`|删除数据库/数据表|
|`UPDATA`|更新数据|
|`WHERE`|条件子句|
|`LIKE`|包含子句|
|`REGEX`|正则匹配|
|`LIMIT`|数字，分页查询每页显示数量|
|`OFFSET`|数字，分页查询指定偏移量，注意搜索结果下标从 0 开始|
|`COUNT, AVG, SUM, MAX, MIN`|聚合函数|
|`GROUP BY`|分组|
|`ORDER BY`|排序|
|`INNER JOIN`| 内连接，两个表都存在的部分，相当于 `A∩B`|
|`RIGHT OUTER JOIN`|右外连接，右表所有，相当于 `B`，左表补 `NULL`|
|`LEFT OUTER JOIN`|左外连接，左表所有，相当于 `A`，右表补 `NULL`|
|`FULL OUTER JOIN`| 相当于 `A∪B`，不存在另一个表的值补 `NULL`|