#!/venv/bin python
# -*- coding:utf-8 -*-
# Author guobin201314@gmail.com

from random import randint

int_list = [randint(-10, 10) for _ in range(10)]
print(int_list)

int_list_filter = filter(lambda x: x >= 0, int_list)
print(int_list_filter)

# 列表解析
int_list_sorted = [x for x in int_list if x >= 0]
print(int_list_sorted)

# 创建json 字典
dict_data = {x: randint(60, 100) for x in range(1, 21)}
print(dict_data)

# 字典解析
dict_data_sorted = {k: v for k, v in dict_data.items() if v > 90}
print(dict_data_sorted)

# 集合解析
c_data = {1, 2, 3, 4, 5, 6, 3, 4}
c_data_sorted = {c for c in c_data if c > 3}
print(c_data_sorted)
