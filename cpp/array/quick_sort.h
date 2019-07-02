//
// Created by 郭斌 on 2019-07-02.
//

#ifndef ARRAY_QUICK_SORT_H
#define ARRAY_QUICK_SORT_H

#include <iostream>

namespace QuickSort {

    template<typename T>
    int _partition(T arr[], int l, int r) {
        T v = arr[l];
        int j = l;
        for (int i = l + 1; i <= r; i++) {
            if (arr[i] < v) {
                std::swap(arr[j + 1], arr[i]);
                j++;
            }
        }
        std::swap(arr[l], arr[j]);
        return j;
    }

    template<typename T>
    void _quickSort(T arr[], int l, int r) {
        if (l >= r) {
            return;
        } else {
            int p = _partition(arr, l, r);
            _quickSort(arr, l, p - 1);
            _quickSort(arr, p + 1, r);
        }
    }

    template<typename T>
    void QuickSort(T arr[], int n) {
        _quickSort(arr, 0, n - 1);
    }

}

#endif //ARRAY_QUICK_SORT_H
