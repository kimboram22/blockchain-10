const fs = require("fs");
const path = require("path");
const FILE_NAME = "README2.md";
const filepath = path.join(__dirname, FILE_NAME);

fs.writeFile(FILE_NAME, "# Sample", (err) => {
  if (err) throw err;

  fs.readFile(filepath, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    console.log("파일 생성 성공!");
  });
});

// 여기에 readFile 적으면 틀린것!!!!
// fs.readFile(file, (err, data) => {
//   if (err) throw err;
//   console.log("hello world");
//   console.log(data.toString());
// });
