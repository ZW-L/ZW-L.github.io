## 标签概览

+ `<form>`：表单
+ `<input>`：输入控件
+ `<button>`：按钮
+ `<label>`：`<input>` 元素的标注
+ `<textarea>`：多行文本输入控件
+ `<select>`：选择列表
+ `<option>`：选择列表的选项
+ `<optgroup>`：选择列表相关选项的组合
+ `<fieldset>`：围绕表单种元素的边框
+ `<legend>`：`<fieldset>` 元素的标题
+ `<keygen>`：<font color="orange">HTML5</font>。用于表单的密钥对生成字段
+ `<datalist>`：<font color="orange">HTML5</font>。`<input>` 元素可能的选项列表
+ `<output>`：<font color="orange">HTML5</font>。计算的结果

## form

**兼容性：**
+ 所有主流浏览器都支持 `<form>` 标签

**说明：**
+ 用于创建供用户输入的 HTML 表单
+ 包含一个或多个表单元素

**支持属性：**

属性名|描述|版本
-|-|-
autocomplete|规定是否启用表单的自动完成功能。取值：<br>`on`<br>`off`|<font color="orange">HTML5</font>
novalidate|规定提交表单时不进行验证。取值：<br>`novalidate`|<font color="orange">HTML5</font>
accept-charset|规定服务器可处理的表单数据字符集。取值：<br>character_set|
action|规定当提交表单时向何处发送表单数据。取值：<br>URL|
enctype|规定在向服务器发送表单数据之前如何对其进行编码（method: "post"）取值：<br>`application/x-www-form-urlencoded`<br>`multipart/form-data`<br>`text/plain`|
method|规定用于发送表单数据的 HTTP 方法。取值：<br>`get`<br>`post`|
name|规定表单的名称。取值：<br>text|
target|规定在何处打开 action URL。取值：<br>`_blank`<br>`_self`<br>`_parent`<br>`_top`|
accept|规定服务器接收到的文件的类型。取值：<br>`MIME_type`|<font color="red">HTML5 不支持</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## input

**兼容性：**
+ 大多数浏览器支持 `<input>` 标签

**说明：**
+ 规定了用户可以在其中输入数据的输入字段
+ 输入字段可通过多种方式改变，取决于 `type` 属性
+ 可以使用 `<label>` 元素来定义 `<input>` 元素的标注

**支持属性：**

