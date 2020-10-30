function MyPromise (resolveHandler, rejectHandler) {
  this.resolve = function () {    
    
  }
  this.reject = function () {

  }
  this.then = function (res) {

  }
}

const p1 = new MyPromise(res => {
  console.log(res)
}, err => {
  console.log(err)
})