namespace TypeDefencer{
    //btw class and class
    class Person{
        name = "John";
        age = 12;
    }

    class Student{
        name = "Bob"
        nationality = "China"
    }

    //instanceof to check attris which are within class or not;
    const getInstanceof = (clazz:Person|Student)=>{
        if(clazz instanceof Person){
            clazz.name
            clazz.age
        }else{
            clazz.name
            clazz.nationality
        }
    }
    //in 
    const getIn = (clazz:Person|Student)=>{
        if("age" in clazz){
            clazz.name;
            clazz.age
        }else{
            clazz.nationality
            clazz.name
        }
    }
    //is
    const getIs = (clazz:Person|Student):clazz is Person=>{
        return (clazz as Person).age !== undefined
    }
    const getSomething = (arg:Person|Student)=>{
        if(getIs(arg)){
            arg.name
            arg.age
        }else{
            arg.name
            arg.nationality
        }
    }

    interface AAA{
        name:"aaa";
        age:15;
    }
    interface BBB{
        height:150;
        width:200;
        name:"bbb"
    }
    const getIsInterface = (arg:AAA|BBB):arg is AAA=>{
        return arg.name !== undefined
    }
    const getSTM = (inter:AAA|BBB)=>{
        if(getIsInterface(inter)){
            inter.age
            inter.name
        }else{
            inter.height
            inter.name
            inter.width
        }
    }
}

namespace TypeOF{
    const fn = (a:number|string)=>{
        if(typeof a === "string"){
            a.length
        }else{
            a.toString();
        }
    }
}