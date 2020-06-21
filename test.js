function Person() {}

const p = new Person()
console.log(p.__proto__ === Person.prototype)               // true
console.log(Object.getPrototypeOf(p) === Person.prototype)  // true