## 查询参数

|参数|说明|
|-|-|
|width|定义输出设备的页面可见区域的宽度，取值：`<length>`|
|height|定义输出设备的页面可见区域的高度，取值：`<length>`|
|device-width|定义输出设备的屏幕可见宽度，取值：`<length>`|
|device-height|定义输出设备的屏幕可见高度，取值：`<length>`|
|aspect-ratio|定义输出设备的页面可见区域宽度与高度的比率，取值：`<ratio>`|
|device-aspect-ratio|定义输出设备的屏幕可见区域宽度与高度的比率，取值：`<ratio>`|
|color|定义输出设备每一组彩色原件的个数，取值：0 \|\| `<integer>`|
|color-index|定义在输出设备的彩色查询表中的条目数，取值：`<integer>`|
|monochrome|定义在单色框架缓存区中每个像素包含的单色原件个数，取值：`<integer>`|
|resolution|定义设备的分辨率，取值：`<resolution>`|
|orientation|定义输出设备中的页面可视区域高度是否大于等于宽度，取值：<br>portrait<br>landscape|
|scan|定义电视类设备的扫描工序，取值：<br>progressive<br>interlace|
|grid|查询输出设备是否使用栅格或点阵，取值：`<length>`|

::: tip 注意：
上述参数除了 `orientation`, `scan`, `grid` 外，其他参数都有 `min-*`, `max-*` 的形式。
:::


## 媒体类型

类型|说明
-|-
all|用于所有的媒介设备
aural|用于语音和音频合成器
braille|用于盲人用点字法触觉回馈设备
embossed|用于分页的盲人用点字法打印机
handheld|用于小的手持的设备
print|用于打印机
projection|用于方案展示，比如幻灯片
screen|用于电脑显示器
tty|用于使用固定密度字母栅格的媒介，比如电传打字机和终端
tv|用于电视机类型的设备