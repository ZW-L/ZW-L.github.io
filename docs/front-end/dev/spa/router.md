## 思路

+ 
+ 
+ 


## 案例

### 后台管理页面

**思路：**
+ 通过 Layout 组件配置页面骨架，保留唯一的路由出口，其他路由都在主视图（MainApp）中渲染


**路由列表：**
```sh
# 特别的路由
/login

# 主视图
/users
  /users/detail/:id
  /users/add
/products
  /products/detail/:id
  /products/add
/orders
  /orders/detail/:id
  /orders/return
/analysis
  /analysis/users
  /analysis/sales
  /analysis/turnover
/message
/admin
/about
```

**路由文件配置：**
```js

```