属性名|描述|版本
-|-|-
autocomplete|规定 `<input>` 元素输入字段是否应该启用自动完成功能。取值：<br>`on`<br>`off`|<font color="orange">HTML5</font>
autofocus|规定当页面加载时 `<input>` 元素应该自动获得焦点。取值：<br>`autofocus`|<font color="orange">HTML5</font>
form|规定 `<input>` 元素所属的一个或多个表单。取值：<br>`form_id`|<font color="orange">HTML5</font>
formaction|规定当表单提交时处理输入控件的文件的 URL(type: "submit", "image")。取值：<br>URL|<font color="orange">HTML5</font>
formenctype|属性规定当表单数据提交到服务器时如何编码(type: "submit", "image")。取值：<br>`application/x-www-form-urlencoded`<br>`multipart/form-data`<br>`text/plain`|<font color="orange">HTML5</font>
formmethod|定义发送表单数据到 action URL 的 HTTP 方法(type: "submit", "image")。取值：<br>`get`<br>`post`|<font color="orange">HTML5</font>
formnovalidate|覆盖 `<form>` 元素的 novalidate 属性。取值：<br>`novalidate`|<font color="orange">HTML5</font>
formtarget|规定表示提交表单后在哪里显示接收到响应的名称或关键词(type: "submit", "image")。取值：<br>`_blank_`<br>`_self_`<br>`_parent`<br>`_top`<br>framename|<font color="orange">HTML5</font>
width|规定 `<input>` 元素的宽度(type: "image")。取值：<br>pixels|<font color="orange">HTML5</font>
height|规定 `<input>`元素的高度(type: "image")。取值：<br>pixels|<font color="orange">HTML5</font>
list|引用 `<datalist>` 元素，其中包含 `<input>` 元素的预定义选项。取值：<br>datalist_id|<font color="orange">HTML5</font>
min|规定 `<input>` 元素的最小值。取值：<br>number<br>date|<font color="orange">HTML5</font>
max|规定 `<input>` 元素的最大值。取值：<br>number<br>date|<font color="orange">HTML5</font>
multiple|规定允许用户输入到 `<input>` 元素的多个值。取值：<br>`multiple`|<font color="orange">HTML5</font>
pattern|规定用于验证 `<input>` 元素的值的正则表达式。取值：<br>regexp|<font color="orange">HTML5</font>
placeholder|规定可描述输入 `<input>` 字段预期值的简短的提示信息 。取值：<br>text|<font color="orange">HTML5</font>
required|规定必需在提交表单之前填写输入字段。取值：<br>`required`|<font color="orange">HTML5</font>
step|规定 `<input>` 元素的合法数字间隔。取值：<br>number|<font color="orange">HTML5</font>
accept|规定通过文件上传来提交的文件的类型(type: "file")。取值：<br>`audio/*`<br>`video/*`<br>`image/*`<br>`MIME_type`|
alt|定义图像输入的替代文本(type: "image")。取值：<br>text|
checked|规定在页面加载时应该被预先选定的 `<input>` 元素(type: "checkbox", "radio")。取值：<br>`checked`|
disabled|规定应该禁用的 `<input>` 元素。取值：<br>`disabled`|
maxlength|规定 `<input>` 元素中允许的最大字符数。取值：<br>number|
name|规定 `<input>` 元素的名称。取值：<br>text|
readonly|规定输入字段是只读的。取值：<br>`readonly`|
size|规定以字符数计的 `<input>` 元素的可见宽度。取值：<br>number|
src|规定显示为提交按钮的图像的 URL(type: "image")。取值：<br>URL|
type|规定要显示的 `<input>` 元素的类型。取值：<br>`text`<br>`button`<br>`checkbox`<br>`radio`<br>`file`<br>`image`<br>`submit`<br>`reset`<br>`password`<br>`hidden`<br><font color="orange">HTML5 新增</font>：<br>`color`<br>`date`<br>`datetime`<br>`datetime-local`<br>`email`<br>`month`<br>`week`<br>`number`<br>`range`<br>`reset`<br>`search`<br>`tel`<br>`url`|<font color="orange">HTML5 新增部分值</font>
value|指定 `<input>` 元素 value 的值。取值：<br>text|
align|规定图像输入的对齐方式。(type="image")|<font color="red">HTML5 已废弃</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## button

**兼容性：**
+ 所有主流浏览器都支持 `<button>` 标签

**说明：**
+ 定义一个按钮，在按钮内部可以放置内容(文本或图像)，这是与使用 `<input>` 元素创建的按钮的不同之处
+ 始终为 `<button>` 元素规定 `type` 属性，不同的浏览器对 `<button>` 元素的 `type` 属性使用不同的默认值

**支持属性：**

属性名|描述|版本
-|-|-
autofocus|规定当页面加载时按钮应当自动地获得焦点。取值：<br>`autofocus`|<font color="orange">HTML5</font>
disabled|规定应该禁用该按钮。取值：<br>`disabled`|<font color="orange">HTML5</font>
form|规定按钮属于一个或多个表单。取值：<br>form_id|<font color="orange">HTML5</font>
formaction|覆盖 form 元素的 action 属性(type: "submit")。取值：<br>URL|<font color="orange">HTML5</font>
formenctype|覆盖 form 元素的 enctype 属性(type: "submit")。取值：<br>`application/x-www-form-urlencoded`<br>`multipart/form-data`<br>`text/plain`|<font color="orange">HTML5</font>
formmethod|覆盖 form 元素的 method 属性(type: "submit")。取值：<br>`get`<br>`post`|<font color="orange">HTML5</font>
formnovalidate|覆盖 form 元素的 novalidate 属性(type: "submit")。取值：<br>`formnovalidate`|<font color="orange">HTML5</font>
formtarget|覆盖 form 元素的 target 属性(type: "submit")。取值：<br>`_blank_`<br>`_self_`<br>`_parent`<br>`_top`<br>framename|<font color="orange">HTML5</font>
name|规定按钮的名称。取值：<br>name|
type|规定按钮的类型。取值：<br>`button`<br>`reset`<br>`submit`|
value|规定按钮的初始值，可由脚本进行修改。取值：<br>text|
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## label

