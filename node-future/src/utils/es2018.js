'use strict';
class Es2018 {
  constructor() {
    this._name = 'ES2018';
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
   * 字符串的填充
   * @param str
   * @param length
   * @param addStr
   * @returns {string}
   */
  static padString(str, length, addStr = '') {
    return str.padStart(length, addStr);
  }
}

const str = 'es2018';
const res = Es2018.padString(str, 8, 'is');
console.log(res);
const obj = new Es2018();
console.log(obj.name);
const people = ['fred', 'tony'];
const person = { name: 'jack', age: 22 };
console.log(Object.values(people));
const obj2 = Object.create(null);
Object.assign(obj2, person);
console.log(obj2);
