console.log(this);
// window가 찍혀나온다 전역스코프에서 사용하는 this는 전역객체 window객체를 가르킴

({
  a: 1000,
  checkThis() {
    //선언식
    console.log(this);
  },
}).checkThis();
// ()로 묶어두면 객체라고 인식한다! ()없으면 분할된 스코프로 인식한다.
// this를 콘솔하면 자기자신을-메서드를 포함하고있는  찍는다

class Test {
  name;
  #age;
  static area;
  // static에 this를 쓰면 안돼, 도장에서만 쓰는 static

  constructor() {
    this.func = function () {};
  }
  checkThis() {
    console.log(this);
  }
  checkThisArrow = () => {
    console.log(this);
    //자기자신이 정의된곳에서 Test스코프내에서
    // 무조건 인스턴스test 객체가 되는거야 10:24
  };
}

console.dir(Test);
// Object.keys();
// Object.values();
// Date.now();
// static 정적메서드?????
// class자체에서 쓸수있는 메서드,변수

const test = new Test();
//test인스턴스 객체를 사용해서 this는 객체를 가져온다
test.checkThis();
test.checkThisArrow();

function TestFunc() {
  this.func = function () {};
}
TestFunc.area = "hi";
console.log(TestFunc.area);
//생성자함수에..프롬퍼티...11:24
TestFunc.prototype.checkThis = function () {
  console.log(this);
  // 프로토타입에 펑션을 넣어둔것????
};
TestFunc.prototype.checkThisArrow = () => {
  console.log(this);
  // this는 window라고 잡혀
  //  전역스코프라서  window객체에서 chechkAroow
  // 화살표함수는 바인드가 안먹혀 this를 인스턴스에 고정시켜서 못바꾸게해
};

const testFunc = new TestFunc();
testFunc.checkThis();
testFunc.checkThisArrow();
// testFunc.checkThisArrow2 = () => {
//   console.log(this);
//   // 이거도 window가 뜰거야 10:30
// };
// testFunc.checkThisArrow2();

const temp = {
  checkThis() {
    if (this == temp) {
      console.log("같다");
    } else {
      console.log("다르다");
    }
  },
};
temp.checkThis();
// 같다라고 나온다!!!!!

// 명령어는 이런건 중복으로 쓰면안돼- 규칙이야 let,const, this

test.checkThis.bind(window)();
//함수도 객체다 (프로토타입에서 봤을때)
// bind는 다시 정의해준다 --> 원본을 건드리지않아
//고차함수인 이유는 호출해서 리턴으로 함수를 반환해주니까
// this는 test였는데 bind로 window를 적으면 window객체라고 뜬다.
test.checkThis.bind(testFunc)();
// 다시 func로
// this만 바꿔서 재정의 해주는거야
const testTemp = test.checkThis.bind(temp);
testTemp();

test.checkThis();
//다시 호출하면 test로 돌아가

const student = {
  name: "전상민",
  info() {
    console.log(`내 이름은 ${this.name}입니다`);
  },
};
student.info();

const student2 = { name: "박상현" };
student2.info = student.info.bind(student2);
student.info.bind(student2)();
// this만 바꿔서 새로운 함수를 만드는거야. 정의된것만 새로운 객체로
student.info();
//원본은 남아있어 전상민 다시호출해도
student.info.bind({ name: "김보람" })();

test.checkThisArrow.bind(testFunc)();
test.checkThisArrow.bind(window)();
// 화살표함수는 this가 무조건 고정되어있다 ->bind를 써도 수정되지않아!!!!
// 그래서 this안쓰고 that을 쓰는 사람이있다

// function은 bind로 알아서 바꿔져
// 화살표함수는 bind안먹혀

// 클래스나 프로토중 못고르면 클래스
// 인스턴스에 넣어줄 메서드를 만들거면 화살표함수를써라 10:28

// console.dir((46846).toString);
// console.dir(Number);
// 최상위 프로토타입은 Object 그위는 없어 null 나와

//

// 클로저, Closure
// 실행컨텍스트를 전면 부정하는거야..

function closure() {
  let a = 1234;
  return () => {
    return a;
    // a를 리턴하기때문에 클로저 형식이고
    //  자체적인 private라고 볼수있어
    // 캡슐화
  };
  //고차함수
  //a를 밖에서 쓸수없고
  // 함수가 실행되고 끝나면 스택이 빠지면서 a가 사라질거야
  // 여기안에선느 여태까지
}

const tempClosure = closure();
//반환받은 함수를 tempClosure가 가지고있는거야
console.log(tempClosure());
// 저장해둔 함수(리턴받은함수)를 다시 불러올수가있는것

// 원래는 a가 없어야 하는데 불러올수는 있어, 수정은 불가능해
//-> 나온결과로 a를 쓰고있어서
// -> 없어지면 안된다고 인식해서 콜스택상에 남아있어 (실행컨텍스트에서)
//남아있는 콜스택을 클로저라고 한다. -> 실행컨텍스트가 쌓여있는그대로인거야
// 끝난 함수안에 있는 함수가 리턴 11:43

console.dir(tempClosure);
console.dir(closure);
console.dir(test.checkThis);
