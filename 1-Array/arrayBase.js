let arr = [1, 2, 3];
//数组最末添加
arr.push(4);
// console.log(arr);
//最前添加
arr.unshift(9, 10);
// console.log(arr);
//末尾删除
arr.pop();
// console.log(arr);
//最前删除
arr.shift();
// console.log(arr);
/**
 * 任意位置添加删除
 * start;deleteCount;items(可多个)
 */
arr.splice(2, 2, 1, 2, 3);
// console.log(arr);
//
/**
 * 其他方法
 * every（false停止）
 * some(true停止)
 * map（全部）
 * filter(true组成)
 * reduce(累加器)
 */
arr.every(x => {
        // console.log(x);
        return x % 2 === 0
    }
);
arr.some(x => {
        // console.log(x);
        return x % 2 === 0
    }
);
// console.log(arr);
let sum = arr.reduce((pre,cur)=> {
    console.log(pre,cur);
    return(pre - cur)
} );
// console.log(sum);

/**
 * reverse sort
 */
let arr1 = [1,2,3,4,5,10,15,18];
arr1.reverse();
console.log(arr1);
arr1.sort();
console.log(arr1);
//一致则从小到大
arr1.sort((a,b)=> a-b);
console.log(arr1);











