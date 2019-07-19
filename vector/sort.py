import random
import time

def generator(count, max):
	return [random.randint(0, max) for i in range(count)]


def sort(arr):
	n = len(arr)
	for i in range(n):
		for j in range(0, n - i - 1):
			if arr[j] > arr[j + 1]:
				arr[j], arr[j + 1] = arr[ j+ 1], arr[j]
				

arr = generator(10000, 1000)

t1 = time.time()
sort(arr)
t2 = time.time()

print(t2 - t1)

