
//functional interface - having anonymous function taking two string argument and returning boolean type
interface SearchFunc {
    (source: string, subString: string): boolean;
}

//Implementation of functional interface
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}


console.log(mySearch("Shantanu Sahay", "Sahay1"));
