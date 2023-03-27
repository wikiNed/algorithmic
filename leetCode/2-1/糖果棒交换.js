/**
 * 爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 根糖果棒的大小，B[j] 是鲍勃拥有的第 j 根糖果棒的大小。

 因为他们是朋友，所以他们想交换一根糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）

 返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。

 如果有多个答案，你可以返回其中任何一个。保证答案存在。
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    var sumA=0;
    var sumB=0;
    var aBig=undefined;
    var bigArr,smallArr;
    var result=[];
    A.map((item,index)=>{
        sumA += item;
    });
    B.map((item,index)=>{
        sumB += item;
    });
    var diff = Math.abs((sumA+sumB)/2 - sumA);
    if(sumA >= sumB){
        bigArr = A;
        smallArr = B;
        aBig = true;
    }else{
        bigArr = B;
        smallArr = A;
        aBig = false;
    }
    for (let key1 in bigArr) {
        if( bigArr[key1] >= diff ){
            for (let key2 in smallArr) {
                if(smallArr[key2] === (bigArr[key1]-diff) ){
                    if(aBig){
                        return [bigArr[key1],smallArr[key2]];
                        break;
                    }
                    return [smallArr[key2],bigArr[key1]];
                    break
                }
            }
        }
    }
};
let arr1 = [1,1];
let arr2 = [2,2];
let result=fairCandySwap(arr1, arr2);
// console.log(result);

//改进方法
var fairCandySwap2 = function (A, B) {

    const asum = A.reduce((s, x) => s + x);
    const bsum = B.reduce((s, x) => s + x);
    const diff = Math.abs(asum - bsum);
    const aBig = asum > bsum;

    for (let i = 0; i < A.length; i++) {
        const num1 = A[i];
        const num2 = aBig ?　num1 - diff / 2　: num1 + diff/2;
        if (B.includes(num2)) {
            return [num1, num2]
        }
    }
};

/**
 * 给定和，求两数在数组中位置
 * @param arr 传入数组
 * @param target 目标值
 */
var findPos = function (arr, target){
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if(map.has(target - arr[i])){
            return [map.get(target- arr[i]), i]
        }else{
            map.set(arr[i], i)
        }
    }
    return []
}

console.log(findPos([2,7,11,15], 30))












