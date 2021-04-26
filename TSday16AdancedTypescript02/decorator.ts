namespace Decorator{
    const ddd=(a:string):ClassDecorator=>(target:any)=>{
        //target就是class DDD
        target.prototype.run = ()=>{
            console.log("running");
        }
        target.prototype.name = "Terrance"
    }

    @ddd("ddd")
    class DDD{

    }

    const d = new DDD();
    (d as any).run();
    (d as any).name
}

namespace b{
    const myRun =(a:string):MethodDecorator=>(...args)=>{
        //console.log(args);
        //args[2].writable = false;//把方法改为不可写
        /*
            {
                value: [Function (anonymous)],
                writable: true,
                enumerable: true,
                configurable: true
            }
        */
    }
    class DD{



        @myRun("传惨")//它是run成员的描述对象
        run(){
            console.log("跑起来了")
        }
        run2(){

        }
        name = "Terrance";
        age = 12;
    }
    const dd = new DD();
    dd.run = ()=>{
        console.log("跑不停")
    }
    dd.run();
}

namespace AttriDecorator{

    const myProp = ():PropertyDecorator=>(...args)=>{
        console.log(args); //这里可以修改参数
        /*
            { run: [Function (anonymous)], run2: [Function (anonymous)] },
             'name',
        */
    }
    class DDD{

        run(){
            console.log("跑起来了")
        }
        run2(){
            
        }
        @myProp()
        name = "Terrance";
        age = 12;
    }
    const dd = new DDD();
    dd.run = ()=>{
        console.log("跑不停")
    }
    dd.run();
}


namespace ParameterOne{
    //多个参数显示
    const Parame = (a:number):ParameterDecorator=>(...args)=>{
        args[2] = a;
        //console.log("args===>",args[2]);//0
    }
    const Parame1 = ():ParameterDecorator=>(...args1)=>{
        //console.log("args1===>",args1);//1
    }
    class DDD{


        
       
        run(@Parame(5555) a:number,@Parame1() b?:string){
            console.log(a)
        }
        run2(){
            
        }
        name = "Terrance";
        age = 12;
    }
    const ddd = new DDD();
   
    
}