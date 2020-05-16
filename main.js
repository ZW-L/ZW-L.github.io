const EventEmitter = require('events')

const emitter = new EventEmitter()
emitter.once('log', () => console.log('只记录一次'))

const listeners = emitter.listeners('log')
const rawListeners = emitter.rawListeners('log')

// 执行时不会影响 emitter 的 log 事件
// listeners[0]()
// emitter.emit('log')

// 相当于执行 emitter.emit('log')
rawListeners[0]()
emitter.emit('log')