/**
 * 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数
 * @param nums
 * @param k
 * @returns {number}
 */
var findMaxAverage = function(nums, k) {
    let maxAver = -Infinity;
    if( nums.length < (k+1)){
        maxAver = Math.max(nums.reduce((s,x)=>s+x)/nums.length,maxAver);
    }else{
        for(let i=0;i<nums.length-k+1;i++){
            let sum = 0;
            if( nums[k+i] > nums[i] ){
                continue
            }else{
                for(let j=i;j<k+i;j++){
                    sum+=nums[j];
                }
            }
            maxAver = Math.max(maxAver,sum/k);
        }
    }
    return maxAver;
};
findMaxAverage([1,12,-5,-6,50,3],4);














