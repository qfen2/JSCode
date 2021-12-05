/**
 * 使用Function创建函数对象
 * 
 */

//使用构造函数创建函数
// var fun=new Function(console.log('这是我的第一个对象'));
// fun();
// console.log(fun);

//用函数声明创建函数
function fun1(name){
    console.log(name);
}

// fun1('hello');

//函数表达式创建函数,传形参
var fun2=function(name){
    console.log('这是用函数表达式创建的函数fun2')
}
// fun2()


function sayHello(fun) {
    console.log('fun='+fun2);
    return fun();
}

sayHello(fun2);