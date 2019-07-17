/**
 * promise
 *
 * @author GuoBin on 2019-07-16
 */
'use strict';

function noop() {}

class PromisePro {
  _deferredState;
  _state;
  _value;
  _deferred;

  _onHandle;
  _onReject;
  _noop;

  static all(list) {

  }

  static race(list) {

  }

  static resolve(value) {

  }

  static reject(reason) {

  }

  constructor(fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('Promise constructor\'s argument is not a function');
    }
    this._deferredState = 0;
    this._state = 0;
    this._value = null;
    this._deferred = null;
    if (fn === noop) {
      return;
    }
    this._doResolve(fn);
  }

  then(callback) {
    callback();
  }

  catch(callback) {
    callback()
  }

  finally(callback) {
    callback()
  }

  allSettled(list) {

  }

  _doResolve(f) {

  }
}
