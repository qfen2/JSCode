/**
 * >,>=,<=,
 * 
 * 字符比较时，比较的是Unicode编码，对位比较
 * 相等运算符，==,!=
 * 使用==比较两个值值，会自动进行类型转换
 * 1=='1' //true
 * true=='1' //true
 * 
 * 需要注意做相等比较时，null不会转化为0,
 *      null==0 //false
 * undefined衍生自null，所以undefined==null会返回true
 * 
 * NaN不和任何值相等，包括它本身，可以通过isNaN()函数判断一个值是否为一个数字
 * 
 * ===,!==,类似于python中的is
 */

var a=NaN;

console.log(isNaN(a)); //true
console.log(a!=NaN);