// Prototype : 객체를 찍어내는 도장,
// Class : 객체를 찍어내는 도장...?
//메모리힙에 계속 만들고있는거야

//set
//get

//class
class Counter {
  count;
  name;
  //객체에 들어갈 키를 정해주기
  //사용할것을 선언해준것
  #pricount;
  // class Counter 내에서만 사용할수있는 private 상속되지않아!!!!
  // 다른사람이 바꾸면 안되는 내용을 #으로 주는것@!!

  //  private countPri;  ->
  //  protected countChild; -> 상속은 되지만 외부에서 못쓰는
  //  public countPub -> js전체

  constructor(name) {
    // 생성자함수
    this.count = 0;
    this.name = name;
    this.#pricount = 0;
    // this.inincrease = function () {
    //   this.count += 1;
    // };
    //this를 붙이면 객체자체가되고
    // 생성된 객체 자체를 this라고한다
  }

  increase() {
    //counter를 이용해서 increase를 만든...???
    // 앞에 function이 있다고 생각하는거야
    console.log(this);
    this.count += 1;
  }
  //class에서 메서드를 넣을수 있어
  //this없이 적게되면 프로토타입으로 들어가

  //메서드에서 this를 적어주는거야

  checkThis = () => {
    //키(이름)에다 대입한거고
    console.log(this);
  };
  // 위에 increase와 check는 대입이냐 아니냐의 차이
  getPricount() {
    return this.#pricount;
    // 메서드에서 리턴값을 내보내는것뿐이야
  }
  increasePri() {
    this.#pricount += 1;
  }
  //웹에서 조회수같은거...
}

const count = new Counter("클래스");
//count가 인스턴스
let tempCount = count.getPricount();
console.log(tempCount++);
console.log(tempCount);
console.log(count.getPricount());
console.log(count.increasePri());
console.log(count.getPricount());
// console.log(count.#pricount);
// 외부에서 접근불가, #상속불가
count.increase();
count.checkThis();

class Counter2 extends Counter {
  //
  constructor(name) {
    super(name);
    // super = Counter
    //    즉 부모 클래스를 말합니다...
    // 부모를 가져올때 내부에서 super를 붙여
  }
}

const count2 = new Counter2("자식클래스");
console.log(count2);

// prototype
function CounterFunc(name) {
  this.count = 0;
  this.name = name;
  //   this.inincrease = function () {
  //     this.count += 1;
  //   };
}

CounterFunc.prototype.increase = function () {
  console.log(this);
  this.conut += 1;
};

CounterFunc.prototype.checkThis = () => {
  console.log(this);
};

const counterFunc = new CounterFunc("프로토타입");
console.log(counterFunc);

counterFunc.increase();
counterFunc.checkThis();
// 프로토타입에서 => 화살표함수를 쓰면 window 객체가 나와

function CounterFunc2(name) {
  this.name = name;
}
CounterFunc2.prototype = counterFunc;
const countFunc2 = new CounterFunc2("자식 프로토타입");
console.log(countFunc2);

// 객체지향
// 설계하기전에
//   class에 화살표함수를 쓰라는것????

// console.log(this);
// 외부에서 this를 잡으면 전역 window객체가 찍혀

//

class BoardItem {
  title;
  text;
  #creator;
  #createdAt;
  #commnet;
  constructor(title, text, creator) {
    this.title = title;
    this.text = text;
    this.#creator = creator;
    this.#createdAt = new Date().toString();
    // 객체안에 있는 키를 수정할수는 있어???????????????
    //   근데 배열안에있는건 12:8분내용다시...
    this.#commnet = [];
  }
  getCreator() {
    return this.#creator;
    // return { ...this.#creator };
    // 새로운객체를 만들어서 메모리힙에서 수정되니까 원본은 그대로
  }
  getCreatedAt() {
    return this.#createdAt;
  }
  getComment() {
    return this.#commnet;
  }

  addComment(comment) {
    this.#commnet.push(comment);
  }
}
class User {
  #name;
  popular;

  constructor(name) {
    this.#name = name;
    this.popular = 0;
  }
  getName() {
    return this.#name;
  }
}

class CommentItem {
  text;
  #creator;
  constructor(text, creator) {
    this.text = text;
    this.#creator = creator;
  }
  getCreator() {
    return this.#creator;
  }
}
const student1 = new User("강수빈");
const student2 = new User("김호현");
const student3 = new User("황현준");
const tempboard = new BoardItem("testing", "dddddd", student1);

tempboard.addComment(new CommentItem("sdfdf"), student2);
tempboard.addComment(new CommentItem("ffffffff"), student3);

// const board = [
//   {
//     title: "asdf",
//     text: "inner Text",
//     creator: { name: "박상현", popular: 10, createdAt: "2023-07-12 11:44" },
//     commnet: [
//       {
//         text: "comment 내용",
//         creator: {
//           name: "강수빈",
//           popular: 100,
//         },
//       },
//       {
//         text: "comment 내용2",
//         creator: {
//           name: "이선균",
//           popular: 1,
//         },
//       },
//     ],
//   },
// ];

board.push(tempboard);
// 점심전 그냥 교수님꺼 보기
const rootElem = document.getElementById("root");
board.forEach((item) => {});

// 1:37분부터는 그냥 보기
//count3
