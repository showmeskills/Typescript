(()=>{
    //定义一个表示人的类
    class Person{
        //TS可以在属性前添加属性的属性符
        //public 公共的(修饰的属性额可以在任意位置访问(修改))默认值(包括子类)
        //private 私有属性,私有属性只能在类的内部进行修改
        //通过在类中添加方法是的私有属性可以被外部访问
        //protected 受保护的属性,只能当前类和当前类的子类中使用
        readonly id:number;
        public _name: string;
        private _age: number;
        private _gender: string;
        private _work:string;
        constructor(id:number,name:string, age:number,gender:string,work:string){
            this.id = id;
            this._name = name;
            this._age = age;
            this._gender = gender;
            this._work = work;
        }

        //getter方法用来读取属性,setter方法用来设置属性,它们被称之为属性的存取器
        //定义方法,get用来获取age属性
        getAge():number{
            return this._age
        }
        //定义方法,set用来设置age属性
        setAge(num:number):number | string{
            if(num>=0){
                return this._age = num
            }
            return 'age is invalid'
        }


        //TS的方法中getter 和 setter
        get gender():string{
            return this._gender
        }
        set gender(value:string){
            this._gender = value
        }

        get work():string{
            return this._work;
        }
        set work(value:string){
            this._work = value
        }
    }

    const person = new Person(0,'Terry',25,'male','web developer')
    console.log(person.getAge())
    console.log(person.setAge(-30))
    //set 修改
    person.gender = '1111';
    //get读取
    console.log(person.gender)

    person.work = 'javascript';
    console.log(person.work)

    console.log(person)
    /**
     * 现在属性是在对象中设置,属性可以任意的被修改
     * 属性任意被修改将会导致对象中的数据变地非常不安全
     */

    class A {
        public num:number
        private jobs:string
        protected age:number
        
        constructor(num:number,age:number,jobs:string){
            this.num = num;
            this.age = age;
            this.jobs = jobs;
        }
    }

    class B extends A{
        constructor(num:number,age:number,jobs:string){
            super(num,age,jobs)
        }
        test(){
            console.log(this.age)
        }
    }

    class C{
        constructor(public name:string,public age:number){
            this.name = name;
            this.age = age
        }
    }
    const c = new C('teee',22);
    console.log(c)
})()