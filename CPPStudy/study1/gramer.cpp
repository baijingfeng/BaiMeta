#include <iostream>

using namespace std;

/**
 * 类型说明
 */

// 变量声明
extern int a, b;
extern int ce;
extern float f;

// 函数声明
int func();

int main()
{
    // 基本类型,布尔，字符，数字
    bool foo1;
    char bar2;
    int ll;
    // int a;
    // 自定义类型
    typedef int selfName;

    // 枚举类型
    enum color
    {
        red,
        blue,
        green = 6,
        brown
    } bb;
    bb = blue;

    // 类型转换，静态类型转换和动态类型转换
    int i = 10;
    float f = static_cast<float>(i);

    // 变量声明 与 变量定义
    char c = 'f';

    // 实际初始化
    int a = 10;
    int b = 20;
    int ce = a + b;

    // 函数调用
    int it = func();

    // C++ 中的左值（Lvalues）和右值（Rvalues）

    cout << it << endl;
    // cout << a << endl;
    // cout << ll << endl;
    // cout << "lllll" << endl;
    return 0;
}

// 函数定义
int func()
{
    return 23;
}