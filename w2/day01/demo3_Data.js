/**
 * Data: 时间对象
 * 
 */

var d1 = new Date();
// console.log(d1);
//创建一个指定的时间对象
var d2 = new Date("12/01/2021 00:00:00");
console.log(d2);

//getData()获取d2的日期是几日
// console.log(d2.getDate());

//getDay()获取当前日期是周几：0-6
// console.log(d2.getDay());

//getMonth()获取当前月份，结果0-11，0表示一月
//getFullYear()Time获取当前年份

//getTime()获取当前时间戳，距离格林威治标准时间的毫秒数

var d3 = Date.now();
console.log(d3);