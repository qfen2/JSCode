/*
    a++(后++)和++a(前++)都会使变量的值立即增1
    不同的是：
        a++的值为原变量的值（自增前的值）
        ++a的值为自增后的值
    自减同理
        var d=20;
        d= d++ + ++d +d;
        console.log(d);
*/

// var a=1;
// console.log(a++); //1
// console.log(a); //2

var d=20;
d= d++ + ++d +d;
console.log(d); //64