/**
 * BST
 *
 * @author GuoBin on 2019-07-16
 */
'use strict';

class Node {
  e;
  left;
  right;
  constructor(element) {
    this.e = element;
    this.left = null;
    this.right = null;
  }
}

module.exports = exports = class BST {

  constructor() {
    this._root = null;
    this._size = 0;
    this._type = null;
  }

  add(e) {
    this._root = this._add(this._root, e);
  }

  _add(node, e) {
    if (node === null) {
      this._size++;
      this._type = typeof e;
      return new Node(e);
    }

    if (this._type !== null && this._type !== typeof e) {
      throw new TypeError(`BST element type error: ${this._type}`)
    }
    
    if (e < node.e) {
      node.left = this._add(node.left, e);
    } else if (e > node.right) {
      node.right = this._add(node.right, e);
    }

    return node;
  }

  get size() {
    return this._size;
  }

  get root() {
    return this._root;
  }

};