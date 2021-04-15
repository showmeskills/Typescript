//使用字面量进行类型声明
var a; // 声明完之后不可以进行变量修改
// 可以使用 | 来链接多个类型
var b;
b = 'male';
b = 'female';
//联合类型
var c;
//any 任意类型(相当于对该变量关闭了TS)(不建议使用any类型)
var d;
d = 10;
d = 'male';
d = true;
//不指定类型;TS自动识别any
var e;
e = true;
e = 'hello';
var s;
//d 的类型是any 它可以赋值给任意变量不会报错
s = d;
//unknown 表示未知类型
var f;
f = 10;
f = true;
f = 'world';
/*
f 的类型是unknown 赋值给string 会报错
let h : string
h = f;
unknown 实际上是一个类型安全的变量
nuknown 类型的变量,不能直接赋值给其它变量
如果需要使用unknown赋值(2种方法)
1.判断类型后进行赋值
2.类型断言
    语法
        变量 as 类型
        <类型>变量
*/
var h;
if (typeof f === 'string') {
    h = f;
}
//类型断言 可以用来告诉解析器变量的实际类型
h = f;
h = f;
/*
用于报错函数
设置函数返回值
void 用来表示空值,以函数为例,就表示没有返回值的函数(null,undefined)
function fn(num):void{
   return undefined/null;
}
never 用来表示永远不会返回结果(连null,undefined都不返回)
*/
function fn() {
    throw new Error("报错了");
}
