/**
 * process-events.test
 *
 * @author GuoBin on 2019-06-30
 */
'use strict';
const processEvents = require('./process-events');
const handleA = (msg) => {
  console.log('handleA: ' + msg);
};
const handleB = (msg) => {
  console.log('handleB: ' + msg);
};

processEvents.on('eventName', (message) => {
  console.log('eventName: ' + message);
});
processEvents.on('event', (msg) => {
  handleA(msg);
  handleB(msg);
});

processEvents.on('event', (msg) => {
  console.log('同一个事件的第二个侦听器');
});

function sendMessage() {
  processEvents.emit('eventName', '发射事件');
  processEvents.emit('event', 'event send message');
  setInterval(() => {
    processEvents.emit('event', '定时事件');
  }, 2000);
}
// 2
console.log(processEvents.getListenerCount('event'));
// [ [Function], [Function] ]
console.log(processEvents.listeners('event'));

sendMessage();
