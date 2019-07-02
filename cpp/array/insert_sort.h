//
// Created by 郭斌 on 2019-06-29.
//

#ifndef ARRAY_INSERT_SORT_H
#define ARRAY_INSERT_SORT_H

#include <iostream>

namespace InsertSort {
    /**
     * 插入排序
     * @param arr
     * @param size
     */
    template<typename T>
    void InsertSort(T arr[], int size) {
        for (int i = 1; i < size; i++) {
            // 寻找arr[i]合适的插入位置
            for (int j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    std::swap(arr[j], arr[j - 1]);
                } else {
                    break;
                }
            }
        }
    }

    template <typename T>
    void InsertSort2(T arr[], int size) {
        for (int i = 1; i < size; i++) {
            // 寻找arr[i]合适的插入位置
            T e = arr[i];
            int j;
            for (j = i; j > 0 && arr[j - 1] > e; j--) {
                arr[j] = arr[j-1];
            }
            arr[j] = e;
        }
    }
};


#endif //ARRAY_INSERT_SORT_H
