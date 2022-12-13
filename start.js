var i = true;
function getLength(obj) {
    return obj.length;
}
console.log(typeof i);
var str = "Hello, world!";
var str2 = ["Hello", "world", "!"];
console.log(getLength(str));
console.log(getLength(str2));
var box = { contents: "Hello!" };
function printStuff(box) {
    console.log(box.contents);
}
printStuff(box);
