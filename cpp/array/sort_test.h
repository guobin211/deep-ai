//
// Created by 郭斌 on 2019-06-30.
//

#ifndef ARRAY_SORT_TEST_H
#define ARRAY_SORT_TEST_H

#include <iostream>
#include <random>

namespace SortTest {
    int* copyIntArray(int arr[], int n) {
        int* res = new int[n];
        std::copy(arr, arr + n, res);
        return res;
    }

    int *generateArray(int n, int rangeL, int rangeR) {
        assert(rangeL < rangeR);
        int *arr = new int[n];
        for (int i = 0; i < n; ++i) {
            arr[i] = random() % (rangeR - rangeL + 1) + rangeL;
        }
        return arr;
    }

    template<typename T>
    void printArray(T arr[], int n) {
        for (int i = 0; i < n; i++) {
            std::cout << arr[i] << " ";
        }
        std::cout << std::endl;
    }

    template<typename T>
    void testSort(const std::string &sortName, void(*sort)(T[], int), T arr[], int n) {
        clock_t timeStart = clock();
        sort(arr, n);
        clock_t timeEnd = clock();
        std::cout << sortName << " : " << double(timeEnd - timeStart) / CLOCKS_PER_SEC << "s" << std::endl;
    }
}

#endif //ARRAY_SORT_TEST_H
