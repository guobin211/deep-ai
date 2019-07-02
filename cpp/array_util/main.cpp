#include <iostream>

using namespace std;

namespace Human {
    class Person {
    public:
        std::string name;
        int age{};

        explicit Person(time_t _created) {
            created = _created;
        }

        time_t GetCreated() {
            return created;
        }

        std::string ToString() {
            return "{name:\"" + name + "\", age: " + std::to_string(age) + "}";
        }

    private:
        time_t created;
    };
}
/**
 * 模版函数
 * 消除函数调用的时空开销
 * @param a
 * @param b
 */
template<typename T> void swap(T *a, T *b) {
    T temp = *a;
    *a = *b;
    *b = temp;
}

int main(int argc, char *argv[]) {
    string name = "jack";
    time_t time1 = time(nullptr);
    Human::Person person = Human::Person(time1);
    person.name = name;
    person.age = 22;
    cout << person.ToString() << endl;
    cout << "name: " + person.name << endl;
    cout << "age: " + to_string(person.age) << endl;
    cout << person.GetCreated() << endl;
    printf("%s", ctime(&time1));
    // 分配内存
    int *arr = new int[10];
    for (int i = 0; i < 10; ++i) {
        arr[i] = i;
    }
    for (int j = 0; j < 10; ++j) {
        cout << arr[j];
    }
    // 释放内存
    delete[] arr;
    return 0;
}
