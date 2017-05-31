//Implementation of functional interface
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch("Shantanu Sahay", "Sahay1"));
