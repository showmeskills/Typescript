namespace keyWordPick{
    interface Person {
        name: string;
        age: number;
        gender:string;
        interest:{
            coding:string;
            swimming:string
        }[]
    }
    type Pick<T,K extends keyof T>={
        [key in K]: T[K]
    }
    type PersonPick = Pick<Person,"name">
    const person:PersonPick={
        name:"Terry",
    }
}