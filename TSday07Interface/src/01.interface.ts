(()=>{
    //描述一对象的类型
    type myType = {
        name:string,
        age:number,
    }
    const obj:myType = {
        name:'Terry',
        age:25,
    }

    //接口用来定义一个类的结构,用来定义一个类中应该包含哪些属性和方法
    //同时接口也可以当成类型声明去使用
    //接口可以在定义类的时候去限制类的结构
    //interface 可以重复定义
    interface myInterface{
        name:string;
        age:number;
    }

    interface myInterface{
        gender:string;
    }

    const myIn:myInterface={
        name:'Terrance',
        age:25,
        gender:'male'
    }
    //接口中的所有属性都不能有实际的值,接口只定义对象的结构,而不考虑实际值
    interface myInter{
        name:string,
        sayHello():void,
    }
    //定义类时,可以使类去实现一个接口
    //实现接口就是使类满足接口的要求
    class myClass implements myInter{
        name:string
        constructor(name:string){
            this.name = name;
        }
        sayHello(){
            console.log('大家好')
        }
    }


    //sample

    interface animal{
        readonly id:number
        type:string,
        skills:string,
        age:number,
        plays?():void,
        jobs():string,
    }

    class MyAnimal implements animal{
        id:number
        type :string;
        skills:string;
        age:number;
        constructor(id:number,type:string,skills:string,age:number){
            this.id = id;
            this.type = type;
            this.skills = skills;
            this.age = age;
        }
        jobs(){
            return 'it is running'
        }
    }

    const myAnimal = new MyAnimal(0,'dog','bark',12);
    console.log(myAnimal.jobs())

})()