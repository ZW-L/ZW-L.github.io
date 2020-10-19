## 矩形

+ [rect](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect): 在指定位置创建一个矩形，还可以指定圆角
+ 案例：创建一个矩形和一个圆角矩形
```html
<svg width="300" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <!-- 矩形 -->
  <rect x="0" y="10" width="100" height="100"/>

  <!-- 矩形：带圆角 -->
  <rect x="110" y="10" width="100" height="100" rx="15" ry="15"/>
</svg>
```



## 圆

+ [circle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle): 根据圆心和半径绘制圆，还可以指定 [pathLength]()
```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 圆 -->
  <circle cx="50" cy="50" r="50"/>
</svg>
```


## 椭圆

+ [ellipse](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse): 根据圆心、x 轴半径和 y 轴半径绘制椭圆
```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 椭圆 -->
  <ellipse cx="50" cy="50" rx="50" ry="30"/>
</svg>
```


## 图像

+ [image](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image): 
```html

```


## 线

+ [line](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line): 根据两点连线，**必须指定 stroke，否则线是透明的**
```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <!-- 线 -->
  <line x1="0" y1="0" x2="20" y2="30" stroke="red"/>
</svg>
```


## 路径

+ [path](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path): 
```html

```



## 多边形

+ [polygon](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon): 
```html

```



## 多边

+ [polyline](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline): 
```html

```
