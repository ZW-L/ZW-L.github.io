function* foo() {
  yield 'hello'
  yield 'world'
  return 'Awesome Javascript!'
}

function* bar(foo) {
  yield 'start'
  const ret = yield* foo()  // 获取 foo* () 返回的值
  yield ret
  yield 'end'
}

console.log([...bar(foo)])  // [ 'start', 'hello', 'world', 'Awesome Javascript!', 'end' ]