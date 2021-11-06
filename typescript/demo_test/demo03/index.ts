// any 类型，则允许被赋值为任意类型
// 在任意值上访问任何属性都是允许的：
// 未声明类型的变量
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let numberTest:any = 3213
let numberTest1:number = 232
numberTest = '2132312'
console.log(numberTest.title);
// console.log(numberTest1.title); 报错
// numberTest1 = '2132312' 报错
