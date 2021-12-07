/**
 * slice(start,end): 截取包含开始索引，不包含结束索引，
 * 类似于python中的切片（顾头不顾屁股）
 * 
 */

var arr = ['曹操', '郭嘉', '诸葛亮', '刘备', '孙权'];
var sliArr = arr.slice(-3, -1);
console.log(sliArr);

/**
 * splice(start,count,newObj): 删除位置元素，并将元素返回
 * 从start位置开始删，删除count个元素，并在其位置添加newObj
 * 功能很强大
 */
