#include <iostream>
#include <vector>
#include <string>

using namespace std;

int add(int a, int b) {
    return a + b + 10;
}

float add(float a, float b) {
    return a + b;
}

float add(float a, int b) {
    return a + (float)b;
}

int main(int argc, char* argv[]) {
    // 1 byte
    bool isBig = false;
    // 1byte
    char cr = 'a';
    // 2byte 有符号短整形
    short int n = -5;
    // 2byte 无符号短整形
    short unsigned int j = 10;
    cout << (n + j) << endl;
    // 4byte
    int age;
    // 8byte
    long int rating = 4;
    // 4byte
    float price;
    // 8byte
    double amount;
    // 16byte
    long double count = 3306.6;
    age = 22;
    price = 800.88f;
    amount = price * 2;
    string name = "jack";
    // 常量
    const int PERSON_MAX_AGE = 99;

    // auto存储类
    auto f = 3.1415926;
    auto str("hello");
    const char* well = "hello";
    // 1 true 0 false
    cout << (str == well) << endl;
    // 3.1415926
    cout << f++ << endl;
    // 4.1415926
    cout << f << endl;

    cout << age << endl;
    cout << price << endl;
    cout << "long double sizeof: " << sizeof(count) << endl;
    cout << name << endl;

    cout << add(2, 4) << endl;
    cout << add(4.4f, 2.0f) << endl;
    cout << add(3.3f, 2) << endl;
    return 0;
}