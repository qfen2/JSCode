//创建数组对象，也是Object类型
var arr=new Array();
//向数组中添加元素
arr[0]=1;
arr[1]=11;
arr[2]=23;
// arr[10]=55;
//查看数组的长度，对于连续数组，length即为数组的长度
//对于不连续的数组，length=最大的索引+1
// console.log(arr.length);

//修改length，如果length大于最大索引，则向后添加空数据
//如果小于最大索引，则会删除后面的数据
// arr.length=15
// console.log(arr)

//往数组的最后边添加数据
arr[arr.length]=10
console.log(arr);
