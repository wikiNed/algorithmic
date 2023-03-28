/**
 *每次走 1 或 2步，n阶楼梯有多少钟走法
 * @param target 目标步数
 */
function climStairs(target){
    //终止条件
    if (target === 1)return 1;
    if (target === 2)return 2;

    return climStairs(target-1) + climStairs(target-2)
}

console.log(climStairs(3))

/**
 * 实现深拷贝
 */
var deepCopy = function (obj){
    if (typeof obj !== 'object')return;
    var newObj = obj instanceof Array ? []:{};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]):obj[key];
        }
    }
    return newObj;
}

/**
 * 数组扁平化
 */
let flatten = (arr)=>{
    let reslut =[];
    arr.forEach((item,i,arr)=>{
        if (Array.isArray(item)){
            result.concat(flatten(item))
        }else{
            result.push(arr[i])
        }
    })
    return reslut;
}
