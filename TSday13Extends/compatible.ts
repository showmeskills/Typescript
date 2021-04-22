namespace Compatible{
    interface A{
        a:string;
        b:number;
    }
    interface B{
        a:string;
        b:number;
        c:boolean;
    }
    let a : A = {a:"1",b:1};
    let b : B = {a:"1",b:1,c:true};
    // 结构之间兼容:成员少的兼容成员多的
    //这个就是典型的鸭式辩形法
    a = b;

}

namespace Fn{
    //条件
    //1.参数的个数要满足
    //2.参数类型要满足
    //3.返回值满足
    //可以将参数少的匹配给参数多的 参数个等于或者小于目标函数
    //参数多=参数少;
    //源函数的参数都能在目标函数找到就兼容了
   type Fn = (a:number, b:number)=>void;
   let fn:Fn = (a,b)=>{}

   let fn1 = (a:number)=>{}
   let fn2 = (a:number, b:number)=>{}
   let fn3 = (a:number, b:number,c:number)=>{}
   fn = fn1;
   fn = fn2;
   fn3 = fn2;

}

namespace vvs{

    //目标函数
    type Fn = (a:number, b:number)=>void;
    let fn:Fn = (a,b)=>{}

    //可选参数和剩余参数
        //固定参数兼容可选和剩余参数
        //可选参数是不兼容固定参数和剩余参数
        //剩余参数可兼容固定参数和可选参数
    let fn1 = (a:number,b?:number)=>{}
    let fn2 = (a?:number,b?:number)=>{}
    let fn3 = (...args:number[])=>{}
    fn = fn1;
    fn = fn2;
    fn = fn3;
    fn1 = fn2;
    fn3 = fn;
    fn3 = fn1;
    fn3 = fn2;
}

