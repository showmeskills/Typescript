//JS中数组基本放着同一个类型的值;TS声明数组时=>类型的数组
let a: string[];
a = ['a', 'b','c'];

let b: number[];
b = [1,2,3,4,5]
//写法b和c 是一个意思
let c: Array<number>

let d: object[];
/*
数组的类型声明:
1. 类型[];
2. Array<类型>
*/