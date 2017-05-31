function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var pt = { x: 12, y: 13 };
console.log(pt);
var arr = [1, 2, 3, 4];
//let ro: ReadonlyArray<number> = arr;
var ro = arr;
ro[0] = 12; // error!
console.log(ro);
ro.push(5); // error!
console.log(ro);
//ro.length = 100; // error!
console.log(ro);
arr = ro; // error!
