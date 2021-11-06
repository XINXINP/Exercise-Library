// 数组类型
// [类型+表示方法]
let arr1:number[] = [1,2,3]
// 数组泛型
let arr2: Array<number> = [4,5,6]
// 用接口表示数组
interface arr3{
    [index:number]:number
}
// 类数组
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}