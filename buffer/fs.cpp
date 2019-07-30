#include <iostream>
#include <string>

using namespace std;

void read_file_sync(string path) {
	std::cout << path << std::endl;

}

int main(int argc, char *argv[]) {
	cout << "hello fs module" << endl;
	string file_path = "/Users/guobin/idea/deep-ai/language.txt";
	read_file_sync(file_path);
	return 0;
}