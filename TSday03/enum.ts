/*
枚举 enum 把所有可能的情况列举出来

*/
//枚举自动转化为0和1
enum Gender{
    Male = 0,
    Female = 1,
}
let enumPerson :{
     name: string;
     gender: Gender;
}

enumPerson = {
    name:'孙悟空',
    gender: Gender.Male,//可以设定女生:0,男生:1
}

console.log(enumPerson.gender === 0)//返回true
//&表示于
let b: {name: string} & {age: number}
b = {
    name:'孙悟空',
    age:18,
}
//创建类型别名
type myType = 1 | 2 | 3| 4 |5;
let c: myType;
let d: myType;

type newType = string|number|boolean;
let aType : newType;


