cmake_minimum_required(VERSION 3.14)
project(node_sort)

set(CMAKE_CXX_STANDARD 17)
# 头文件
set(INC_DIR /usr/local/include/node)
# 库文件
set(LINK_DIR /usr/local/bin)
# 链接头文件
include_directories(${INC_DIR})
# 链接库
link_directories(${LINK_DIR})
# 工程文件
add_executable(node_sort addon.cc)
# 链接库到工程
#target_link_libraries(node_sort node)