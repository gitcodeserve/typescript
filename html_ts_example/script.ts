var x: number = 123
console.log(x);

var str:String = "Shantanu Sahay"
console.log("String is ", str);

var arrayInt : number[] = [1,2,3];
console.log(arrayInt);

var anyInt : any = "Abhishek"
console.log(anyInt);



class Greeter {
    constructor(public greeting: string) { 
        console.log("Constructor called - " + greeting);
    }
    greet() {
        console.log("$$$$$"+this.greeting);
        return "<h1>" + this.greeting + "</h1>";
    }
};

var greeter = new Greeter("Hello, world!");
    
document.getElementById("main-body").innerHTML = greeter.greet();