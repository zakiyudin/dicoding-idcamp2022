const { EventEmitter } = require('events')

const myEven = new EventEmitter()

myEven.on('bithday', (nama) => {
    console.log(`HBD ${nama}`);
})
myEven.emit('birthday', 'kamil')