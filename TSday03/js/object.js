//TS对象方法不太好用 原因1.{}2.function也可以是个对象
var obj;
obj = {};
/*
a和b 有很大区别
b必须是一个对象,而且还有一个name属性并且这个属性是string
所有
b = {name:'Terry'}
*/
// {} 用来指定对象中可以包含哪个属性
// 语法:{属性名:属性值,属性名:属性值}
var obj1;
obj1 = {
    name: 'Terry',
    age: 18
};
//在属性名后加个? 表示可选的属性,这个值有也行,没也行
var obj2;
obj2 = {
    name: 'Terrance'
};
// 用一个方式表示任意属性 [propName:string]:any(任意字符串属性名)
// 如果 [propName:string]:string 表示 属性值必须是字符串
// 如果 [propName:string]:number 表示 属性值必须是数字
var obj3;
obj3 = {
    name: '猪八戒',
    age: 18,
    Gender: 'male'
};
//限制e的结构;表示 e它是一个函数;箭头后的number是一个函数类型声明(e的返回值是个number)
/*
设置函数结构的类型声明:
语法:(形参:类型,形参:类型..)=>返回值:类型
*/
var fn;
fn = function (n1, n2) {
    return n1 + n2;
};
