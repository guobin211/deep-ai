#!/venv/bin python
# -*- coding:utf-8 -*-
# Author guobin201314@gmail.com
from random import randint
from collections import Counter

# 创建list
data_list = [randint(0, 20) for x in range(30)]
print(data_list)
# 创建字典
dict_c = dict.fromkeys(data_list, 0)
for c in dict_c:
    dict_c[c] += 1

print(dict_c)

# 使用Counter
dict_c_counter = Counter(dict_c)
print(dict_c_counter)


