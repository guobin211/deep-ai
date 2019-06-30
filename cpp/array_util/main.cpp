#include <iostream>
#include <string>
#include <cstring>

using namespace std;

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

int main(int argc, char *argv[]) {
    string name = "jack";
    time_t time1 = time(nullptr);
    Person person = Person(time1);
    person.name = name;
    person.age = 22;
    cout << person.ToString() << endl;
    cout << "name: " + person.name << endl;
    cout << "age: " + to_string(person.age) << endl;
    cout << person.GetCreated() << endl;

    printf("%s", ctime(&time1));
    return 0;
}