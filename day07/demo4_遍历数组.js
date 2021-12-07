/**
 * 数组遍历
 * 
 */

// var arr=['曹操','郭嘉','诸葛亮','刘备','孙权']

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

function Person(nm, age) {
    this.name = nm;
    this.age = age;
}

Person.prototype.toString = function () {
    return 'Person[name=' + this.name + ',age=' + this.age + ']'
}

var p1 = new Person('曹操', 38);
var p2 = new Person('刘备', 45);
var p3 = new Person('孙权', 30);
//将对象放进数组中
var perArr = [p1, p2, p3];
//创建一个函数，将perArr中满30岁的对象提取出来，封装成一个新的数组并返回
function getAdult(arr) {
    var newArr = [];
    for (var i of arr) {
        console.log(i);
        if(i.age>=30){
            newArr.push(i);
        }
    }
    return newArr;
}

var result = getAdult(perArr);
console.log(result);




