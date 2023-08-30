class Test {
  name;
  #age;
  static area;

  constructor() {
    this.func = function () {};
  }
  checkArea() {
    console.log(this);
  }
}
console.dir(Test);
const test = new Test();
console.log(test);

function TestFunc() {
  this.func = function () {};
}
TestFunc.area = "Hi";
console.log(TestFunc.area);
