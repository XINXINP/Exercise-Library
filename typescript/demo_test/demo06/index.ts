// 对象类型接口
// 赋值的时候，变量的形状必须和接口的形状保持一致。 
interface Person {
    name:string,
    age:number,
    sex:string
}
let per1:Person = {
    name:'xm',
    age:12,
    sex:'boy'
}
// 可选属性
interface Dog  {
    name:string,
    age?:number
}
let dog1:Dog = {
    name:'wawa',
    // weight:40
}
//任意属性
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Cat  {
    name:string,
    age?:number,
    [propName:string]:string|number
}

let cat1:Cat = {
    name:'miaomiao',
    age:12,
    weight:20
}
// 只读属性
interface Botany {
    readonly id:string,
    name?:string,
    yellow:string
}
let tree1:Botany = {
    id:'1',
    yellow:'green'
}
// tree1.id = 233 报错是只读属性
console.log(tree1.id);
