namespace KeyWords{
    //keyof 索引类查询操作符
    //作用循环接口的属性名
    //语法:type 名 = keyof 接口;
    interface Person {
        name: string;
        age: number;
        job:{
            name: string;
        }
        hobbies:Array<{name:string,level:number}>;
    }

    type PersonKey = keyof Person;
    const getValuePerson = (val:Person,key:PersonKey):any=>{
        return val[key];
    }
    const person:Person = {
        name:"Terry",
        age:10,
        job:{
            name:"Web developer",
        },
        hobbies:[
            {name:"coding",level:20},
        ]
    }
    const result = getValuePerson(person,"job");
    console.log(result)
}