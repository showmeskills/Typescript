/*
枚举 enum 把所有可能的情况列举出来

*/
//枚举自动转化为0和1
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var enumPerson;
enumPerson = {
    name: '孙悟空',
    gender: Gender.Male,
};
console.log(enumPerson.gender === 0); //返回true
//&表示于
var b;
b = {
    name: '孙悟空',
    age: 18,
};
var c;
var d;
var aType;
