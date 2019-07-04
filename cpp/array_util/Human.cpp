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
	
	return 0;
}