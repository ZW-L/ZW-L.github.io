---
sidebarDepth: 2
---

## 文档和教程

+ [echarts](https://github.com/apache/incubator-echarts) 用于绘制图表
+ [官方教程](https://echarts.apache.org/zh/tutorial.html)



## 安装

```
npm install echarts --save
```


## 解析

### 概念

+ `echarts` 实例：挂载在 DOM 节点上，一个 `echarts` 实例独占一个 DOM 节点
+ `option` - 选项：作为 `echarts.setOption()` 的参数
+ `component` - 组件：所有内容(`option` 的大部分属性)，都被理解为 “组件”，包括：
  + xAxis（直角坐标系 X 轴）
  + yAxis（直角坐标系 Y 轴）
  + grid（直角坐标系底板）
  + angleAxis（极坐标系角度轴）
  + radiusAxis（极坐标系半径轴）
  + polar（极坐标系底板）
  + geo（地理坐标系）
  + dataZoom（数据区缩放组件）
  + visualMap（视觉映射组件）
  + tooltip（提示框组件）
  + toolbox（工具栏组件）
  + series（系列）
  + ...
+ `series` - 系列：一组数值以及将要映射成的图类型，是一个数组，因此可以在一个 `echarts` 实例上渲染多个图表
+ 组件定位：不同的组件、系列，常有不同的定位方式
  + 类 CSS 的绝对定位：`left` / `width` / `right` 控制横向，`top` / `height` / `bottom` 控制纵向(设置两项，第三项会自动推导；允许使用百分比和数值)
  + 中心半径定位：圆形组件/系列(`pie`/`sunburst`/`polar`)，可以根据 `center` 和 `radius` 决定位置
  + 其他定位：特定组件的定位
+ 坐标系：支持直角坐标系、极坐标系、地理坐标系（GEO）、单轴坐标系、日历坐标系等坐标系


### API

+ `echarts`：全局 `echarts` 实例，可以进行初始化 `echartsInstance`、销毁 `echartsInstance` 等操作
+ `echartsInstance`：通过 `echarts.init()` 创建的实例，可以通过 `echartsInstance.setOption()` 渲染数据
+ `action`：触发事件，方式为 `dispatchAction()`
+ `events`：注册监听，方式为 `echarts.on()`


### option

+ option 包括以下选项

|选项|描述|
|-|-|-|
|grid|直角坐标系内的网格|
|xAxis|直角坐标系的 x 轴|
|yAxis|直角坐标系的 y 轴|
|polar|极坐标系|
|radiusAxis|极坐标系的径向轴|
|angleAxis|极坐标系的角度轴|
|radar|雷达图坐标系|
|geo|地理坐标系|
|parallel|平行坐标系|
|parallelAxis|平行坐标系的坐标轴|
|singleAxis|单轴|
|calendar|日历坐标系|
|title|标题组件|
|legend|图例组件，可以点击切换某数据是否显示|
|dataZoom|区域缩放组件，用户可以控制显示哪一部分区间的数据|
|visualMap|视觉映射组件，将数据映射到视觉元素|
|tooltip|提示框组件，焦点悬停在数据上方时显示|
|axisPointer|坐标轴指示器，用于指示坐标轴当前刻度|
|toolbox|工具栏组件，可以一放置些工具；在坐标轴上渲染一个系列时，可以通过工具切换渲染方式，如折线图/柱状图之间切换|
|brush|区域选择组件，用户可以控制显示哪一部分区间的数据|
|timeline|时间线组件，可以自动播放或手动切换显示不同时期的数据|
|graphic|原生图形元素组件|
|dataset|数据集，用于集中管理数据|
|series|系列，可以在一个图上对同一组数据以几种形式进行渲染|
|aria|无障碍交互|
|color|调色盘|
|backgroundColor|背景色|
|textStyle|全局字体样式|
|animation|是否开启动画|
|animationThreshold|是否开启动画的阈值|
|animationDuration|初始动画的时长，支持回调函数|
|animationEasing|初始动画的缓动效果|
|animationDelay|初始动画的延迟，支持回调函数|
|animationDurationUpdate|数据更新动画的时长|
|animationEasingUpdate|数据更新动画的缓动效果|
|animationDelayUpdate|数据更新动画的延迟，支持回调函数|
|blendMode|图形的混合模式|
|hoverLayerThreshold|图形数量阈值|
|useUTC|是否使用 UTC 时间|



## 使用技巧





