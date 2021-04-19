namespace keyWordReadOnly{
    interface Person {
        name: string;
        age: number;
        gender:string;
        interest:{
            coding:string;
            swimming:string
        }[]
    }
    type Readonly<T>={
        readonly [key in keyof T]-?:T[key]
    }
    type ReadonlyPerson = Readonly<Person>
    const person :ReadonlyPerson={
        name:"Terry",
        age:25,
        gender:"male",
        interest:[
            {coding:"coding",swimming:"swimming"}
        ]
    }
}