const fs = require("fs");

fs.readFile("./req", (err, data) => {
  if (err) throw err;
  console.log(data);
});
