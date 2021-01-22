/*
枚举 enum 把所有可能的情况列举出来

*/
//枚举自动转化为0和1
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female"; //1
})(Gender || (Gender = {}));
var a;
a = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(a.gender === 0);
