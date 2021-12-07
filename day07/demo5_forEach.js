/**
 * forEach()需要一个函数作为参数
 *      这个方法只支持IE8以上的浏览器，所以用这个方法需要考虑兼容问题
 */

var arr = ['曹操', '郭嘉', '诸葛亮', '刘备', '孙权'];

//我们创建但不由我们调用的函数，称为回调函数
/**
 * 浏览器会在回调函数中传递三个参数
 *      1. arr每个元素的值
 *      2. arr的index
 *      3. arr的值
*/
arr.forEach(function(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
})