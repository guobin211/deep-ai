#include <iostream>
#include <vector>
#include "vector_queue.h"
#include "time_util.h"

using namespace std;
using namespace Vector_Queue;
using namespace TimeUtil;

/**
* list 转 json []
*/
std::string toString(std::vector<int> &list) {
    int len = list.size() - 1;
    std::string res = "[";
    for (int i = 0;i < list.size();i++) {
        res += std::to_string(list[i]);
        if (i < len) {
            res += ",";
        }
    }
    res += "]";
    return res;
}


int main(int argc, char* argv[]) {
    
    timeEnd();
    
    cout << "hello vector" << endl;
    vector<int> list;
    Vector_Queue::VectorQueue<int> queue;
    
    cout << queue.getName() << endl;
    
    queue.inQueue(1);
    queue.inQueue(2);
    queue.inQueue(3);

    cout << queue.outQueue() << endl;
    cout << queue.outQueue() << endl;
    cout << queue.outQueue() << endl;
    
    VectorQueue<std::string> strQueue;
    strQueue.inQueue("string queue");
    cout << strQueue.outQueue() << endl;

    for (int i = 0;i < 10; i++) {
        list.push_back(i + 1);
    }
    
    cout << toString(list)  << endl;
    return 0;
}