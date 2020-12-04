## 简介

+ [audio](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)



## 属性

属性|描述|取值
-|-|-
autoplay|自动播放，无需等待音频全部下载|Boolean，默认 false
controls|浏览器提供控件允许用户控制播放|Boolean，默认 false
loop|指定音频循环播放|Boolean，默认 false
muted|指示音频是否最初会静音|Boolean，默认 false
preload|-|`none`: 不预加载音频<br>`metadata`: 仅获取音频元数据<br>`auto`: 下载整个音频文件<br>`空串`: 同 `auto`
src|嵌入的音频的 URL|URL
currentTime|读取/设置音频的播放位置，单位为 s|双精度浮点值
duration|读取音频的总长度，以秒为单位|双精度浮点值(只读)
ended|获取音频是否结束|Boolean(只读)
paused|获取音频是否暂停|Boolean(只读)
networkState|获取音频的网络状态|只读，对应值:<br>`0`: 尚未初始化<br>`1`: 已经选取资源，但未使用网络<br>`2`: 正在下载数据<br>`3`: 未找到资源
readyState|获取音频当前状态|只读，对应值:<br>`0`: durationchange 事件触发之前<br>`1`: 音频元数据已获取<br>`2`: 当前播放位置的数据是可用的<br>`3`: 当前及至少下一帧的数据是可用的<br>`4`: 可用数据足以开始播放
buffered|获取已缓冲的时间区间|只读，属性:<br>`buffered.length`: 区间个数<br>`buffered.start(index)`: 指定起始时间<br>`buffered.end(index)`: 指定结束时间
played|获取已播放的时间区间|只读，属性:<br>`played.length`: 区间个数<br>`played.start(index)`: 指定起始时间<br>`played.end(index)`: 指定结束时间
seekable|获取可寻址的时间区间|只读，属性:<br>`seekable.length`: 区间个数<br>`seekable.start(index)`: 指定起始时间<br>`seekable.end(index)`: 指定结束时间
seeking|获取用户是否在寻址|Boolean(只读)
volume|获取/设置音量值|浮点值，0~1
playbackRate|获取/设置播放倍速|浮点值，默认 1
crossorigin|是否使用 `CORS` 来获取音频|`anonymous`: 发送没有凭证的跨域请求<br>`use-credentials`: 发送带凭据的跨域请求
disableRemotePlayback|-|布尔值


::: tip 备注：
+ `autoplay`, `controls`, `loop`, `muted`, `preload`, `src` 都可以在 `<audio>` 标签中快捷设置
```html
<audio autoplay controls loop muted preload src="http://path/to/audio/source">
</audio>
```
+ 为了兼容不同的浏览器(支持的音频类型不同)，通常使用多个 `<source>` 标签代替直接使用 `src` 属性
```html
<audio controls>
  <source src="foo.opus" type="audio/ogg; codecs=opus" />
  <source src="foo.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="foo.mp3" type="audio/mpeg" />
  你的浏览器不支持 Audio.
</audio>
```
:::



## 事件

事件|描述
-|-
<font color="orange">加载时</font>|
loadstart|浏览器开始寻找指定的媒体数据时
progress|浏览器正在下载指定的媒体数据时
suspend|媒体数据停止加载时(基本每个 progress 触发后都会触发)
durationchange|媒体数据的时长改变时
loadeddata|媒体的第一帧已完成加载时
loadedmetadata|元数据已加载时
canplay|浏览器可以播放媒体时(但是后面有可能需要缓冲)
canplaythrough|浏览器可以播放媒体时(后面一段时间内不再需要缓冲)
<font color="orange">加载出错时</font>|
abort|终止加载时(当前媒体正在加载，随后更改 src 时)
error|加载发生错误时(loadstart 之后不能触发 progress 时)
stalled|浏览器尝试获取媒体数据，但数据不可用时(加载过程中断开网络)
emptied|媒体数据已经空了(更改 src 时)
<font color="orange">播放过程中改变状态</font>|
complete|离线音频加载完成时？
play|可以开始播放时
pause|播放暂停时
ended|播放完毕时
ratechange|播放速度改变时
seeked|设置 currentTime 完成的瞬间(在 seeking 之后触发)
seeking|设置 currentTime 的瞬间
waiting|要播放下一帧需要缓冲时
playing|暂停或缓冲后重新开始播放时
timeupdate|currentTime 改变时(播放时会持续触发)
volumechange|改变音量时


::: tip 备注：
+ 当 `preload` 取默认值 `auto` 时，为 `<audio>` 添加音频源(`src`)，加载事件的触发顺序为：
  + `loadstart`：第一个触发的事件，接着会加载音频资源持续触发 `progress` 事件
  + `progress`：会持续触发，在浏览器中会有一个阈值(智能加载，不会一次性加载)
  + `durationchange`：`progress` 持续触发时会先触发该事件获取音频时长，再触发 `loadedmetadata`
  + `loadedmetadata`：位于 `durationchange` 之后，在 `loadeddata` 之前，表示已获取音频的元数据
  + `loadeddata`；在 `loadedmetadata` 之后，表示音频资源的第一帧已准备好
  + `canplay`：
  + `canplaythrough`：
:::
