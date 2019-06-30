const SORT_TEST = require('./sort-test.js');

const bubbleSort = (arr) => {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
       for (let j = 0; j < arr.length -1 - i; j++) {
           if(arr[j] > arr[j+1]) {
                temp = arr[j+1];
                arr[j +1] = arr[j];
                arr[j] = temp;
           }
       }
    }
}
const arr =  [];
SORT_TEST.generateArray(arr, 10000, 0, 1000);
// SORT_TEST.testArray(arr);
console.time();
bubbleSort(arr);
console.timeEnd();
// SORT_TEST.testArray(arr);

