cmake_minimum_required(VERSION 3.14)
project(array)

set(CMAKE_CXX_STANDARD 17)

add_executable(array main.cpp select_sort.h insert_sort.h sort_test.h bubble_sort.h merge_sort.h quick_sort.h max_heap.h)
