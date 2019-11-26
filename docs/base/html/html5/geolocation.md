## 说明

+ Geolocation API 用于定位用户的位置，获取的是当前设备的经纬度
+ 由于该特性可能侵犯用户的隐私，除非用户同意，否则用户位置信息是不可用的
+ 对于拥有 GPS 的设备，地理定位更加精确

## 方法

下列方法都是由 `navigator.geolocation` 对象调用：

|方法|描述|
|-|-|
|`getCurrentPosition(success, [error, options])`|确定设备的位置并返回一个携带位置信息的 `Position` 对象|
|`watchPosition(success, [error, options])`|注册一个位置改变监听器，每当设备位置改变时，返回一个 `long` 类型的该监听器的 ID 值|
|`clearWatch(id)`|取消由 `watchPosition()` 注册的位置监听器|

::: tip 说明：
+ `getCurrentPosition()` 和 `watchPosition()` 都接受一个必须的 success 回调函数、可选的 error 回调函数、可选的 options 选项对象
:::

## Position 对象

`Position` 对象包括：

+ 定义了当前位置的 `Coordinates` 对象
+ `DOMTimeStamp` 属性，表示获取到位置时的时间戳


## Coordinates 对象

`Coordinates` 对象包含以下属性：

|属性|描述|
|-|-|
|latitude|Double 类型，表示纬度|
|longitude|Double 类型，表示经度|
|altitude|Double 类型，表示海拔高度|
|accuracy|Double 类型，表示 latitude 和 longitude 属性的精度|
|altitudeAccuracy|Double 类型，表示 latitude 属性的精度|
|heading|Double 类型，表示设备运行的方向|
|speed|Double 类型，表示设备速度|