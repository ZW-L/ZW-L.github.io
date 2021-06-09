let executeAsync;
if (typeof process === "object" && process.nextTick) {
  executeAsync = process.nextTick;
} else if (typeof setImmediate === "function") {
  executeAsync = setImmediate;
} else {
  executeAsync = function (fn) { setTimeout(fn, 0); };
}

function callAsync(fn, arg, cb, errorCb) {
  executeAsync(function() {
    try {
      cb ? cb(fn(arg)) : fn(arg);
    } catch (e) {
      errorCb(e);
    }
  });
}


const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(handler) {
    this.status = PENDING;    // 初始化状态
    this.value = undefined;   // 定义状态变更后访问的值
    this.fulfilledQueue = [];
    this.rejectedQueue = [];

    try {
      handler.call(this, onFulfilled, onRejected);
    } catch (error) {
      onRejected(error);
    }
  }

  _resolve(value) {
    if (this.status !== PENDING) return ;
    this.status = FULFILLED;
    const runFulfilled = val => {
      let cb;
      while (cb = this.fulfilledQueue.shift()) {
        cb(val);
      }
    }
    const runRejected = reason => {
      let cb;
      while (cb = this.rejectedQueue().shift()) {
        cb(reason);
      }
    }

    if (value instanceof MyPromise) {
      value.then(value2 => {
        this.value = value2;
        runFulfilled(value2);
      }, error => {
        this.value = error;
        runRejected(error);
      })
    } else {
      this.value = value;
      runFulfilled(value);
    }
  }

  _reject(reason) {
    if (this.status !== PENDING) return;
    this.status = REJECTED;
    this.value = reason;
    let cb;
    while (cb = this.rejectedQueue.shift()) {
      cb(reason);
    }
  }

  then(onFulfilled, onRejected) {
    // 返回一个新的 MyPromise 实例
    return new MyPromise((onFulfilledNext, onRejectedNext) => {
      // 成功回调
      const fulfilled = value => {
        if (isFunction(onFulfilled)) {
          callAsync(onFulfilled, value, res => {
            if (res instanceof MyPromise) {
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              onFulfilledNext(res);
            }
          }, onRejectedNext);
        } else {
          try {
            onFulfilledNext(value);
          } catch (error) {
            onRejectedNext(error);
          }
        }
      };
      // 失败回调
      const rejected = error => {
        if (isFunction(onRejected)) {
          callAsync(onRejected, error, res => {
            if (res instanceof MyPromise) {
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              onFulfilledNext(res);
            }
          }, onRejectedNext);
        } else {
          try {
            onRejectedNext(error);
          } catch (error2) {
            onRejectedNext(error2);
          }
        }
      }

      switch (this.status) {
        case PENDING:
          this.fulfilledQueue.push(fulfilled);
          this.rejectedQueue.push(rejected);
          break;
        case FULFILLED:
          fulfilled(this.value);
          break;
        case REJECTED:
          rejected(this.value);
          break;
      }
    });
  }

  catch() {}
  finally() {}
  static all() {}
  static race() {}
  static allSettled() {}
  static any() {}
  static resolve() {}
  static reject() {}
}

module.exports = MyPromise;