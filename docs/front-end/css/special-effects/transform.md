## transform

`transform` 用于设置元素的转换(平移、缩放、扭曲、旋转)，对应的 X, Y, Z 轴如下所示，其中，由屏幕向外的轴为 Z 正半轴，屏幕向右和向下分别为 X 正半轴和 Y 正半轴：

<!-- ![](./imgs/transform_01.png) -->

```css
/* 2D 转换 */
.box {
  transform-origin: center center; /* 设置转换的原点，使用九宫格参数 */
  transform: translateX(100px) translateY(100px) rotateX(50deg); /* 设置转换方式 */
}
/* 3D 转换 */
.box {
  perspective: 100; /* 视距，视距越大，元素看起来越小 */
  perspective-origin: left center; /* 视点位置，使用九宫格参数 */
  backface-visibility: visible; /* 设置元素背面是否可见 */
  transform-style: flat; /* 设置被嵌套元素如何在 3D 空间中显示，flat 为 2D 扁平化，preserve-3d 为 3D 空间 */
}
```

**技巧：**
+ `transform` 表示一个属性状态，能用于 `transition` 中；
+ 设置 `3D` 变换时一定要设置属性 `transform-style: preserve-3d`，并控制视点的位置，才能较明显地看到变化；