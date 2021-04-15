/*
common.js
let a;
a = 10;
a = 'hello';

TS=>JS TS可以编译成任意版本的JS
默认是ES3; 可以编程成ES5或者更高
TS可以让变量指定类型

//声明一个变量a,同时指定它的类型为number
let a:number;
//a的类型设置为了number,在以后使用过程中a的值只能是数字
a = 10;
a = 33;
//a = 'hello'; //此行代码会报错,变量a的类型是number,不能赋值字符串

let b:string;
b = '3';
b = 'hello TS';

let c:boolean;
c = true;
c = false;

//声明完变量直接赋值
let d:boolean = true;

//如何变量的声明和赋值时同时进行的,TS可以自动对变量进行类型检测
let e = true; //TS自动判断类型
e = false;
*/
/*
//函数类型说明
1.函数参数类型  sum(a:number,b:number)
2.函数返回值的类型 function sum(a:number,b:number):number{return a + b;}
3.参数传的数量

JS中的函数时不考虑参数的类型和个数的
TS中会考虑到函数的参数的类型和传参的数量
*/
function sum(a:number,b:number):number{
    return a + b;
}
//console.log(sum(123, 456));579
//console.log(sum(123, '456'));//123456
let res = sum(123,456);//579
console.log(res);




