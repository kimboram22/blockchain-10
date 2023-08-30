// Buffer 쪼개보기
const fs = require("fs");
const readStream = fs.createReadStream("./test.md", { highWaterMark: 16 });

const data = [];
readStream.on("data", (buffer) => {
  data.push(buffer);
  console.log(buffer);
});

readStream.on("end", () => {
  console.log(Buffer.concat(data).toString());
  console.log("다 읽었습니다!");
});
