let num:number = 10; // let num : 10;
let arg : string| number| boolean;// | 'or'
let any : any;//any 表示的任意类型,一个变量设置类型为any后相当于该变量关了TS的类型检测
//TS中不建议使用any,当变量如果不指定类型,则TS解析器回自动判断变量的类型为any(隐式的any);
//any类型的变量可以赋值给任意类型变量
//unknown类型的变量式不可以赋值给别的类型变量
let unknown : unknown;//表示位置类型,
unknown = 10 || 'hello';

let isString:string = 'hellow';
let isUnknown :unknown
//2种方式赋值给unkwon
//判断
if(typeof isString === 'string'){
    isUnknown = isString;
}
//类型断言
isUnknown = isString as string;
isUnknown = <string>isString;


//setting up a return from a function
function fn(num):boolean|number {
    if(num>0){
        return true;
    }else{
        return 123;
    }
}
//void 表示空,以函数为例就表示没有返回值的函数(return null/undefined)
function fn1():void{
    return null
}
/// never 表示永远不会返回结果 什么都没有 连null/undefined没有;可以用于报错
function fn2():never{
    throw new Error('there is an error')
}