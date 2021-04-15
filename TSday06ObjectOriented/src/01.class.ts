/**
class 类名{
    属性名:类型;
    constructor(属性:类型){
        属性=属性值
    }
} 
对象中主要包含了两个部分:
属性
方法

直接定义的是实例属性,需要通过对象的实例来访问
name: string = 'Terry';
age: number = 18;
const person = new Person();
console.log(person)

静态属性/类属性
直接通过类来访问
static worker:string = 'web developer';
console.log(Person.worker)

readonly 表示只读属性无法修改


静态方法和实例方法
实例方法需要,在实例化之后调用
 jobs(str:string):string{
        return str
    }
const person = new Person();
console.log(person.jobs('web developer1111'))

静态方法或者类方法 通过类直接调用
 static from():string{
        return 'China'
    }
console.log(Person.from())
 */

class Person{
    //定义的实例属性
    readonly name: string = 'Terry';
    age: number = 18;
    //在函数前使用static关键字可以定义类属性(静态属性)
    static worker:string = 'web developer';
    static readonly assets:number = 100000;

    jobs(str:string):string{
        return str
    }

    static from():string{
        return 'China'
    }
}
console.log(Person.worker)
console.log(Person.assets)
console.log(Person.from())
const person = new Person();
console.log(person.jobs('web developer1111'))
