/**
 * 条件运算符也叫三目运算符
 * 条件表达式?语句一:语句二;
 * 
 */

// false==0?console.log('√'):console.log('×');

//获取两个值中的最大值
var a = 20;
var b = 12;
var c = 15;

// var max = a>b?a:b;
// console.log(max)
//获取三个值中的最大值

var m = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(m)