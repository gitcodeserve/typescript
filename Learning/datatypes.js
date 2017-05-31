var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var list = [1, true, "free"];
console.log(list);
list[1] = 100;
console.log(list);
function warnUser() {
    console.log("This is my warning message");
    //return "returing void"; return will throw error message in typescript while it still valid in javascript 
}
warnUser();
var unionVariable = "xyz";
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
//Example of Assertion
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
function f(shouldInitialize) {
    var x;
    if (shouldInitialize) {
        x = 10;
    }
    console.log(x);
    return x;
}
f(true); // returns '10'
f(false); // returns 'undefined'
for (var i = 0; i < 10; i++) {
    console.log(i);
}
//Brain teaser
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
var numLivesForCat = 9;
// numLivesForCat = 20;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
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
var input = [70, 80];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
_a = [second, first], first = _a[0], second = _a[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
function fun(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
fun([100, 200]);
var _b = [1, 2, 3, 4], firstv = _b[0], rest = _b.slice(1);
console.log(firstv); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = o.a, b = o.b;
console.log(a);
console.log(b);
var passthrough = __rest(o, []);
var total = passthrough.a.length + passthrough.b + passthrough.c.length;
console.log(total);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
//spread operator
var f1 = [1, 2];
var s1 = [3, 4];
var bothPlus = [0].concat(f1, s1, [5]);
console.log(bothPlus);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
console.log(search);
var _a;
