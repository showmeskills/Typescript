"use strict";
/**
 * 在定义函数或类时,如果遇到类型不明确就可以使用泛型
 * 使用<>表示泛型
 * 语法function fn<泛型名>(变量:泛型名):泛型名{}
 * 思路指定泛型后<T>;在调用函数或者实例类的时候必须给它指定个类型,如果不指定TS会自当编译成当前的类
 */
function fn(a) {
    return a;
}
//可以直接调用具有泛型的函数
//let result = fn(a:10);//不指定泛型,TS可以自动对类型进行推断
//let result2 = fn<string>(a:'hello');//指定泛型
//泛型可以指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
function fn3(a) {
    return a.length;
}
console.log(fn3('hello'));
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const myclass = new MyClass('Terry');
