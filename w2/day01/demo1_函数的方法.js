function fun() {
    console.log('我是fun函数');
    console.log(this);
}

/**
 * call()/apply()
 * 这两个方法都是函数的方法，需要通过函数对象来调用，
 * 单纯的调用两个方法时，相当于执行函数，不同的是我
 * 们可以传入一个对象指定为第一个参数，对象会成为函
 * 数执行时的this
 * 
 * call()可以将实参在对象后面依次传递
 * apply()需要将实参放在数组中传递
 */

function Person() {
    this.age = 18;
}

function fun(a,b){
    console.log(this.age);
    console.log(a+b);
}
var p1 = new Person();
fun.call(p1, 4, 5);
// fun.apply({ age: 18 }, [a, b]);


