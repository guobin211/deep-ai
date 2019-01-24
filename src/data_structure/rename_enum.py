#!/venv/bin python
# -*- coding:utf-8 -*-
# Author guobin201314@gmail.com
from collections import namedtuple

# 常量定义属性
NAME, AGE, SEX, EMAIL = range(4)
student = ("jack", 22, "male", "123456@qq.com")
print(student[1])

# 伪元祖
Student = namedtuple("Student", ["name", "age", "sex", "email"])
student_a = Student(name="tom", age=22, sex="male", email="123@qq.com")
print(student_a[0])
print(student_a.email)


