namespace person {
    interface Person {
        name: string;
        age: number;
    }
    const enchaner = (target: any,) => {
        return class Student extends target {

            constructor(public name: string = "Terry", public age: number = 20) {
                super(name, age);

            }
        }
    }
    @enchaner
    class Person {
        constructor(public name: string = "Terrance", public age: number = 10) {

        }
    }

    const person = new Person();
    console.log(person.name);

}

namespace personTwo {
    interface Person {
        xx: string;
        yy: string;
        fn: () => string;
    }
    const enhancer = (target: any,) => {
        target.prototype.xx = "Terrance";
        target.prototype.yy = "Terry";
        target.prototype.fn = () => {
            return console.log("decorator");
        }
    }

    @enhancer
    class Person {
        constructor() {

        }
    }

    const person = new Person();

    person.fn();


}


namespace e {
    //target指向类
    //target装饰的是个普通属性和方法的话,那么这个target 指向类的原型 Person.proptotype
    const upperCase = (target: any, propertyName: string) => {
        let value = target[propertyName];
        const getter = () => value;
        const setter = (newVal: string) => {
            value = newVal.toUpperCase();
        }
        delete target[propertyName];
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
            //writable:true,
        })
    }
    const propertyEnumerable = (flag: boolean) => (target: any, methodName: string) => {
    }
    const methodEnumerable = (flag: boolean) => (target: any, methodName: string, propertyDescriptor: PropertyDescriptor) => {
        propertyDescriptor.enumerable = flag;
    }
    //target装饰的是一个类的属性static，那么这个target指定类的属性和方法
    const setAge = (age: number) => (target: any, methodName: string, propertyDescriptor: PropertyDescriptor) => {
        target.age = age;
    }
    function toNumber(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
        let oldMethod = propertyDescriptor.value;//老的方法
        propertyDescriptor.value = function (...args: any[]) {
            args = args.map(item => parseFloat(item));
            return oldMethod.apply(this, args);
        }
    }
    class Person {
        static age: number;
        @upperCase
        //可以被枚举
        @propertyEnumerable(true)
        name: string = "Terrance";
        //不可以被枚举
        @methodEnumerable(true)
        getName() {
            console.log(this.name);
        }
        @setAge(110)
        static getAge() {
            console.log(this.age);
        }
        @toNumber
        sum(...args: any[]) {
            return args.reduce((accu, item) => accu + item, '');
        }
    }

    let person = new Person();
    person.name = "typescript";

    person.getName();
    // for(let attr in person){
    // console.log(attr);
    // }
    Person.getAge()

    console.log(person.sum(1,"2","3"));
}