**兼容性：**
+ 大多数浏览器支持 `<label>` 标签

**说明：**
+ 为标签元素定义标记，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上
+ 不会向用户呈现任何特殊效果
+ 标签的 for 属性应当与相关元素的 id 属性相同

**支持属性：**

属性名|描述|版本
-|-|-
form|规定 label 字段所属的一个或多个表单。取值：<br>form_id|<font color="orange">HTML5</font>
for|规定 label 与哪个表单元素绑定。取值：<br>element_id|
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## textarea

**兼容性：**
+ 所有主流浏览器都支持 `<textarea>` 标签

**说明：**
+ 定义一个多行的文本输入控件，文本区域中可容纳无限数量的文本，其中的文本的默认字体是等宽字体（通常是 Courier）
+ 可以通过 `cols` 和 `rows` 属性来规定控件的尺寸大小，更好的办法是使用 CSS 的 `height` 和 `width` 属性

**支持属性：**
属性名|描述|版本
-|-|-
autofocus|规定当页面加载时，文本区域自动获得焦点。取值：<br>`autofocus`|<font color="orange">HTML5</font>
form|定义文本区域所属的一个或多个表单。取值：<br>form_id|<font color="orange">HTML5</font>
maxlength|规定文本区域允许的最大字符数。取值：<br>number|<font color="orange">HTML5</font>
placeholder|规定一个简短的提示，描述文本区域期望的输入值。取值：<br>text|<font color="orange">HTML5</font>
required|规定文本区域是必填的。取值：<br>`required`|<font color="orange">HTML5</font>
wrap|规定当提交表单时，文本区域中的文本应该怎样换行。取值：<br>`hard`<br>`soft`|<font color="orange">HTML5</font>
name|规定文本区域的名称。取值：<br>text|
disabled|规定禁用文本区域。取值：<br>`disabled`|
readonly|规定文本区域为只读。取值：<br>`readonly`|
cols|规定文本区域内可见的宽度。取值：<br>number|
rows|规定文本区域内可见的行数。取值：<br>number|
标准属性|支持 HTML 的全局属性。
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## select

**兼容性：**
+ 所有主流浏览器都支持 `<select>` 标签

**说明：**
+ 用来创建下拉列表，它包含的 `<option>` 标签定义了列表中的可用选项

**支持属性：**
属性名|描述|版本
-|-|-
autofocus|规定在页面加载时下拉列表自动获得焦点。取值：<br>`autofocus`|<font color="orange">HTML5</font>
form|定义 select 字段所属的一个或多个表单。取值：<br>form_id|<font color="orange">HTML5</font>
required|规定用户在提交表单前必须选择一个下拉列表中的选项。取值：<br>`required`|<font color="orange">HTML5</font>
name|定义下拉列表的名称。取值：<br>text|
disabled|当该属性为 true 时，会禁用下拉列表。取值：<br>`disabled`|
multiple|当该属性为 true 时，可选择多个选项。取值：<br>`multiple`|
size|规定下拉列表中可见选项的数目。取值：<br>number|
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## option

**兼容性：**
+ 大多数主流浏览器支持 `<option>` 标签

**说明：**
+ 定义下拉列表中的一个选项，标签中的内容作为 `<select>` 或者 `<datalist>` 一个元素使用，否则这个标签是没有意义的
+ 可以在不带有任何属性的情况下使用，通常需要使用 `value` 属性，此属性会被送往服务器
+ 如果列表选项很多，可以使用 `<optgroup>` 标签对相关选项进行组合

