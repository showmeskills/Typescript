namespace Compatibilty{
    class A{
        a:string="a";
        public aa:number=11;
        constructor(name:string,age:number,public mya:string){}
    }

    class B{
        a:string="b";
        public aa:number=123;
        public bb:string ="bb";
        protected bbo:string="bbo";
        constructor(name:string,public mya:string){}
    }

    let a = new A("terry",12,"mya");
    let b = new B('loong gor',"myb");
    a = b;
    
    class C extends A {}

    let c = new C("ttt",22,"555");
    c = b;
}

namespace Compability01{
    type Fn = (a:number,b:number)=>number;
    let fn:Fn;
    let func =(a:string)=>{};

    interface A{
        a:number
        b:number
        c:number
    }
    interface B{
        a:number
        b:number
    }
    let fn1 = (arg:A)=>{}
    let fn2 = (arg:B)=>{}
    fn1 = fn2
}
namespace Compability02{
    //1.返回值相同
    //2.目标是源的子类型
    //3.少的 = 多的

    let fn = ()=>({a:1});
    let fn1 = ()=>({a:1,b:"2"});
    fn = fn1;
    
}

namespace Compability03{
    interface Obj<T>{
        name:number|string;
    }

    let a:Obj<string>= {name:"123"};
    let b:Obj<number> = {name:123};
    a = b;
    b = a;
}

namespace AndOr{
    interface A{
        aa:()=>void;
    }
    interface B{
        bb:()=>void;
    }

    type AB = A&B;
    const ab:AB = {
        aa(){

        },
        bb(){

        }
    }

    interface C {
        cc:()=>void
    }
    interface D{
        dd:()=>void
    }

    type CD = C | D;

    const cd:CD = {
        dd(){
            
        }
    }
}