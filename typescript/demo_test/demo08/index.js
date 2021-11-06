// 函数的类型
// 输入多余的（或者少于要求的）参数，是不被允许的
// 函数声明
function add(x, y) {
    return [x, y];
}
var result = add(1, 3);
console.log(result);
var add1;
add1 = function (x, y) {
    return x + y;
};
console.log(add1(1, 3));
// 可选参数
// 可选参数后面不允许再出现必需参数了
function build(x, y) {
    if (y) {
        return x + y;
    }
    else {
        return x;
    }
}
console.log(build(1));
// 参数默认值
function build1(x, y, z) {
    if (y === void 0) { y = 1; }
    if (y) {
        return x + y;
    }
    else {
        return x + z;
    }
}
// 剩余参数
function addOther(x) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    item.forEach(function (el) {
        x = x + el;
    });
    return x;
}
console.log(addOther(1, 2, 3, 4));
