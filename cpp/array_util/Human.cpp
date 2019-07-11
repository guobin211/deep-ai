#include <iostream>

namespace HumanSpace {
	class Human {
		public:
			std::string name;
	};
}

using namespace std;
using namespace HumanSpace;
int main(int argc, char *argv[]) {
	
	cout << "hello Human namespace" << endl;
	Human human;
	human.name = "jack";
	
	cout << human.name << endl;
	return 0;
}