var x = 123;
console.log(x);
var str = "Shantanu Sahay";
console.log("String is ", str);
var arrayInt = [1, 2, 3];
console.log(arrayInt);
var anyInt = "Abhishek";
console.log(anyInt);
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
        console.log("Constructor called - " + greeting);
    }
    Greeter.prototype.greet = function () {
        console.log("$$$$$" + this.greeting);
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
document.getElementById("main-body").innerHTML = greeter.greet();
