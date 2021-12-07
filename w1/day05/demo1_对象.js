/**
 * 对象（object）分类：
 *      1.内建对象
 *          由ES标注创建出来的对象，在任何的ES的实现中都可以使用
 *          MATH,Number,String,Boolean,Function,Object等等
 *      2.宿主对象
 *          由JS的运行环境提供的对象，主要指的是由浏览器提供的对象
 *          BOM,DOM
 *      3.自定义对象
 *          由开发人员自定义的对象
 */

/**
 * 使用new调用的函数为构造函数constructor
 *  构造函数是用来创造对象的函数
 *  对象的属性值可以为任何值
 *  
 * 调用属性时，如果属性不存在会返回undefined
 * 
 */

// //第一种创建对象
// var obj = new Object();
// //给对象添加属性
// obj['name'] = '孙悟空';
// //删除属性
// obj['123'] = 456
// obj['gender']='男'
// //判断对象是否包含某个属性
// console.log('name' in obj)

//第二种创建对象
var obj2={
    name:'Tom',
    age:18,
    gender:{'1':1,'2':2}
};
console.log(obj2);