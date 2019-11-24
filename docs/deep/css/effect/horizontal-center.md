## 固定宽度

```css
.box {
  width: 100px; /* 或百分比 */
  height: 100px;
  margin: 0 auto;
}
```

## 非 static 定位

```css
/* 会显示 margin 边距 */
.box {
  position: absolute; /* absolute 或 relative */
  width: 50%;
  height: 100px;
  margin-left: 50%; /* 先固定偏移 50%，再用 left 负值拉正 */
  left: -25%; /* 负值，width 的一半 */
}

/* 不会显示 margin 边距 */
.box {
  position: absolute;
  width: 50%;
  height: 100px;
  left: 50%; /* 先固定偏移 50%，再用 margin 负值拉正 */
  margin-left: -25%; /* 负值，width 的一半 */
}
```