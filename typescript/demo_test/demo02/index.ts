// 原始数据类型
// 数值
// 字符串
// 空值:function 传值为空
// Null 和 Undefined 是所有类型的子类型，void不能转换
let testNum:undefined = undefined
let lastNum:number = undefined
let isDone:boolean = true
let isNull:undefined = null
let isUndefined:null = undefined 
let isString1:string = undefined
let isString:string = '字符串类型' 
if(isDone){
    console.log(isString);
}else{
    console.log(isString);
}
function alertName (params:string):String {
    // testNum = 123 报错
    lastNum = 1213
    // lastNum = undefined 正常
    isString1 = null
    // isNull = 123 报错
    isNull = null
    return params
}
alertName('空值')