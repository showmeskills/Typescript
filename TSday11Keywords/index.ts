namespace IndexVisitMark{
    //索引访问操作符
    interface Person{
        name: string;
        age: number;
        job:{
            name: string;
        }
        hobbies:Array<{name:string,level:number}>
    }

    const myName:Person["name"] = "Terry";
    const myAge:Person["age"] = 10;
    const myHobbies:Person["hobbies"][0]["name"] = "coding"
    const myHobbies2:Person["hobbies"][0]["level"] = 5;
}