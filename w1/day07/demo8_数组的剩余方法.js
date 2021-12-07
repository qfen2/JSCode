var arr1 = ['曹操', '徐晃', '曹仁'];
var arr2 = ['刘备', '关羽', '赵云'];
var arr3 = ['孙权', '吕蒙', '陆逊'];

//concat(): 将两个数组合并并返回，不会对原数组产生影响
var newArr = arr1.concat(arr2,'单个元素');
// console.log(newArr); //[ '曹操', '徐晃', '曹仁', '刘备', '关羽', '赵云', '单个元素' ]

//join(): 类似于python中的join()
var sArr = arr1.join('');
// console.log(sArr);  //曹操徐晃曹仁

//reverse(): 将数组反转并返回，会修改原数组
// var rArr = arr1.reverse();
// console.log(rArr);

//对数组进行排序，会改变原数组，排序时会按照Unicode编码进行排序
/**
 * 自己制定规则
 *  sort()后跟一个函数，函数返回值
 *      >0,交换位置
 *      <0,不动
 *      =0,不动
 */
arr1.sort(function(a,b){
    //升序排列
    return a-b
    //降序排列
    // return b-a
});
console.log(arr1);
