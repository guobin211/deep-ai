//
// Created by 郭斌 on 2019-07-02.
//

#ifndef ARRAY_MAX_HEAP_H
#define ARRAY_MAX_HEAP_H

namespace MaxHeap {
    template<typename Item>
    class MaxHeap {
    private:
        Item* data;
        int count;
        int _capacity;
        void shiftUp(int k) {
            while (k > 1 && data[k/2] < data[k]) {
                std::swap(data[k / 2], data[k]);
                k /= 2;
            }
        }
    public:
        /**
         * 构造函数
         * @param capacity
         */
        explicit MaxHeap(int capacity) {
            _capacity = capacity;
            data = new Item[capacity + 1];
            count = 0;
        }
        /**
         * 析购函数
         */
        ~MaxHeap(){
            delete [] data;
        }
        int size() {
            return count;
        }

        bool isEmpty() {
            return count == 0;
        }

        void insert(Item item) {
            assert(count + 1 <= _capacity);
            data[count + 1] = item;
            count++;
            shiftUp(count);
        }
    };
}

#endif //ARRAY_MAX_HEAP_H
