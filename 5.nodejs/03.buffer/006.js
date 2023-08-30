const fs = require("./005");
// console.dir(fs);

fs.readFile("./test.md", (err, data) => {
  if (err) throw err;
  console.log(data);
});
