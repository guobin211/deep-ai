const SORT_TEST = require('./sort-test.js');

function bubbleSort(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function quickSort(arr) {
    let left = [], right = [];
    const base = arr[arr.length - 1];
    if (arr.length <= 1) return arr;
    for (let i = 0, len = arr.length; i < len - 1; i++) {
        if (arr[i] <= base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), ...[base], ...quickSort(right)]
}

const arr = [];
SORT_TEST.generateArray(arr, 10000, 0, 10000);
// SORT_TEST.testArray(arr);
console.time();
// bubbleSort(arr);
// quickSort(arr);
arr.sort();
console.timeEnd();
// SORT_TEST.testArray(arr);

