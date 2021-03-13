(()=>{
    //禁止类被创建对象
        //抽象类不能用来创建对象
        //抽象类专门被用来继承的
        //抽象类中可以添加抽象方法
    abstract class Animal{
            name:string;
            age:number;
            constructor(name:string,age:number){
                this.name = name;
                this.age = age;
            }
            //定义抽象方法
            //1.抽象方法使用abstract开头,没有方法体
            //2.抽象方法只能定义在抽象类中,子类必须对抽象方法进行重写
            //3.子类必须强制重写抽象方法
            abstract sayHello():void;
        }



    class Dog extends Animal{
        color:string;
        //如果在子类中写了构造函数,在子类的构造函数中必须对父的构造函数进行调用
        constructor(name:string,age:number,color:string){
           super(name,age)
           this.color = color;
        }
        run():string{
            return `${this.name} is running`
        }
        sayHello():string{
                return '旺旺....'
        }
    }

    const dog = new Dog('Erick',3,'white');
    console.log(dog.sayHello())

})()