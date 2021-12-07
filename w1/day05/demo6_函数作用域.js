/**
 * 函数作用域：
 *      在函数中，不适用var声明变量会变成全局变量
 *      调用变量时，会先在自身作用域中寻找，如果没有再在上级作用域中寻找
 */

var a=1;
function fun(){
    var a=2;
    // console.log(a);
    function func(){
        //局部变量有a，可通过window调用全局变量中的a
        console.log(window.a);
    }
    func();
}

var n=1;
function fun1(){
    //输出n时，会先在自身作用域中寻找n，由于var的特性，
    //n会被提前声明，所以输出的值为undefined
    console.log(n);
    var n=2;
}
fun1();