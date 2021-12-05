/**
 * for(初始化表达式;条件表达式;更新表达式){
 *      console.log();
 * }
 * 三个表达式都可以省略，如果全省略，则为死循环
 */

// for(var i=1;i<=10;i++){
//     console.log(i);
//     console.log('这是第'+i+'次');
// }

//打印1-100之间奇数的和
// sum=0;
// for(i=1;i<=100;i+=2){
//     sum+=i;
// }                                                                                              
// console.log(sum);

//打印水仙花数
// for (var i = 100; i < 1000; i++) {
//     if (parseInt(i / 100)**3 + (parseInt(i / 10) % 10)**3 + (i % 10)**3 == i) {
//         console.log(i);
//     }
// }

//for嵌套
for(var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
        console.log('*')
    }
}

