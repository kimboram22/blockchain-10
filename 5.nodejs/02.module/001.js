const fs = require("fs");
// console.log(fs); //{}

// 1경로 2옵션 3callback  (옵션은 생략가능)
console.log("hello world");
// fs.readFile("./README.md", (err, data) => {
//   //   console.log("err:", err);
//   if (err) throw err;
//   console.log(data.toString());
// });

fs.readFile(
  "/mnt/c/Users/KGA_29/Desktop/blockchain10/nodejs/README.md",
  (err, data) => {
    //   console.log("err:", err);
    if (err) throw err;
    console.log(data.toString());
  }
);

console.log("끝!");
