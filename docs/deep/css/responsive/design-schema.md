## 简介

+ 响应式设计方案受众多因素影响：项目大小、端优先等
+ 要提高不同端的体验效果，最好**不要省略媒体查询**



## 移动端优先：flex + rem + 媒体查询

### 简介

+ 因为 `flex`/`rem` 在移动端兼容性较好，用 `flex` 进行页面布局，`rem` 和媒体查询修改页面字体
+ 还可以使用视窗单位(`vw`/`vh`)

### Demo

```html
<div id="container">
  <header id="header">header</header>
  <main id="main">main</main>
  <footer id="footer">footer</footer>
</div>
```
```css
* { margin: 0; padding: 0; }
html { font-size: 50px; }

#container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  font-size: .4rem;
}
#header {
  height: 1rem;
  background-color: #000;
}
#main {
  flex: 1;
  background-color: #ccc;
}
#footer {
  height: 1.2rem;
}

/* iPhone 6/7/8 plus */
@media screen and (max-width: 420px) {
  html { font-size: 60px; }
}
/* iPhone 6/7/8 */
@media screen and (max-width: 375px) {
  html { font-size: 45px; }
}
/* iPhone 5/5s/se */
@media screen and (max-width: 320px) {
  html { font-size: 40px; }
}
```




## 小型项目：百分比 + 媒体查询

### 简介

+ 适用于小项目，这时不需要引入栅格系统，使用传统的布局即可(两栏/三栏/圣杯/双飞翼/吸顶)
+ 不考虑兼容性，可以使用视窗单位(`vw`/`vh`)代替百分比



### Demo

```html

```
```css
/* todo */
```





## 大型项目：栅格系统 + 媒体查询

### 简介

+ 使用栅格布局，媒体查询控制不同端的内容显示
+ 不考虑兼容性，还可以引入 `rem` 控制页面字体


### Demo

```html

```
```css
/* todo */
```
