/**
 * 正则表达式
 *  [^ab]：表示出了ab意外的东西
 * 
 */

//创建正则对象，第二个参数（匹配模式）i表示匹配时忽略大小写，g表示全局匹配
var reg = new RegExp('a','i'); //Object对象
//检查字符串里面是否含有a
var str1 = 'py1th2on a';
// console.log(reg.test(str1));

//split('/[]/')
var result = str1.split(/[0-9]/);
// console.log(result);

//search()，和indexOf类似，查看是否存在指定字符
var re2 = str1.search(/[a-z]/gi);
// console.log(re2);

//match()，将匹配到的数据封装到数组中返回
// var re3=str1.match(/[a-z]/ig);
// console.log(re3);
//匹配手机号用于身份验证时
// str1.match(/^1[3-9]\d{9}$/)

//replace()替换

/**
 * + 表示一个或多个
 * * 表示0个或多个
 * ? 表示0个或一个
 * .表示任意字符
 * \w表示任意字母数字下划线
 * \d表示任意数字
 * \s表示空格
 * \b单词边界 (hello world)
 */

var emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){2}$/
var email = 'fhakj@fhajd.ahkj.jkl';
console.log(emailReg.test(email));






