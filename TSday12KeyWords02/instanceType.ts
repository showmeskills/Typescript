namespace Instance{
    class Person {
        constructor(public name:string,public age:number){
        }
    }

    type personType = InstanceType<typeof Person>;
    const person :personType = new Person("Terry",30);

}