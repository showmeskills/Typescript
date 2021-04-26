namespace ConditionType{
    //? 类似于三元表达式
    //T extends U? X : Y;
    
    declare function fn<T extends boolean>(a:T):T extends true ? string : number; 
    const a = fn(Math.random()<0.5? true : false);
    const b = fn(true);
    const c = fn(false);

    //the first situation
    type NakeUsage<T> = T extends boolean? "YES" : "NO";
    type Distributed = NakeUsage<string|number|true>;
    //the second situation
    type NakeUsage1<T> = [T] extends [boolean]? "YES" : "NO";
    type Distributed1 = NakeUsage1<string|number|true>;
}

namespace Other{
    type A = number | string | null | undefined
    type B =  null | undefined
    type myExclude = Exclude<A,B>
    type myNonNullable = NonNullable<A>;
    type myEtract = Extract<A,B>; 
}

namespace PractiseOne{
    interface Part {
        id: number;
        name:string;
        subParts:Part[];
        updatePart(newName:string):string;
    }
    //changing function body to function name
    type funcName<T> = {
        [key in keyof T]:T[key] extends Function? key : never;
    }
    type partFunc = funcName<Part>
    //obtain funtion body;
    type FuncBody<T>={
        [key in keyof T]:T[key] extends Function ? key :never;
    }[keyof T]

    type funcBody = FuncBody<Part>;

    //function return
    type funcReturn<T>={
        [key in keyof T]:funcB<T[key]>;
    }[keyof T]

    type funcB<T> = T extends (...arg:any[])=> infer P? P :never;
    
    type retunType = funcReturn<Part>
}

