/**
 *每次走 1 或 2步，n阶楼梯有多少钟走法
 * @param target 目标步数
 */
function climStairs(target){
    //终止条件
    if(target === 1)return 1;
    if(target === 2)return 2;

    return climStairs(target-1)+climStairs(target-2);
}

console.log(climStairs(3))

/**
 * 实现深拷贝
 */
var deepCopy = function (obj){
    if (typeof obj !== 'object')return;
    var newObj = obj.instance === Array ? []:{};
    for (let key in obj) {
        newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
    return newObj;
}

/**
 * 实现深拷贝的第二种方式
 */

/**
 * 数组扁平化
 */
let flatten = (arr)=>{
    let result =[];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flatten([1,[2]]));
// console.log([1].concat([2]));
