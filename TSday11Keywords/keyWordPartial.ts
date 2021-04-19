namespace keyWordPartial{
    interface Person{
        name: string;
        age: number;
        gender:string;
        interest:{
            coding:string;
            swimming:string
        }[]
    }
    type Partial<T> = {
        [key in keyof T]?:T[key]
    }
    type partialPerson = Partial<Person>
    const person:partialPerson={
        name:"Terr",
    }
}