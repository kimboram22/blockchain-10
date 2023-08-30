console.log(this); // {}
// console.log(global); // window이라고 입력한것과 같아

console.log(this === module.exports);

console.log(module.exports === exports);
// true가 나오지만 왠만하면 생략해서 사용하지 않는걸로

function test() {
  console.log(this === global);
}
test();
// true
