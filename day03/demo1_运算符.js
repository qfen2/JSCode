/*
    运算符也叫操作符

    任何值和字符串做加法运算，都会先转化为字符串在进行运算
    a=a+''; //隐式类型转换

    任何值做- * /运算时都会自动转换成Number类型

    一元运算符：只需要一个操作数
    a =+ a
*/
// var result;
// result=100-'a';
// console.log(result);
// console.log(typeof result);  String

var a=2;
a+=a;
console.log(a);
