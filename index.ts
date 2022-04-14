const a: string = "Hello world";

// string,number,Array,null, undefined,boolean
//any

function getLowerCase(str: string) {
    return str.toLowerCase();
}
console.log(getLowerCase("Hello World"));

const b: number = 234;

function add(number1: number, number2: number): number {
    return number1 + number2;
}

console.log(add(2, 3));
console.log(add(54, b));

const substract = (number1: number, number2: number): number => {
    return number1 - number2
}

console.log(substract(2, 5));

//Array<T>
const arr3: Array<number | string> = [123, 234, "Tamim"];
const arr: number[] = [123, 345, 2789];
const arr2: string[] = ["s", "t", "n"];
const arr1: (string | number)[] = ["123", "345", 2789];

type numberAndString = number | string;
const id: numberAndString = "23";

interface Iperson {
    name: string;
    age: number;
    hobby?: string;
}



const person1: Iperson = {
    name: "Noman",
    age: 24,
    hobby: "Sleeping",
}

const person2: Iperson = {
    name: "Ety",
    age: 22
};

const personArr:Array<Iperson> = [
    person1, 
    person2
]
//Enums

const PI = 3.1416;

enum Colors {
    color1 = "#ededed",
    color2 = "#ededff",
    color3 = "#ededee",
}

console.log(Colors.color1);

// function _concat<T>(a: T, b: T): T {
//     return a + b
// }

// _concat<number>(1, 3)
// _concat<String>("Tamim", "Noman");