**支持属性：**
属性名|描述|版本
-|-|-
disabled|规定此选项应在首次加载时被禁用。取值：<br>`disabled`|
selected|规定选项（在首次显示在列表中时）表现为选中状态。取值：<br>`selected`|
label|定义当使用 `<optgroup>` 时所使用的标注。取值：<br>text|
value|定义送往服务器的选项值。取值：<br>text|
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## optgroup

**兼容性：**
+ 大多数主流浏览器支持 `<optgroup>` 标签

**说明：**
+ 经常用于把相关的 `<option>` 选项组合在一起

**支持属性：**
属性名|描述|版本
-|-|-
disabled|规定禁用该选项组。取值：<br>`disabled`|
label|为选项组规定描述。取值：<br>text|
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## fieldset

**兼容性：**
+ 所有主流浏览器都支持 `<fieldset>` 标签

**说明：**
+ 可以将表单内的相关元素分组，会在相关表单元素周围绘制边框

**支持属性：**
属性名|描述|版本
-|-|-
disabled|规定该组中的相关表单元素应该被禁用。取值：<br>`disabled`|<font color="orange">HTML5</font>
form|规定 fieldset 所属的一个或多个表单。取值：<br>form_id|<font color="orange">HTML5</font>
name|规定 fieldset 的名称。取值：<br>text|<font color="orange">HTML5</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## legend

**兼容性：**
+ 大多数浏览器支持 `<legend>` 标签

**说明：**
+ 为 `<fieldset>` 元素定义标题

**支持属性：**
属性名|描述|版本
-|-|-
align|为 fieldset 中的标题定义对齐方式。取值：<br>`top`<br>`bottom`<br>`left`<br>`right`|<font color="red">HTML5 不支持</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## keygen

**兼容性：**
+ <font color="orange">HTML5 新增</font>
+ Firefox、Opera、Chrome 和 Safari 6 都支持 `<keygen>` 标签，IE 不支持

**说明：**
+ 规定用于表单的密钥对生成器字段
+ 当提交表单时，私钥存储在本地，公钥发送到服务器

**支持属性：**
属性名|描述|版本
-|-|-
autofocus|使 `<keygen>` 字段在页面加载时获得焦点。取值：<br>`autofocus`|<font color="orange">HTML5</font>
challenge|如果使用，则将 `<keygen>` 的值设置为在提交时询问。取值：<br>`challenge`|<font color="orange">HTML5</font>
disabled|禁用 `<keygen>` 元素字段。取值：<br>`disabled`|<font color="orange">HTML5</font>
form|定义该 `<keygen>` 字段所属的一个或多个表单。取值：<br>form_id|<font color="orange">HTML5</font>
keytype|定义密钥的安全算法。取值：<br>`rsa`<br>`dsa`<br>`ec`|<font color="orange">HTML5</font>
name|定义 `<keygen>` 元素的唯一名称。取值：<br>name|<font color="orange">HTML5</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## datalist

**兼容性：**
+ <font color="orange">HTML5 新增</font>
+ `chrome 20.0+`, `IE 10.0+`, `firefox 4.0+`, `safari 12.1+`, `opera 9.0+`

**说明：**
+ 规定 `<input>` 元素可能的选项列表，用户能看到一个下拉列表，里边的选项是预先定义好的，将作为用户的输入数据
+ 使用 `<option>` 标签来定义选项
+ 使用 `<input>` 元素的 list 属性来绑定 `<datalist>` 元素

**支持属性：**
属性名|描述|版本
-|-|-
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。

## output

**兼容性：**
+ <font color="orange">HTML5 新增</font>
+ Firefox、Opera、Chrome 和 Safari 浏览器都支持 `<output>` 标签，IE 不支持

**说明：**
+ 作为计算结果输出显示(比如执行脚本的输出)

**支持属性：**
属性名|描述|版本
-|-|-
for|描述计算中使用的元素与计算结果之间的关系。取值：<br>element_id|<font color="orange">HTML5</font>
form|定义输入字段所属的一个或多个表单。取值：<br>form_id|<font color="orange">HTML5</font>
name|定义对象的唯一名称。取值：<br>name|<font color="orange">HTML5</font>
标准属性|
全局属性|支持 HTML 的全局属性。
事件属性|支持 HTML 的事件属性。