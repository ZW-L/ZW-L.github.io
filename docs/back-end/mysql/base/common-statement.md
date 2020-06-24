## 表增加/更新/删除

+ 无记录则增加，有记录则删除后增加
```sql
REPLACE INTO tbname(age, name) VALUES(22, 'Anna');
```

+ 无记录则增加，有记录则忽略
```sql
INSERT IGNORE INTO tbname(age, name) VALUES(22, 'Anna');
```

+ 无记录则增加，有记录则更新
```sql
INSERT INTO tbname(age, name, city) VALUES(23, 'Anna', 'shenzhen') 
ON DUPLICATE UPDATE age=23, city='guangzhou';
```





## 表复制

+ 创建快照
```sql
CREATE TABLE tbname_2  SELECT * FROM tbname_1 WHERE age>20;
```

+ 将表查询结果写入另一个数据表
```sql
INSERT INTO tbname_2 (class_id, average) 
SELECT class_id, AVG(score) FROM tbname_1 
GROUP BY class_id;
```




## 导出数据

+ 导出到 `.txt` 文件
```sql
SELECT * FROM tbname INTO OUTFILE 'data.txt';
```

+ 导出为 `CSV` 格式
```sql
SELECT * FROM tbname OUTFILE 'data.txt'
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n';
```