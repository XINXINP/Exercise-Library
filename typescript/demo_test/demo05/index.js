// 联合类型使用|分隔每个类型
// 只能访问联合属性中共有的属性
var isWho = 123;
function alertWho() {
    isWho = 'wqeqweqwe';
    // isWho = 123 报错
    console.log(isWho.length);
}
alertWho();
