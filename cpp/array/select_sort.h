//
// Created by 郭斌 on 2019-06-29.
//

#ifndef ARRAY_SELECT_SORT_H
#define ARRAY_SELECT_SORT_H

namespace SelectSort {
    /**
     * 选择排序
     * @param arr
     * @param size
     */
    void SelectSort(int arr[], int size) {
        int minIndex;
        int temp;
        for (int i = 0; i < size; i++) {
            minIndex = i;
            for (int j = i + 1; j < size; j++) {
                if (arr[minIndex] > arr[j]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }
}

#endif //ARRAY_SELECT_SORT_H
