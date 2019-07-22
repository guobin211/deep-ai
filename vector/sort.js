'use strict';

function generate(count, range) {
	const res = [];
	for (let i = 0; i < count; i++) {
		res.push(Math.random() * range);
	}
	return res;
}

const arr = generate(100000, 1000);

function bubbleSort(arr) {
	let swap;
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = swap;
			}
		}
	}
}

console.time('sort');

bubbleSort(arr);

console.timeEnd('sort')