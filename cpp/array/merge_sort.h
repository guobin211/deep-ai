//
// Created by 郭斌 on 2019-07-02.
//

#ifndef ARRAY_MERGE_SORT_H
#define ARRAY_MERGE_SORT_H

#include <iostream>

namespace MergeSort {
    /**
     * 合并操作
     * @tparam T
     * @param arr
     * @param l
     * @param mid
     * @param r
     */
    template<typename T>
    void _merge(T arr[], int l, int mid, int r) {
        T aux[r - l + 1];
        for (int i = l; i <= r; i++) {
            aux[i - l] = arr[i];
        }
        int i = l;
        int j = mid + 1;

        for (int k = l; k <= r; k++) {
            if (i > mid) {
                arr[k] = aux[j - l];
                j++;
            } else if (j > r) {
                arr[k] = aux[i - l];
                i++;
            } else if (aux[i - l] < aux[j - l]) {
                arr[k] = aux[i - l];
                i++;
            } else {
                arr[k] = aux[j - l];
                j++;
            }
        }
    }

    template<typename T>
    void _mergeSort(T arr[], int l, int r) {
        if (l >= r) {
            return;
        } else {
            int mid = (l + r) / 2;
            _mergeSort(arr, l, mid);
            _mergeSort(arr, mid + 1, r);
            if (arr[mid] > arr[mid + 1]) {
                _merge(arr, l, mid, r);
            }
        }
    }

    template<typename T>
    void MergeSort(T arr[], int n) {
        _mergeSort(arr, 0, n - 1);
    }
    /**
     * 自底向上归并排序
     * @tparam T
     * @param arr
     * @param n
     */
    template<typename T>
    void MergeSortBU(T arr[], int n) {
        for (int sz = 1; sz <= n; sz += sz) {
            for (int i = 0; i + sz < n; i += sz + sz) {
                _merge(arr, i, i + sz - 1, std::min(i + sz + sz - 1, n - 1));
            }
        }
    }
}

#endif //ARRAY_MERGE_SORT_H
