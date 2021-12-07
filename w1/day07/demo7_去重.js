//删除arr中重复的元素
var arr = [1, 2, 2, 2, 2, 4, 2, 3, 2, 4, 5, 8];
var newArr = [];
for (var i of arr) {
    if(newArr.indexOf(i)==-1){
        newArr.push(i);
    }
}

console.log(newArr);