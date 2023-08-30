// 절대경로

const path = require("path");

console.log(__dirname);
//  /mnt/c/Users/KGA_29/Desktop/blockchain10/nodejs
console.log(__filename);
//  /mnt/c/Users/KGA_29/Desktop/blockchain10/nodejs/002.js

const filename = "README.md";
// const file = __dirname + filename;
const file = __dirname + "/" + filename;
console.log("file:", file);

console.log(path); // {} join이라는 메서드를 가장많이 사용

const file2 = path.join(__dirname, filename);
console.log("file2 :", file2);

console.log(path.sep);
