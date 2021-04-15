! function () {
    "use strict";
    console.log(579), console.log("哈哈哈"), console.log("你好");
    var o = {
        name: "孙悟空",
        age: 33
    };
    console.log(o), o.age = 19, console.log(o);
    var l = function (o, l) {
        return o + l
    };
    console.log(l(123, 456)), l(111, 222)
}();