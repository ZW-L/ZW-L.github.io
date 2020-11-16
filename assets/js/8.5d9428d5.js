(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{368:function(v,_,t){v.exports=t.p+"assets/img/tcp-ip.26cd9ac1.png"},369:function(v,_,t){v.exports=t.p+"assets/img/tcp3.124f8a09.png"},370:function(v,_,t){v.exports=t.p+"assets/img/tcp4.aecba63e.png"},371:function(v,_,t){v.exports=t.p+"assets/img/ipv4-address.3d37ef56.png"},550:function(v,_,t){"use strict";t.r(_);var s=t(25),r=Object(s.a)({},(function(){var v=this,_=v.$createElement,s=v._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[s("h2",{attrs:{id:"tcp-ip-协议簇"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-协议簇"}},[v._v("#")]),v._v(" TCP/IP 协议簇")]),v._v(" "),s("p",[s("code",[v._v("TCP/IP")]),v._v("(Transition Control Protocol/Internet Protocol, 传输控制协议/网络互联协议)是一组用于实现网络互联的通信协议，是 Internet 最基本的协议和互联网络的基础。")]),v._v(" "),s("h3",{attrs:{id:"分层结构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分层结构图"}},[v._v("#")]),v._v(" 分层结构图")]),v._v(" "),s("p",[s("img",{attrs:{src:t(368),alt:"TCP/IP 分层结构"}})]),v._v(" "),s("h3",{attrs:{id:"每层协议的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每层协议的作用"}},[v._v("#")]),v._v(" 每层协议的作用")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("应用层")]),v._v(": 应用级别的最高层协议\n"),s("ul",[s("li",[s("strong",[v._v("HTTP")]),v._v(": 超本文传输协议，提供超文本传输功能")]),v._v(" "),s("li",[s("strong",[v._v("DNS")]),v._v(": 域名服务协议，提供域名和 IP 地址的转换，允许对域名资源进行分布式管理")]),v._v(" "),s("li",[s("strong",[v._v("TELNET")]),v._v(": 远程登录协议，能利用 TCP 连接登录远程主机")]),v._v(" "),s("li",[s("strong",[v._v("FTP")]),v._v(": 文件传输协议，为用户提供本地机与远程机之间的文件传输服务")]),v._v(" "),s("li",[s("strong",[v._v("SMTP")]),v._v(": 简单邮件传输协议，规定两个相互通信的 SMTP 进程之间交换邮件信息的规则")])])]),v._v(" "),s("li",[s("strong",[v._v("传输层")]),v._v(": 负责在源主机和目标主机之间提供端到端的数据传输服务\n"),s("ul",[s("li",[s("strong",[v._v("TCP")]),v._v(": 面向连接的传输控制协议，提供用户之间的面向连接的可靠文件传输服务")]),v._v(" "),s("li",[s("strong",[v._v("UDP")]),v._v(": 无连接的用户数据包协议，提供用户之间的无连接的不可靠报文传输服务")])])]),v._v(" "),s("li",[s("strong",[v._v("网络互联层")]),v._v(": 提供互联网络环境下端到端的数据分组传输服务，采用无连接交换方式来实现\n"),s("ul",[s("li",[s("strong",[v._v("IP")]),v._v(": 提供数据包按 IP 地址传输，路由选择等功能")]),v._v(" "),s("li",[s("strong",[v._v("ARP")]),v._v(": 提供 IP 地址到物理地址的映射功能")]),v._v(" "),s("li",[s("strong",[v._v("RARP")]),v._v(": 提供物理地址到 IP 地址的映射功能")]),v._v(" "),s("li",[s("strong",[v._v("ICMP")]),v._v(": 提供传输差错控制信息以及主机和路由器之间的控制信息")])])]),v._v(" "),s("li",[s("strong",[v._v("网络接口层")]),v._v(": 负责将 IP 分组封装成适合在物理网络上传输的帧并发送出去，或将从物理网络接收的帧解封并将 IP 分组递交给高层协议")])]),v._v(" "),s("h2",{attrs:{id:"tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[v._v("#")]),v._v(" TCP")]),v._v(" "),s("h3",{attrs:{id:"tcp-协议的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议的特点"}},[v._v("#")]),v._v(" TCP 协议的特点")]),v._v(" "),s("ul",[s("li",[v._v("面向流的投递服务")]),v._v(" "),s("li",[v._v("面向连接的投递服务")]),v._v(" "),s("li",[v._v("可靠传输服务")]),v._v(" "),s("li",[v._v("提供强制性传输和缓传输两种手段")]),v._v(" "),s("li",[v._v("全双工传输")]),v._v(" "),s("li",[v._v("流量控制")])]),v._v(" "),s("h3",{attrs:{id:"tcp-协议怎样保证可靠传输"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议怎样保证可靠传输"}},[v._v("#")]),v._v(" TCP 协议怎样保证可靠传输")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("序列号")]),v._v("：TCP 给发送的每一个包进行编号，接收方对数据包进行排序，把有序数据传送给应用层")]),v._v(" "),s("li",[s("strong",[v._v("校验和")]),v._v("：TCP 将保持它首部和数据的检验和(端到端的检验和，用于检测数据在传输过程中的变化)，若收到段的检验和有差错，将丢弃该报文段并不会确认收到此报文段")]),v._v(" "),s("li",[s("strong",[v._v("确认应答")]),v._v("：传输的过程中，每次接收方收到数据后，都会对传输方进行确认应答")]),v._v(" "),s("li",[s("strong",[v._v("连接管理")]),v._v("：三次握手、四次挥手")]),v._v(" "),s("li",[s("strong",[v._v("流量控制")]),v._v("：TCP 连接的双方都有固定大小的缓冲空间，当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失")]),v._v(" "),s("li",[s("strong",[v._v("拥塞控制")]),v._v("：当网络拥塞时，减少数据的发送")]),v._v(" "),s("li",[s("strong",[v._v("超时重传")]),v._v("：发出一个段后，启动定时器等待目的端确认收到该报文段，若不能及时收到确认将重发该报文段")]),v._v(" "),s("li",[s("strong",[v._v("停止等待")]),v._v(": 每发完一个分组就停止发送，等待对方确认，在收到确认后再发下一个分组")])]),v._v(" "),s("h3",{attrs:{id:"三次握手-四次挥手-优缺点-为什么要使用这些机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次握手-四次挥手-优缺点-为什么要使用这些机制"}},[v._v("#")]),v._v(" 三次握手 & 四次挥手 & 优缺点 & 为什么要使用这些机制")]),v._v(" "),s("p",[s("strong",[v._v("三次握手：")])]),v._v(" "),s("p",[s("img",{attrs:{src:t(369),alt:"三次握手"}})]),v._v(" "),s("ol",[s("li",[v._v("客户端发送报文给服务器，请求建立连接")]),v._v(" "),s("li",[v._v("服务器响应报文，回应客户端可以建立连接，并处于等待连接状态")]),v._v(" "),s("li",[v._v("客户端再次发送报文给服务器，完成建立连接")])]),v._v(" "),s("p",[s("strong",[v._v("四次握手：")])]),v._v(" "),s("p",[s("img",{attrs:{src:t(370),alt:"四次握手"}})]),v._v(" "),s("p",[s("strong",[v._v("优缺点：")])]),v._v(" "),s("ul",[s("li",[v._v("优点：保证了传输数据过程的稳定性(通过三次握手建立了连接)")]),v._v(" "),s("li",[v._v("缺点：\n"),s("ul",[s("li",[v._v("三次握手消耗时间")]),v._v(" "),s("li",[v._v("服务器保持连接会消耗资源")]),v._v(" "),s("li",[v._v("服务器不能主动给客户端发送信息(一般采取轮询来让客户端定时向服务端发送请求)")])])])]),v._v(" "),s("h2",{attrs:{id:"ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip"}},[v._v("#")]),v._v(" IP")]),v._v(" "),s("h3",{attrs:{id:"ip-的功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip-的功能"}},[v._v("#")]),v._v(" IP 的功能")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("寻址")]),v._v("：网络上的主机都用 IP 地址来标识，每个 IP 数据包中都携带分别标识源主机和目标主机的 IP 地址")]),v._v(" "),s("li",[s("strong",[v._v("数据报的路由转发")]),v._v("：网络上的每个中间节点(路由器)都根据 IP 数据包中接收方的目标 IP 地址来确定是本网传送还是跨网传送")]),v._v(" "),s("li",[s("strong",[v._v("数据报分段和重组")]),v._v("：由于 IP 数据报可能会在不同的通信网络中传输，而且不同网络的数据链路层可传输的数据帧的最大长度不同，因此 IP 会根据不同的情况(数据报中的分段和重组标识)来对数据报进行分段组装后再交给上层协议")])]),v._v(" "),s("h3",{attrs:{id:"ip-提供的服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip-提供的服务"}},[v._v("#")]),v._v(" IP 提供的服务")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("不可靠的投递服务")]),v._v("：IP 的任务是通过互联网传送数据报，所以其不关心在传输过程中数据包的丢失、重复传输、延迟、乱序等问题，也不将结果告知收发双方")]),v._v(" "),s("li",[s("strong",[v._v("无连接的投递服务")]),v._v("：因为每个 IP 数据报都是独立处理和传输的，同一台主机发出的数据报在网络中可能会经过不同的路径，到达接收方时可能会乱序甚至丢失")]),v._v(" "),s("li",[s("strong",[v._v("尽力的投递服务")]),v._v("：只要有希望就会向前投递，不会轻易丢失数据报")])]),v._v(" "),s("h3",{attrs:{id:"ip-地址简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址简介"}},[v._v("#")]),v._v(" IP 地址简介")]),v._v(" "),s("ul",[s("li",[v._v("当前使用的 IP 地址版本为 IPv4，用 32 位二进制数组成，同时按照每 8 位为一段将其转化为十进制的形式(如 "),s("code",[v._v("202.119.2.199")]),v._v(")来简化记忆")]),v._v(" "),s("li",[v._v("IP 地址 = 网络 ID + 主机 ID\n"),s("ul",[s("li",[v._v("网络 ID：具有唯一性，用来识别入网主机所在的网络")]),v._v(" "),s("li",[v._v("主机 ID：在同一网络中唯一，用来区分该网络中的不同主机")])])]),v._v(" "),s("li",[v._v("IP 地址使寻址更方便，会先按网络 ID 找到网络，再按主机 ID 找到主机")])]),v._v(" "),s("h3",{attrs:{id:"ip-地址分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址分类"}},[v._v("#")]),v._v(" IP 地址分类")]),v._v(" "),s("p",[v._v("IP 地址分为 A、B、C、D、E 五类，可分配使用的为前三类，D 类为多播地址，E 类保留用作特殊用途。其中，从 IP 地址的前几位很容易看出所属的类别：")]),v._v(" "),s("p",[s("img",{attrs:{src:t(371),alt:"IPv4 地址"}})]),v._v(" "),s("p",[s("strong",[v._v("区别：")])]),v._v(" "),s("table",[s("thead",[s("tr",[s("th",[v._v("分类")]),v._v(" "),s("th",[v._v("前缀")]),v._v(" "),s("th",[v._v("网络个数")]),v._v(" "),s("th",[v._v("每个网络可容纳主机")])])]),v._v(" "),s("tbody",[s("tr",[s("td",[v._v("A")]),v._v(" "),s("td",[v._v("0")]),v._v(" "),s("td",[v._v("126")]),v._v(" "),s("td",[v._v("16777214(2^24-2)")])]),v._v(" "),s("tr",[s("td",[v._v("B")]),v._v(" "),s("td",[v._v("10")]),v._v(" "),s("td",[v._v("16382")]),v._v(" "),s("td",[v._v("65534(2^16-2)")])]),v._v(" "),s("tr",[s("td",[v._v("C")]),v._v(" "),s("td",[v._v("110")]),v._v(" "),s("td",[v._v("209 万")]),v._v(" "),s("td",[v._v("254(2^8-2)")])]),v._v(" "),s("tr",[s("td",[v._v("D")]),v._v(" "),s("td",[v._v("1110")]),v._v(" "),s("td"),v._v(" "),s("td")]),v._v(" "),s("tr",[s("td",[v._v("E")]),v._v(" "),s("td",[v._v("11110")]),v._v(" "),s("td"),v._v(" "),s("td")])])]),v._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[v._v("说明：")]),v._v(" "),s("ul",[s("li",[v._v("A 类地址一般分配给具有大量主机的网络使用")]),v._v(" "),s("li",[v._v("B 类地址一般分配给规模中等的网络使用")]),v._v(" "),s("li",[v._v("C 类地址一般分配给小型局域网使用")])])]),v._v(" "),s("h3",{attrs:{id:"特殊的-ip-地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊的-ip-地址"}},[v._v("#")]),v._v(" 特殊的 IP 地址")]),v._v(" "),s("ul",[s("li",[s("strong",[v._v("本机地址")]),v._v("：(0.0.0.0)，32位全为 0 的 IP 地址，在本网通信时可用该 IP 地址表示本机地址")]),v._v(" "),s("li",[s("strong",[v._v("有限广播地址")]),v._v("：(255.255.255.255)，32 位全为 1 的 IP 地址，代表本网段内的所有主机，用于在本网络内部广播")]),v._v(" "),s("li",[s("strong",[v._v("直接广播地址")]),v._v("：(x.x.x.255)，主机 ID 为 1 的 IP 地址，一个主机可以使用该地址把数据分组广播给某个网络中的所有节点")]),v._v(" "),s("li",[s("strong",[v._v("网络地址")]),v._v("：(x.x.x.0)，主机 ID 全为 0 的 IP 地址，不分配给任何主机，用于表示某个网络的网络地址")]),v._v(" "),s("li",[s("strong",[v._v("回送地址")]),v._v("：(127.x.x.x)，以数字 127 开头的 IP 地址，是一个保留地址，常用形式为 "),s("code",[v._v("127.0.0.1")])])])])}),[],!1,null,null,null);_.default=r.exports}}]);