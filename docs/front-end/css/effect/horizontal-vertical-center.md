## absolute + margin

+ 结合水平居中和垂直居中即可

```html
<div class="container">
  <div class="box"></div>
</div>
```

```css
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #000;
}
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  margin: auto;
  top: 0; bottom: 0; /* 保证垂直居中 */
  left: 0; right: 0; /* 保证水平居中 */
  background-color: #ccc;
}
```