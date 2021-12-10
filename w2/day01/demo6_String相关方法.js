/**
 * String行管属性和方法
 * 
 */

//charAt()获取指定索引位置的字符
var s = 'Hello World';
r = s.indexOf('H');
r2 = s.charAt(s.indexOf('H'));
// console.log(r2);
//charCodeAt()获取指定索引位置字符对应的Unicode编码
//对应的是String.fromCharCode，获取指定Unicode编码对应的字符

re = ''.charCodeAt(0); //A:65,a:97,0:48
// console.log(re);

//concat()拼接字符串

//str.indexOf()，查看字符串是否有指定字符，如果有则返回所以，没有则返回-1
//可以指定第二个参数，表示索引开始的位置
//lastIndexOf()从后往前找
var str1 = 'hello python';
// console.log(str1.indexOf('j'));
// console.log(str1.indexOf('o',5));

//slice()切片操作
// console.log(str1.slice(1,-1));

//substr()类似于splice

//
console.log(str1.toUpperCase());

