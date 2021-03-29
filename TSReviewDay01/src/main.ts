let flag:boolean|string = true;
if(flag){
    flag = 'Terrancer';
}

function fn<T,S>(name:T,age:S,title:T):Array<object>{
    const user = {
        name,
        age,
    }
    const job = {
        title
    }
    const arr = [user,job]
    return arr
    
}

const person = fn<string,number>('Terrance',20,'web developer')
console.log(person)

interface Iperson{
    (name:string,age:number,jobs:string):Array<object>
}

const Terry:Iperson = (name,age,title)=>{
    const user = {
        name,
        age,
    }
    const job = {
        title
    }
    const arr = [user,job]
    return arr
}

let terry = Terry('Terry',29,'web developer')

//枚举
enum Color{
    red,
    blue=5,
    orange,
}
let color:Color=Color.red;//red = 0, blue =5, orange =6;以上一个为基准

