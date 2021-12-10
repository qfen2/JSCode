/**
 * 调用函数时，浏览器会传递两个隐含的参数：
 * this和封装实参的对象arguments，一个类数组对象，类似于python中的*args
 * arguments.callee: 输出函数本身
 */

function fun() {
    console.log('' + arguments);
    console.log('' + arguments.callee);
}
fun();
