## 面向对象编程

### 立即执行函数（IIFE）和模块创建

**1.IIFE**

​以下列形式创建一个立即执行函数（IIFE）。

```javascript
(function () {
  console.log("A cozy nest is ready");
})();  // A cozy nest is ready
```

**2.创建一个模块**

​其中模块返回一个对象，隐藏了实现的细节。

```javascript
let funModule = (function() {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
      	return true;
      }
    },
    singMixin: function(obj) {
      obj.sing = function() {
      	console.log('Singing to an awesome tune');
      }
    }
  }
})();

let bird = {
  name: 'Alice'
}
funModule.singMixin(bird);
bird.sing();  // Singing to an awesome tune.
```







