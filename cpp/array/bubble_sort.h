//
// Created by 郭斌 on 2019-07-01.
//

#ifndef ARRAY_BUBBLE_SORT_H
#define ARRAY_BUBBLE_SORT_H

#include <iostream>

namespace BubbleSort {
    /**
     * 冒泡排序 O(N^2)
     * @param arr
     * @param size
     */
    void BubbleSort(int arr[], int size) {
        for (int i = size - 1; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    std::swap(arr[j], arr[j + 1]);
                }
            }
        }
    }
}
#endif //ARRAY_BUBBLE_SORT_H
