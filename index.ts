const a: string = "Hello world";

// string,number,Array,null, undefined,bollen
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

console.log(substract(2,5));