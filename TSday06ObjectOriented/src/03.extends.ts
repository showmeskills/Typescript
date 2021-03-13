class Phone{
    brand:string;
    price:number;
    assembled:string;
    constructor(brand:string,price:number,assembled:string){
        this.brand = brand;
        this.price = price;
        this.assembled = assembled;
    }
    inCall():string{
        return 'I can call in national wide';
    }
    outCall():string{
        return 'I can\'t call out of national wide';
    }
}

class SmartPhone extends Phone{
    color:string;
    size:number;
    constructor(brand:string,price:number,assembled:string,color:string,size:number){
        super(brand,price,assembled);
        this.color = color;
        this.size = size;
    }
    facial():boolean{
        return false;
    }
}

const phone = new Phone('apply',1000,'China');
console.log(phone)
const smartPhone = new SmartPhone('apply',1000,'China','white',17.5);
console.log(smartPhone)
console.log(smartPhone.facial())
console.log(smartPhone.inCall());



(()=>{

    //定义

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
        constructor(name:string,age:number){
           super(name,age)
        }
        run():string{
            return `${this.name} is running`
        }
        sayHello():string{
            return '旺旺旺'
        }
    }

    class Cat extends Animal{
        constructor(name:string,age:number){
            super(name,age)
         }
         sayHello():string{
            return '喵喵喵'
        }
    }


    const dog = new Dog('Erick',3);
    console.log(dog)
    console.log(dog.run())
    console.log(dog.sayHello())
    const cat = new Cat('Terrance',4);
    console.log(cat)
    console.log(cat.sayHello())



})()