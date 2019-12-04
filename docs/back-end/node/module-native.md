## 简介

+ `assert`: 
+ `child_process`: 
+ `cluster`: 
+ `crypto`: 
+ `dgram`: 
+ `dns`: 
+ `events`: 
+ `fs`: 
+ `http`: 
+ `http2`: 
+ `https`: 
+ `inspector`: 
+ `net`: 
+ `os`: 
+ `path`: 
+ `url`: 
+ `util`: 
+ `zlib`: 

## [assert](http://nodejs.cn/api/assert.html)

+ 提供一组简单的断言测试，可用于测试不变量
+ 抛出的所有错误都将是 `assert.AssertionError` 类的实例
+ 该模块提供了建议的严格模式和更宽松的遗留模式

**API：**

+ `new assert.AssertionError(options)`: 
+ `assert(value[, message])`: 
+ `assert.deepEqual(actual, expected[, message])`: 
+ `assert.deepStrictEqual(actual, expected[, message])`: 
+ `assert.doesNotReject(asyncFn[, error][, message])`: 
+ `assert.doesNotThrow(fn[, error][, message])`: 
+ `assert.equal(actual, expected[, message])`: 
+ `assert.fail([message])`: 
+ `assert.fail(actual, expected[, message[, operator[, stackStartFn]]])`: 
+ `assert.ifError(value)`: 
+ `assert.notDeepEqual(actual, expected[, message])`: 
+ `assert.notDeepStrictEqual(actual, expected[, message])`: 
+ `assert.notEqual(actual, expected[, message])`: 
+ `assert.notStrictEqual(actual, expected[, message])`: 
+ `assert.ok(value[, message])`: 
+ `assert.rejects(asyncFn[, error][, message])`: 
+ `assert.strictEqual(actual, expected[, message])`: 
+ `assert.throws(fn[, error][, message])`: 


## [child_process](http://nodejs.cn/api/child_process.html)

+ 创建异步的进程
+ 创建同步的进程
+ ChildProcess 类

## [cluster](http://nodejs.cn/api/cluster.html)

+ Worker 类
+ `cluster.disconnect([callback])`: 
+ `cluster.fork([env])`: 
+ `cluster.isMaster`: 
+ `cluster.isWorker`: 
+ `cluster.schedulingPolicy`: 
+ `cluster.settings`: 
+ `cluster.setupMaster([settings])`: 
+ `cluster.worker`: 
+ `cluster.workers`: 

## [crypto](http://nodejs.cn/api/crypto.html)

+ Certificate 类
+ Cipher 类
+ Decipher 类
+ DiffieHellman 类
+ DiffieHellmanGroup 类
+ Hash 类
+ Hmac 类
+ KeyObject 类
+ Sign 类
+ Verify 类


## [dgram](http://nodejs.cn/api/dgram.html)

+ dgram.Socket 类
+ `dgram.createSocket(options[, callback])`
+ `dgram.createSocket(type[, callback])`

## [dns](http://nodejs.cn/api/dns.html)

+ dns.Resolver 类
+ `resolver.cancel()`
+ `dns.getServers()`
+ `dns.lookup(hostname[, options], callback)`
+ `dns.lookupService(address, port, callback)`
+ `dns.resolve(hostname[, rrtype], callback)`
+ `dns.resolve4(hostname[, options], callback)`
+ `dns.resolve6(hostname[, options], callback)`
+ `dns.resolveAny(hostname, callback)`
+ `dns.resolveCname(hostname, callback)`
+ `dns.resolveMx(hostname, callback)`
+ `dns.resolveNaptr(hostname, callback)`
+ `dns.resolveNs(hostname, callback)`
+ `dns.resolvePtr(hostname, callback)`
+ `dns.resolveSoa(hostname, callback)`
+ `dns.resolveSrv(hostname, callback)`
+ `dns.resolveTxt(hostname, callback)`
+ `dns.reverse(ip, callback)`
+ `dns.setServers(servers)`

## [events](http://nodejs.cn/api/events.html)

+ EventEmitter 类
+ events.once(emitter, name)

## [fs](http://nodejs.cn/api/fs.html)

+ fs.Dir 类
+ fs.Dirent 类
+ fs.FSWatcher 类
+ fs.ReadStream 类
+ fs.Stats 类
+ fs.WriteStream 类
+ ...

## [http](http://nodejs.cn/api/http.html)

+ http.Agent 类
+ http.ClientRequest 类
+ http.Server 类
+ http.ServerResponse 类
+ http.IncomingMessage 类
+ http.METHODS 类
+ http.STATUS_CODES 类
+ `http.createServer([options][, requestListener])`: 
+ `http.get(options[, callback])`: 
+ `http.get(url[, options][, callback])`: 
+ `http.globalAgent`: 
+ `http.maxHeaderSize`: 
+ `http.request(options[, callback])`: 
+ `http.request(url[, options][, callback])`: 


