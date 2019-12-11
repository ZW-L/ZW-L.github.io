const buf5 = Buffer.from(new ArrayBuffer(3))
buf5.fill('A')
console.log(buf5.toString()) // AAA