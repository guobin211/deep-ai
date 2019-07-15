/**
 * assert-module
 *
 * @author GuoBin on 2019-06-30
 */
'use strict';
const assert = require('assert').strict;
const person = require('./person');
console.log(person);
const obj1 = {
  a: {
    b: 1
  }
};
const obj2 = {
  a: {
    b: 2
  }
};
const obj3 = {
  a: {
    b: 1
  }
};
const obj4 = Object.create(obj1);
assert.deepEqual(obj1, obj1);
console.log('obj1 obj2 is ok');
// 深度断言 递归遍历iterator属性
assert.deepStrictEqual(obj1, obj1);
// AssertionError
// a: {
// +     b: 1
// -     b: 2
//     }
// assert.deepEqual(obj1, obj2);
assert.deepEqual(obj1, obj3);
console.log('obj1 obj3 is ok');
// assert.deepEqual(obj1, obj4);
