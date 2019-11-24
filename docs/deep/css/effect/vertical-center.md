## 依赖高度

```css
/* 非 static 定位，可以通过负 margin 居中 */
.box {
  position: relative;
  width: 100px;
  height: 100px;
  top: 50%;
  margin-top: -50px;
}
```

## 不依赖高度

```css
/* 使用 absolute 水平垂直居中，设置对边的 margin 为 auto，且对边的偏移都为 0 */
.box {
  position: absolute;
  width: 100px;
  height: 100px;
  margin: auto;
  top: 0; /* top, bottom 用于垂直居中 */
  bottom: 0;
  left: 0; /* left, right 用于水平居中 */
  right: 0;
}
```