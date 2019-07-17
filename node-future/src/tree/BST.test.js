/**
 * BST.test
 *
 * @author GuoBin on 2019-07-16
 */
'use strict';
const BST = require('./BST');

const bst = new BST();

console.log(bst.size);

bst.add(1);

console.log(bst.size);

bst.add(3);

// bst.add('a');

console.log(bst.size);

console.log(bst.root);

console.log('b' >= 'a');

console.log(typeof 1);
console.log(typeof 'a');
bst._size = 10;
console.log(bst.__proto__.__proto__);
const obj1 = JSON.parse('{}');
const obj2 = {};
const obj3 = Object.create(null);
console.log(obj1.__proto__);
console.log(obj2.__proto__);
obj3.name = 'obj3';
console.log(obj3);
