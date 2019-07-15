'use strict';
module.exports = class Tools {
  static getAttributes(obj) {
    console.log(typeof obj);
    console.log(obj.__proto__);
    return Object.keys(obj);
  }
};
