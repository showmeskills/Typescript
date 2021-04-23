namespace AdvancedMethod{
    type Partial<T>={
        [K in keyof T]?:T[K]
    }
    type Required<T>={
        [K in keyof T]-?:T[K]
    }
    type Pick<T,K extends keyof T>={
        [Key in K]:T[Key]
    }
    type Readonly<T>={
      readonly [K in keyof T]-?:T[K]
    }
    type Record<K extends keyof any,T>={
        [P in K]:T
    }
    interface User {
        id:number;
        userName:string;
        role:string;
        avators:string
        token:string;
    }
    const user:Pick<User,"role"> = {
        role:"222",
    }
}