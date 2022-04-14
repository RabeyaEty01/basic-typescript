var a = "Hello world";
// string,number,Array,null, undefined,boolean
//any
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase("Hello World"));
var b = 234;
function add(number1, number2) {
    return number1 + number2;
}
console.log(add(2, 3));
console.log(add(54, b));
var substract = function (number1, number2) {
    return number1 - number2;
};
console.log(substract(2, 5));
//Array<T>
var arr = [123, 345, 2789];
var arr2 = ["s", "t", "n"];
var arr1 = ["123", "345", 2789];
var id = "23";
var person1 = {
    name: "Noman",
    age: 24,
    hobby: "Sleeping"
};
var person2 = {
    name: "Ety",
    age: 22
};
//Enums
var PI = 3.1416;
var Colors;
(function (Colors) {
    Colors["color1"] = "#ededed";
    Colors["color2"] = "#ededff";
    Colors["color3"] = "#ededee";
})(Colors || (Colors = {}));
console.log(Colors.color1);
