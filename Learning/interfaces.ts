interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);



interface SquareConfig {
    color? : string; //optional parameter
    width? : number; //optional parameter
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare);



//Read only properties

interface Point {
    readonly x: number;
    readonly y: number;
}

let pt : Point = {x:12, y:13};
console.log(pt);


let arr: number[] = [1, 2, 3, 4];
//let ro: ReadonlyArray<number> = arr;
let ro: Array<number> = arr;
ro[0] = 12; // error!
console.log(ro);
ro.push(5); // error!
console.log(ro);
//ro.length = 100; // error!
console.log(ro);
arr = ro; // error!


