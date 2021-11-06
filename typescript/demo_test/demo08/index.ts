// 函数的类型
// 输入多余的（或者少于要求的）参数，是不被允许的
// 函数声明
function add(x:number,y:number):number[]{
    return [x,y]
}
let result = add(1,3)
console.log(result);
// 函数表达式
// 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// 用接口定义函数的形状
interface add { 
    (x:number,y:number):number
}
let add1:add;
add1 = function(x:number,y:number) {
    return x+y
}
console.log(add1(1,3));
// 可选参数
// 可选参数后面不允许再出现必需参数了
function build(x:number,y?:number):number{
    if(y){
        return x+y
    }else{
        return x
    }
}
console.log(build(1));
// 参数默认值
function build1(x:number,y:number=1,z:any):number{
    if(y){
        return x+y
    }else{
        return x+z
    }
}
// 剩余参数
function addOther(x:number,...item:number[]):number {
    item.forEach(el => {
        x = x+el
    });
    return x
}
console.log(addOther(1,2,3,4));
