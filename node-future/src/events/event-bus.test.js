/**
 * event-bus.test
 *
 * @author GuoBin on 2019-07-16
 */
'use strict';
const EventBus = require('./EventBus');
const bus = new EventBus();
/**
 * external  v8内部c++对象占用
 * heapTotal 堆占用内存（使用到+未使用）
 * heapUsed
 * rss 总内存占用
 */
console.log(process.memoryUsage());

function Person(name) {
  this.name = name;
  this.notice = (data) => {
    console.log(`i am ${name}; i receive ${data}`);
  }
}

const jack = new Person('jack');
const tom = new Person('tom');
const mary = new Person('mary');

bus.register('people', jack);
bus.register('people', tom);
bus.register('women', mary);

bus.notify('people', 'hello people');
bus.notify('women', 'women message');

bus.unregister('people', jack);
bus.notify('people', '删除之后');
