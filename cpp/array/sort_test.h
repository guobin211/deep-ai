//
// Created by 郭斌 on 2019-06-30.
//

#ifndef ARRAY_SORT_TEST_H
#define ARRAY_SORT_TEST_H

#include <iostream>
#include <cassert>

using namespace std;
namespace SortTest{

    int* generateArray(int n, int rangeL, int rangeR) {
        assert(rangeL < rangeR);
        int *arr = new int[n];
        for (int i = 0; i < n; ++i) {
            arr[i] = random() % (rangeR - rangeL + 1) + rangeL;
        }
        return arr;
    }

    template <typename T>
    void printArray(T arr[], int n) {
        for (int i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
}

#endif //ARRAY_SORT_TEST_H
