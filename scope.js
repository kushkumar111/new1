// Global variable
var k = 123446;

console.log(k);

function b() {
    // Local variable
    var i = "KUSH KUMAR SHARMA";
    console.log(i);
}
b();
//Variable can never be accessed outside a Function
// i.e i can't be accessed by outside in function b()
console.log(i);