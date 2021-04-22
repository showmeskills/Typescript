namespace GenericExample{
    const fn = <T>(a:T,b:number):T=>{
        return a;
    }
    fn<string>("123",122);

    //匿名函数泛型接口
    interface C{
        <T>(a:T):void;
    }
    const run:C = a =>{};
    run<string>("222");
    const fly:C =b=>b;
    fly<string>("222");
    //接口泛型使用函数
    interface InterGeneric<T,S,E,R>{
        run<T,S>(a:T[],b:S[]):T[];
        name:T;
        age:E;
        blood:R;
        str:S;
    }

    const obj :InterGeneric<string,number,boolean,string>={
        name:"111",
        age:true,
        blood:"A",
        str:111,
        run:<T,S>(a:T[],b:S[]):T[]=>a,
    }
}