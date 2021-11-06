// 联合类型使用|分隔每个类型
// 只能访问联合属性中共有的属性
let isWho:number|string = 123
function alertWho():any {
    isWho = 'wqeqweqwe'
    // isWho = 123 报错
    console.log(isWho.length);
}
alertWho()