## [http2](http://nodejs.cn/api/http2.html)

+ Http2Session 类
+ ServerHttp2Session 类
+ ClientHttp2Session 类
+ Http2Stream 类
+ ClientHttp2Stream 类
+ ServerHttp2Stream 类
+ Http2Server 类
+ Http2SecureServer 类
+ `http2.createServer(options[, onRequestHandler])`: 
+ `http2.createSecureServer(options[, onRequestHandler])`: 
+ `http2.connect(authority[, options][, listener])`: 
+ `http2.constants`: 
+ `http2.getDefaultSettings()`: 
+ `http2.getPackedSettings([settings])`: 
+ `http2.getUnpackedSettings(buf)`: 

## [https](http://nodejs.cn/api/https.html)

+ https.Agent 类
+ https.Server 类
+ `https.createServer([options][, requestListener])`: 
+ `https.get(options[, callback])`: 
+ `https.get(url[, options][, callback])`: 
+ `https.globalAgent`: 
+ `https.request(options[, callback])`: 
+ `https.request(url[, options][, callback])`: 

## [inspector](http://nodejs.cn/api/inspector.html)

+ inspector.close()
+ inspector.console
+ inspector.open([port[, host[, wait]]])
+ inspector.url()
+ inspector.waitForDebugger()
+ inspector.Session 类

## [net](http://nodejs.cn/api/net.html)

+ net.Server
+ net.Socket
+ net.connect()
+ net.createConnection()
+ `net.createServer([options][, connectionListener])`: 
+ `net.isIP(input)`: 
+ `net.isIPv4(input)`: 
+ `net.isIPv6(input)`: 

## [os](http://nodejs.cn/api/os.html)

+ `os.EOL`: 
+ `os.arch()`: 
+ `os.constants`: 
+ `os.cpus()`: 
+ `os.endianness()`: 
+ `os.freemem()`: 
+ `os.getPriority([pid])`: 
+ `os.homedir()`: 
+ `os.hostname()`: 
+ `os.loadavg()`: 
+ `os.networkInterfaces()`: 
+ `os.platform()`: 
+ `os.release()`: 
+ `os.setPriority([pid, ]priority)`: 
+ `os.tmpdir()`: 
+ `os.totalmem()`: 
+ `os.type()`: 
+ `os.uptime()`: 
+ `os.userInfo([options])`: 
+ os 常量

## [path](http://nodejs.cn/api/path.html)

+ `path.basename(path[, ext])`: 
+ `path.delimiter`: 
+ `path.dirname(path)`: 
+ `path.extname(path)`: 
+ `path.format(pathObject)`: 
+ `path.isAbsolute(path)`: 
+ `path.join([...paths])`: 
+ `path.normalize(path)`: 
+ `path.parse(path)`: 
+ `path.posix`: 
+ `path.relative(from, to)`: 
+ `path.resolve([...paths])`: 
+ `path.sep`: 
+ `path.toNamespacedPath(path)`: 
+ `path.win32`: 


## [url](http://nodejs.cn/api/url.html)

+ URL 类
+ URLSearchParams 类
+ url.domainToASCII(domain)
+ url.domainToUnicode(domain)
+ url.fileURLToPath(url)
+ url.format(URL[, options])
+ url.pathToFileURL(path)


## [util](http://nodejs.cn/api/util.html)

+ `util.callbackify(original)`: 
+ `util.debuglog(section)`: 
+ `util.deprecate(fn, msg[, code])`: 
+ `util.format(format[, ...args])`: 
+ `util.formatWithOptions(inspectOptions, format[, ...args])`: 
+ `util.getSystemErrorName(err)`: 
+ `util.inherits(constructor, superConstructor)`: 
+ `util.inspect(object[, options])`: 
+ `util.inspect(object[, showHidden[, depth[, colors]]])`: 
+ `util.isDeepStrictEqual(val1, val2)`: 
+ `util.promisify(original)`: 
+ util.TextDecoder 类 
+ util.TextEncoder 类
+ util.types 类

## [zlib](http://nodejs.cn/api/zlib.html)

+ Options 类
+ BrotliOptions 类
+ zlib.BrotliCompress 类
+ zlib.BrotliDecompress 类
+ zlib.Deflate 类
+ zlib.DeflateRaw 类
+ zlib.Gunzip 类
+ zlib.Gzip 类
+ zlib.Inflate 类
+ zlib.InflateRaw 类
+ zlib.Unzip 类
+ zlib.ZlibBase 类
+ zlib.constants
+ `zlib.createBrotliCompress([options])`: 
+ `zlib.createBrotliDecompress([options])`: 
+ `zlib.createDeflate([options])`: 
+ `zlib.createDeflateRaw([options])`: 
+ `zlib.createGunzip([options])`: 
+ `zlib.createGzip([options])`: 
+ `zlib.createInflate([options])`: 
+ `zlib.createInflateRaw([options])`: 
+ `zlib.createUnzip([options])`: 
