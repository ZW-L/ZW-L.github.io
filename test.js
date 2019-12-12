Array.prototype._map = function (callback, thisArg = {}) {
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function!`)
  }
  
  const res = []
  // const target = this
  const context = thisArg
  context.fn = callback
  for (let i = 0; i < this.length; i++) {
    // res.push(context.fn(this[i]))
    res.push(callback.call(thisArg, this[i], i, this, thisArg))
  }

  return res
}

const obj = { name: 'Alice' }
const res = [1, 2, 3]._map(v => {
  console.log(this)
  return `${v}-${this.name}`
}, obj)
console.log(res)