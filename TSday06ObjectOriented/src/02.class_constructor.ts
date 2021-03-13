class Dog {
    name: string;
    age: number;
    //constructor构造函数;在对象new的时候调用
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
        //这里的this指向的当前的实例,
        //如果实例dog this就指向dog,或者实例dog1 this就指向dog1
        console.log(this)
    }
    bark():string{
        //这里的this也是,谁调用,就指向谁
        return 'wang wang wang'
    }
    static eat():string{
        console.log(this)//静态this指向这个类
        return 'sssss'
    }
}

Dog.eat();

const dog = new Dog('Erick',3);
console.log(dog);//Dog {name: "Erick", age: 3}
const dog1 = new Dog('bussy',6);
console.log(dog1);//Dog {name: "bussy", age: 6}