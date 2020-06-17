## animation

`animation` 用于设置动画：
```css
/* 使用 @keyframes 设置动画 */
@keyframes bounce {
  0% { top: 0; } /* 可以使用 from 和 to 快速设置动画开始和结束的状态 */
  50% { top: 100px; }
  100% { top: 0; }
}
.box {
  animation-duration: 0.2s; /* 动画持续事件 */
  animation-timing-function: ease; /* 动画速度函数 */
  animation-delay: 0s; /* 延迟 */
  animation-iteration-count: infinite; /* 动画循环次数，默认 1 次 */
  animation-direction: normal; /* 动画循环中是否反向运动，设置 alternate 会反向运动 */
  animation-fill-mode: none; /* 动画时间外(或动画结束后)的状态 */
  animation-play-state: running; /* 动画当前的运动状态 */
  animation-name: bounce; /* 动画名称 */
  animation: bounce .2s infinite; /* 快捷设置上述值 */
}
```

**技巧：**
+ 可以使用 `js` 控制元素的 `el.style.animationPlayState` 属性来控制动画的开始和暂停