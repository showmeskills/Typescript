(()=>{

    class Animal{
        name:string;
        age:number;
        constructor(name:string,age:number){
            this.name = name;
            this.age = age;
        }
        sayHello(str:string):string{
            return str
        }
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
            return super.sayHello('旺旺旺');
        }
    }

    const dog = new Dog('Erick',3,'white');
    console.log(dog.sayHello())


    

})()