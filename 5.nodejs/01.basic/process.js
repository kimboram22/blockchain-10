// console.log(process);

console.log(process.version); // v18.17.1

console.log(process.arch); //x64

console.log(process.platform); // linux

console.log(process.pid); // process id 2092

setInterval(() => {
  console.log("실행되나?", process.pid);
}, 1000);
