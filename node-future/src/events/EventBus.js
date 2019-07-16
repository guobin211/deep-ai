/**
 * EventBus
 *
 * @author GuoBin on 2019-07-16
 */
'use strict';

module.exports = exports = class EventBus {
  constructor() {
    this._observers = new Map();
  }

  /**
   * 注册事件监听
   * @param type
   * @param observer
   */
  register(type, observer) {
    if (typeof type !== 'string') {
      throw new TypeError('type must be string!');
    }
    if (this._observers.has(type)) {
      this._observers.get(type).add(observer);
    } else {
      const _set = new Set();
      _set.add(observer);
      this._observers.set(type, _set);
    }
  }

  /**
   * 移除事件监听
   * @param type
   * @param observer
   */
  unregister(type, observer) {
    if (typeof type !== 'string') {
      throw new TypeError('type must be string!');
    }
    if (this._observers.has(type)) {
      this._observers.get(type).delete(observer);
    }
  }

  /**
   * 广播消息
   * @param type
   * @param message
   */
  notify(type, message) {
    if (typeof type !== 'string') {
      throw new TypeError('type must be string!');
    }
    try {
      this._observers.get(type).forEach(observer => {
        observer.notice(message);
      })
    } catch (e) {
      console.error(e.message);
    }
  }
};
