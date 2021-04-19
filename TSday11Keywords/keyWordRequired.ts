namespace keyWordRequired{
    interface Person{
        name: string;
        age: number;
        gender:string;
        interest:{
            coding:string;
            swimming:string
        }[]
    }
    type Required<T>={
        [key in keyof T]-?:T[key];
    }

    type RequiredPerson = Required<Person>
    const person:RequiredPerson={
        name:"Terry",
        age:25,
        gender:"male",
        interest:[
            {coding:"coding",swimming:"swimming"}
        ]
    }
}