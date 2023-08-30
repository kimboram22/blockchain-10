// fs.writeFile
// fs.createWriteSteam

const fs = require("fs");
const writeStream = fs.createWriteStream("./README2.md");

writeStream.on("finish", () => {
  console.log("end");
});

writeStream.write("#파일만들기");
writeStream.write("## 중분류");
writeStream.write("### 만들어보기");
writeStream.write("<br />");
writeStream.write("Hello world~?");
writeStream.end();
