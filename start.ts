type myBool = true | false;

let i: myBool = true;

function getLength(obj: string | string[]) {
    return obj.length;
}

console.log(typeof i);
let str = "Hello, world!";
let str2: string[] = ["Hello", "world", "!"];

console.log(getLength(str));
console.log(getLength(str2));

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

interface Box<T> {
    contents: T;
}

let box: Box<string> = { contents: "Hello!" };

function printStuff<T>(box: Box<T>) {
    console.log(box.contents);
}

printStuff(box);