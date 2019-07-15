/**
 * async-hooks
 *
 * @author GuoBin on 2019-06-30
 */
'use strict';
const async_hook = require('async_hooks');

const asyncHook = async_hook.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
  },
  before(asyncId) {
  },
  after(asyncId) {
  },
  destroy(asyncId) {
  }
});
