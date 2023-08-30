// prototype 프로토타입 기반이 되는 시스템
// 디자인 패턴중의 하나로 어떠한 모양이아니라 어떻게 개발해야하는지 알고리즘이라 할수있다
// 데이터를 다룰것인가 정형화된, 잘 짜여진 내용
// MVC

// prototype, 원형
// 기존의 원본이 있고 그걸 가져다 사용하고 추가하는
function Fruit() {
  //과일
  this.sugar = 5;
  this.size = 10;
  this.seed = true;
  this.weight = 0;
}
// prototype 만든거

const fruit = new Fruit();
//변수 = 인스턴스
console.log(fruit);
// 객체로서 활용할수있어

function Strawberry() {
  this.sugar = 4;
  this.size = 1;
  this.weight = 1;
}
//스탬프(도장을) 만들었고!!!!!!!!!

Strawberry.prototype = fruit;
// 대문자인 이유는 프로토타입이다 라는 것이고
// 객체는 소문자로 그 객체에 내용이 this로 되어있는거고

const strawberry = new Strawberry();
//  만든 도장을 찍었다!!!!! 객체를 만들었다는 의미
console.log(strawberry);
// 과일에
const strawberry1 = new Strawberry();

console.log(strawberry.seed);
// 딸기에 씨앗의 내용이 없어도 내용이 나와

function KingsBerry() {
  this.sugar = 10;
  this.size = 3;
}
KingsBerry.prototype = strawberry1;

const kingsBerry = new KingsBerry();
console.log(kingsBerry.sugar);
console.log(kingsBerry.size);
console.log(kingsBerry.weight);
console.log(kingsBerry.seed);
// 내부에서 찾아보고 없으면 자기자신 프로토타입을 찾아가는

//프로토타입 예시

function Student강수빈() {
  this.name = "강수빈";
  this.age = 26;
  this.hobby = "달리기";
  this.gender = "남자";
  //this를넣어 포함해달라는 뜻
}

const 강수빈 = new Student강수빈();
console.log(강수빈);

function Student김호현() {
  this.name = "김호현";
  this.hobby = "여행";
}
Student김호현.prototype = 강수빈;
const 김호현 = new Student김호현();
console.log(김호현);
console.log(김호현.age);
//중간에 추가하면 수정된 내용이 다 들어가짐

function Student황현준() {
  this.name = "황현준";
  this.age = 28;
}
Student황현준.prototype = 김호현;
const 황현준 = new Student황현준();
김호현.footSize = 265;
console.log(황현준);
console.log(황현준.hobby);
console.log(황현준.gender);
console.log(황현준.footSize);

function Student(name, age) {
  this.name = name;
  this.age = age;
}
const 양원철 = new Student("양원철", 28);
console.log(양원철);

function Test() {}

Test.prototype = {
  func() {
    console.log("테스트중");
  },
};
const test = new Test();
test.func();
// ???????????? 수업내용 다시보고 이해하기
