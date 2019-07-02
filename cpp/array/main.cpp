#include <iostream>
#include "select_sort.h"
#include "insert_sort.h"
#include "sort_test.h"
#include "bubble_sort.h"
#include "merge_sort.h"
#include "quick_sort.h"

using namespace std;

int main(int argc, char *argv[]) {
    int length = 500000;
    int max = 10000;
    int *arr = SortTest::generateArray(length, 0, max);
    int *arr2 = SortTest::copyIntArray(arr, length);
    int *arr3 = SortTest::copyIntArray(arr, length);
    int *arr4 = SortTest::copyIntArray(arr, length);
    int *arr5 = SortTest::copyIntArray(arr, length);
    int *arr6 = SortTest::copyIntArray(arr, length);

    SortTest::testSort("选择排序", SelectSort::SelectSort, arr, max);
    SortTest::testSort("冒泡排序", BubbleSort::BubbleSort, arr2, max);
    SortTest::testSort("插入排序", InsertSort::InsertSort, arr3, max);
    SortTest::testSort("插入排序2", InsertSort::InsertSort2, arr4, max);
    SortTest::testSort("归并排序", MergeSort::MergeSort, arr5, max);
    SortTest::testSort("快速排序", QuickSort::QuickSort, arr5, max);
    cout << "测试结束" << endl;
    return 0;
}
