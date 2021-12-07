/*
    toString()方法,a的值分别为下面几个类型时的结果
    num -> string
    null -> TypeError: Cannot read property 'toString' of null
    undefined -> TypeError: Cannot read property 'toString' of undefined

    
    调用String函数转换
    num ->string
    null -> string
    undefined ->string
*/

var a=Infinity;
a=a.toString();
console.log(a)
console.log(typeof a) //string

// var b=null;
// b=String(b);
// console.log(b);
// console.log(typeof b);

