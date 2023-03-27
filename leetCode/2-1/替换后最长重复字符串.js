
/**
 *  给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，
 * 总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。
 * @param s:string
 * @param k:number 替换次数
 */
let charReplace = function (s,k) {
    let count = new Array(26).fill(0);
    let left = 0;
    let maxCount = 0;
    let res = 0;
    console.time(1);
    for (let i=0;i<s.length;i++){
        let pos = s[i].charCodeAt() - 'A'.charCodeAt();
        count[pos]++;
        //统计原本的字母数量
        if( count[pos] > maxCount ){
            maxCount = count[pos]
        }
        //当k无法使当前最大值延续，则窗口移动
        if( i- left + 1 - maxCount > k ){
            let pos = s[left].charCodeAt()-'A'.charCodeAt();
            count[pos]--;
            left++
        }
        //更新最大值
        res = Math.max(res,i-left+1);
    }
    console.timeEnd(1);
    console.log(res);
    return res;
};
let string = 'SHDJKASNDSAIUSAJDIOAHUEDEWIBFWEIBUFJKENDJKEWSDSALNDLASKNDYASBDSAJBDKASASKNDKSAD';
charReplace(string,5);














