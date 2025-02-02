// 'use strict'
//a=1
fun1();
// fun2();
// fun3();
function fun1() {
    // function fun2() {
    //     console.log("fun2")
    // }
    a = 10;
    fun2();
};
function fun2() {
    while (a < 3) {
        console.log(a++);
    }
}
function fun3() {
    console.log(`a=${a}`)
}
console.log(a)
