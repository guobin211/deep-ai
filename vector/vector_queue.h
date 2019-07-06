#include <iostream>
#include <vector>

#ifndef Vector_Queue_H
#define Vector_Queue_H

namespace Vector_Queue {
	template <typename T>
	class VectorQueue {
		// 私有属性
		private:
			std::vector<T> data;
			std::string name;
		// 公共属性
		public:
			// 构造函数
			VectorQueue() {
				name = "queue";
			};
			// 析构函数
			~VectorQueue() {
			};
			// 入队
			void inQueue(T t) {
				data.push_back(t);
				std::cout << data.size() << std::endl;
			};
			// 出队第一个元素
			T outQueue() {
				T temp = data.front();
				// 删除元素
				data.erase(data.begin());
				std::cout << "outQueue size: " << data.size() << std::endl;
				return temp;
			};
			std::string getName() {
				return name;
			};
	};
}

#endif /* Vector_Queue_H */