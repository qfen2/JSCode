/*
    将其他类型转换为Number类型
    1. 使用Number()函数
        string(纯数字字符串) -> Number
        string(含有非数字内容) ->NaN
        空字符串或字符串全是空格 ->0
        null -> 0
        undefined -> NaN
        布尔类型
            true -> 1
            false -> 0
 */

// var a=true;
// a=Number(a);
// console.log(a); //0
// console.log(typeof a);


/*
    类似于a='13px'类型的数据，使用parseInt()提取
    123px -> 123
    123.456px -> 123
    可以使用parseFloat()方法获取有效的小数

    如果对非string类型的数据如果用parseInt/parseFloat，
    会先将数据转换为string再进行操作
    null -> NaN
    undefined -> NaN
*/
var b=undefined;
b=parseInt(b);
console.log(b); //123.456



