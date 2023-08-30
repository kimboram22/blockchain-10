// "A".charCodeAt(0);

// const buffer = Buffer.from("a");

// console.log(Buffer);

const buffer = Buffer.from("보람");
console.log(buffer);
console.log(buffer.length);

const arr = [Buffer.from("Hello"), Buffer.from("World")];
console.log(arr);

const concat = Buffer.concat(arr);
console.log(concat);
console.log(concat.toString());

// const alloc = Buffer.alloc(5);
// console.log(alloc);
// 5 byte 로 00 00 00 00 00
