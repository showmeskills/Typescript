//JS中数组基本放着同一个类型的值;TS声明数组时=>类型的数组
let arr: string[]|number[]|boolean[];
arr = ['a', 'b','c'];

let arr1: number[];
arr1 = [1,2,3,4,5]
//写法b和c 是一个意思
let arr2: Array<number|string|boolean>
let arr3: object[];
/*
数组的类型声明:
1. 类型[];
2. Array<类型>
*/