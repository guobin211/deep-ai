/**
 * process-events
 *
 * @author GuoBin on 2019-06-30
 */
'use strict';
const EventEmitter = require('events');

class ProcessEvents extends EventEmitter {
  constructor() {
    super();
  }

  /**
   * 获取事件侦听器的数量
   * @param eventName
   * @returns {number}
   */
  getListenerCount(eventName) {
    return EventEmitter.listenerCount(this, eventName);
  }
}

const processEvents = new ProcessEvents();
module.exports = processEvents;
