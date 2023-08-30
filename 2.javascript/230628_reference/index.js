let a = "임시로 확인용입니다.";
console.log(a);

// object, 객체 {} 안에 묶여있어야
//변수obj안에 변수a가 들어갔다 -> a를 property 나 key라고 부름
//키의 값이 무엇인지 프로퍼티의 값이 뭔지, 명령을 따로하지않음
let obj = {
  a: "이것은 값입니다.",
  property: "value",
  key: "value",
  obj2: {
    a: true,
    // 묶여있는거라서 다른 키야
  },
  //배열하면서 객체 추가, 객체에는 순서가 없어 스펠링순으로 나와
  b: "saseef",
};
console.log(obj);
console.log(obj.a);
obj.b = "추가된 키와 값입니다.";
console.log(obj);
// console도 객체 .을붙여 가져오니까 -> 객체들은 .을 찍어서 가져올수있어
console.log(console);
console.log(obj.obj2.a);

console.log(window);
// window 객체 : 브라우저에 대한 모든 정보를 가지고있음 location, 사용자의 정보도 받아올수있음(모바일이면 모델명도) navigator
console.log(navigator);
// window 객체가 최상위 객체로 모든게 깔려있어서 window 객체에서 가져다 쓰는거다.

let letNumber = 1;
// callstack에 저장됨
number = 2;
// window 객체에 저장됨 , 그래서 이렇게 적으면 'window.' 생략했다고  생각하면됨
console.log(window);
// 이것도 원래는 window.console.log 인 셈
console.log(Math.random());
// 0부터 1사이로 소수점으로 나옴

String("안녕하세요.");
("안녕하세요");
// String(18348);
// 위에 두개는 크게 다르지않아 객체야. string의 정보를 가지고있는 객체가있어서 String이라고 적음
// string을 만들어준다.로 이해하기

console.log(Number("sdfeg"));
// NaN 이라고 뜨지만 type(자료형)에는 숫자로 뜬다
console.log("dfdf".length);

// 자료형,type
console.log(typeof 1234);
console.log(typeof "asdf");
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof obj);
console.log(typeof obj.key);
console.log(typeof obj.obj2.a);
// typeof는 명령어!

console.log(new Date());
// 초록색으로 뜨는 건 클래스고 대문자로 시작해
console.log(Date.now());

//아래부터 배열
let array = [
  12345,
  "adfe",
  1234,
  true,
  false,
  undefined,
  null,
  { a: "dfdf", b: [] },
];
console.log(array);
// length를 알려주고 8개를 넣어서 (8)라고 뜨고 , 배열은 무조건 순서가 있어서 적은대로 나와

// 자바스크립트의배열은 배열이 아니라고 한다(), 다른언어에서는 절대 불가능한 형태야,타입에 지정된 것만 넣을수있어
// 자바스크립트는 메모리에 정해진게없어서 무한대로 계속들어가니까,
let arrayObj = {
  0: "dfadfd",
  1: 644654,
  2: true,
};
console.log(typeof array);
console.log(typeof arrayObj);
// 객체를 가져다 배열처럼 사용할있어
// 아직 이해못함 모아두기!!!!!!!!

console.log(array[1]);
// adfe를 가져옴
//컴퓨터는 숫자셀때 0부터 센다!! 1은 사람기준
let tempA = "a";
console.log(obj[tempA]);
// console.log(obj[a]);
// undefined라고 뜬다 -> 임시로 확인용입니다. 글자라서 "" 를 넣어야하고
console.log(obj["임시로 확인용입니다."]);
// console.log(obj["a"]);
console.log(a);
console.log(arrayObj[1]);
// 644654라고 뜬다
// obj.a는 obj["a"]와 obj[tempA]와 같다!
// 단 tempA="a"

const students = [
  {
    name: "강수빈",
    age: 26,
    job: "학생",
    hobby: ["애니감상", "달리기", "팔굽혀펴기"],
  },
  {
    name: "임태훈",
    age: 29,
    job: "학생",
    specialty: [],
  },
];
// 단점으로 협업할때 힘들어 취미로 hobby로 적을수도있고 다양하게 적을수있기때문에

console.log(students[0].hobby);
console.log(students[1].hobby);
console.log(students[0].specialty);
console.log(students[1].specialty);
console.log(students[0].gender);
console.log(students[1].gender);
// 찾아봤는데 없으면 undefined라고 뜬다.

const board = [
  {
    title: "제목입니다",
    text: "내용입니다",
    createAt: 12365465,
  },
];
console.log(board);

const guide = [
  {
    title: "개별 강점 강화",
    contents: ["본인의 강점을 살린 포트폴리오", "업계 트렌드 및 자료제공"],
  },
  {
    title: "면접 및 자소서",
    contents: [
      "빅데이터를 통한 면접 컨설팅",
      "AAA회사 우수 사례를 통한 자소서컨설팅",
    ],
  },
  {
    title: "모의면접",
    contents: [
      "인성 면접 가이드",
      "기술면접 가이드",
      "구직 전략 및 연봉협상 가이드",
    ],
  },
  {
    title: "개별 강점 강화",
  },
];
