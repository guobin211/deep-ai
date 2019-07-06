#include <iostream>
#include <time.h>

#ifndef Time_Util_H
#define Time_Util_H

namespace TimeUtil {
	void timeEnd() {
		clock_t start, end;
		double totalTime;
		start = clock();
		for (int i  = 0;i<100000000;i++) {
			int y = i +1;
		}
		end = clock();
		totalTime = (double)(end - start) / CLOCKS_PER_SEC;
		std::cout << "1亿次耗时: " << totalTime << "s" << std::endl;
	}
}

#endif /* Time_Util_H */