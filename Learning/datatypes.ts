let list: any[] = [1, true, "free"];


console.log(list);

list[1] = 100;

console.log(list);


function warnUser(): void {
    console.log("This is my warning message");
    //return "returing void"; return will throw error message in typescript while it still valid in javascript 
}
warnUser();

let unionVariable : null | undefined | string  = "xyz";


// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

//Example of Assertion
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;

console.log(strLength);


function f(shouldInitialize: boolean) : number {
    let x : number;
    if (shouldInitialize) {
         x = 10;
    }
    console.log(x)
    return x;
    
}

f(true);  // returns '10'
f(false); // returns 'undefined'

for (var i = 0; i < 10; i++) {
  console.log(i);
}
//Brain teaser
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}


const numLivesForCat : number = 9;

// numLivesForCat = 20;

const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
/*kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};*/

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;


let input = [70, 80];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2
[first, second] = [second, first]
console.log(first); // outputs 1
console.log(second); // outputs 2


function fun([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
fun([100, 200]);

let [firstv, ...rest] = [1, 2, 3, 4];
console.log(firstv); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

console.log(a);
console.log(b);

let {  ...passthrough } = o;
let total = passthrough.a.length + passthrough.b + passthrough.c.length;
console.log(total)


function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}


//spread operator

let f1 = [1, 2];
let s1 = [3, 4];
let bothPlus = [0, ...f1, ...s1, 5];
console.log(bothPlus);

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
console.log(search);