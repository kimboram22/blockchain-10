const fs = require("fs");
const path = require("path");

const FILE_NAME = "var";
const filepath = path.join(__dirname, FILE_NAME);

fs.readFile(filepath, (err, data) => {
  if (err) throw err;
  const result = data
    .toString()
    .split("\n")
    .filter((v) => v)
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      //   console.log(v);
      console.log(v[0], v[1]);

      const [key, value] = v;
      acc[key] = value;
      return acc;
    }, {});

  console.log(result);

  console.log(result.host);
  console.log(result.port);
  console.log(result.user);
});
