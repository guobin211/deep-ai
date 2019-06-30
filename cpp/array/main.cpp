#include <iostream>
#include <vector>
#include <algorithm>
#include <random>
#include "select_sort.h"
#include "sort_util.h"
#include "sort_test.h"

using namespace std;

/**
 * 重写 compare 接口方法
 * @param a
 * @param b
 * @return
 */
bool compare(int a, int b) {
    return a < b;
}

/**
 * 冒泡排序
 * @param arr
 * @param size
 */
void BubbleSort(int arr[], int size) {
    for (int i = size - 1; i > 0; i--) {
        for (int j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main(int argc, char *argv[]) {
    int length = 100000;
    int data[length];

    for (int m = 0; m < length; m++) {
        data[m] = (random() % 10000);
    }
    cout << data[0] << "--" << data[length - 1] << endl;
    BubbleSort(data, length);
    SELECT_SORT::SelectSort(data, length);
    cout << data[0] << "--" << data[length - 1] << endl;

    int *intArr = SortTest::generateArray(length, 0, length);
    SELECT_SORT::SelectSort(intArr, length);
    SortTest::printArray(intArr, length);
    delete[] intArr;

    int arr[5] = {1, 2, 3, 4, 5};

    cout << "variable bytes: " << sizeof(arr) << endl;
    cout << "element bytes: " << sizeof(arr[0]) << endl;
    cout << "length: " << size(arr) << endl;

    for (int i : arr) {
        cout << i << endl;
    }
    // 二维数组
    int tdArray[3][3] = {{7, 8, 9},
                         {4, 5, 6},
                         {1, 2, 3}};

    for (auto &j : tdArray) {
        for (int i = 0; i < size(j); ++i) {
            cout << j[i];
        }
        cout << endl;
    }

    // 向量
    vector<vector<int>> intArray;
    vector<int> obj;

    obj.reserve(10);
    for (int k = 1; k < 4; k++) {
        obj.push_back(k);
    }
    obj.push_back(0);

    for (int l : obj) {
        cout << l << endl;
    }
    // 排序
    sort(obj.begin(), obj.end());

    return 0;
}
