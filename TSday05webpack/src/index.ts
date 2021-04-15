import {hi} from './m';

function sum(a: number, b: number):number {
    return a + b;
}
console.log(sum(123,456));
console.log('哈哈哈')
console.log(hi);
 

const obj ={
    name:'孙悟空',
    age:33,
}
console.log(obj);
obj.age=19;
console.log(obj);

// console.log(Promise);

let fn1 = (a:number, b:number):number=>a+b;
console.log(fn1(123,456));
fn1(111,222)