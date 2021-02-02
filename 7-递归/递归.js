let i = 0;
function re() {
    i++;
    re();
}
//测试最大迭代次数 15651
try{
    re()
}catch (e) {
    console.log(`i=${i} error:${e}`)
}
















