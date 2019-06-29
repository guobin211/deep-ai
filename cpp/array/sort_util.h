//
// Created by 郭斌 on 2019-06-29.
//

#ifndef ARRAY_SORT_UTIL_H
#define ARRAY_SORT_UTIL_H


class SortUtil {
public:
    /**
     * 插入排序
     * @param arr
     * @param size
     */
    static void InsertSort(int arr[], int size) {
        for (int i = 0; i < size - 1; ++i) {
            int temp = arr[i + 1];
            int j = i;
            while (j >=0 && temp < arr[j]) {
                arr[j + 1] = arr[j];
                --j;
            }
            arr[j + 1] = temp;
        }
    }
};


#endif //ARRAY_SORT_UTIL_H
