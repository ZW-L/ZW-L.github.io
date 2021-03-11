## [assert](http://nodejs.cn/api/assert.html)

+ 提供一组简单的断言测试，可用于测试不变量
+ 抛出的所有错误都将是 `assert.AssertionError` 类的实例
+ 该模块提供了建议的严格模式和更宽松的遗留模式

**API：**

+ `new assert.AssertionError(options)`：
+ `assert(value[, message])`：
+ `assert.deepEqual(actual, expected[, message])`：
+ `assert.deepStrictEqual(actual, expected[, message])`：
+ `assert.doesNotReject(asyncFn[, error][, message])`：
+ `assert.doesNotThrow(fn[, error][, message])`：
+ `assert.equal(actual, expected[, message])`：
+ `assert.fail([message])`：
+ `assert.fail(actual, expected[, message[, operator[, stackStartFn]]])`：
+ `assert.ifError(value)`：
+ `assert.notDeepEqual(actual, expected[, message])`：
+ `assert.notDeepStrictEqual(actual, expected[, message])`：
+ `assert.notEqual(actual, expected[, message])`：
+ `assert.notStrictEqual(actual, expected[, message])`：
+ `assert.ok(value[, message])`：
+ `assert.rejects(asyncFn[, error][, message])`：
+ `assert.strictEqual(actual, expected[, message])`：
+ `assert.throws(fn[, error][, message])`：

