/**
 * 在定义函数或类时,如果遇到类型不明确就可以使用泛型
 * 使用<>表示泛型
 * 语法function fn<泛型名>(变量:泛型名):泛型名{}
 * 思路指定泛型后<T>;在调用函数或者实例类的时候必须给它指定个类型,如果不指定TS会自当编译成当前的类
 */

function fn<num>(a:num):num{
    return a;
}

//可以直接调用具有泛型的函数
//let result = fn(a:10);//不指定泛型,TS可以自动对类型进行推断
//let result2 = fn<string>(a:'hello');//指定泛型
//泛型可以指定多个
function fn2<T,K>(a:T,b:K):T{
    console.log(b)
    return a;
}

fn2<number,string>(123,'hello');

//实现interface子类或者就是interface,使用extends继承
//泛型T 就是Inter的子类或者实现类
interface Inter{
    length:number
}

function fn3<T extends Inter>(a:T):number{
    return a.length
}

console.log(fn3<string>('hello'))


class MyClass<T>{
    name:T;
    constructor(name:T){
        this.name = name;
    }
}

const myclass = new MyClass<string>('Terry');

