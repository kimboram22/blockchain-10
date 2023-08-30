// Scope {} 중괄호의 의미
// 코드를 묶어주는 역할이다.
{
  let a = 0;
  // 지역 변수, 지역 스코프
  // 안에서 묶였을때 인식을 못해
}
let a = 0;
//전역변수 , 전역 스코프
console.log(a);

// let a = 0;
// let의 특성은 한번 선언된것은 또 사용할수 없어
// 하지만 지역변수로는 쓸수있어 스코프 안에서만

{
  let a = 3;
  console.log(a);

  // 스코프안에서 콘솔을 먼저쓰면 에러
  // ???? 9시31분수업내용 다시 확인하기
}
console.log(a);

// 스코프내에서 선언된건 지역변수
// 스코프 밖은 전역변수- 최상위에 있다면

function funcScope() {
  //함수 스코프(지역 스코프)
  //영역을 새로 하나 만든다라는 의미
}

for (let i = 0; i < 10; ++i) {
  console.log(i);
  // 이형식도 지역스코프!!!!!!!
  //    안의 i 와 바깥의 i가 다른것임---이게 스코프
}
let i = 10;
// for문 더 공부하기!!!!!!!!
//for while
//구조와 흐름!!!!!!!!

//

function sum(num1, num2) {
  num1 = 1;
  num2 = 2;
  return num1 + num2;
}

console.log(sum());

function sub(num1, num2) {
  num1 = 5;
  num2 = 3;
  return num1 - num2;
}
console.log(sub());

// function cal(num1, num2, operator) {
//   num1 = 1;
//   num2 = 2;
//   //   return num1 + num2;
//   return "?";
// }
// console.log(cal(1, 2, "+"));

function cal(num1, num2, operator) {
  //   if (operator == "+") {
  //     return num1 + num2;
  //   } else if (operator == "-") {
  //     return num1 - num2;
  //   } else if (operator == "*") {
  //     return num1 * num2;
  //   } else if (operator == "/") {
  //     return num1 / num2;
  //   } else if (operator == "%") {
  //     return num1 % num2;
  //   }
  //  return "?";

  return operator == "+"
    ? num1 + num2
    : operator == "-"
    ? num1 - num2
    : operator == "*"
    ? num1 * num2
    : operator == "/"
    ? num1 / num2
    : operator == "%"
    ? num1 % num2
    : "?";
  // 삼항 연산자---->  조건 ? 참일때 : 거짓일때
  // 무슨말인지 모르겠어ㅠㅠㅠㅠ
}
console.log(cal(1, 2, "+"));
//위에 10:24분내용
// console.log(num1);
// 지역변수라 안떠

const obj = {
  a: 1,
  b: "a",
  c: true,
  d: undefined,
  e: null,
  f: function () {
    //이름없는함수--> 익명함수 -anonymous
    //변수 f라고 이름을 지어준거야
    console.log("f");
  },
  g() {
    //함수를 다른방법으로 적은거--> 선언문
    console.log("g");
  },
  h: () => {
    console.log("h");
  },
};

console.log(Object.keys(obj));
// 오브젝트 클래스로, 새로운 객체를 만드는것
// 배열로 입력한 키가 나오고
// 표를 나타날때 사용
console.log(Object.values(obj));
// 배열로 키의 값이 나와
//배열엔 키가 없어서 이름이 없어
//인덱스로 몇번째에 있는지를 찾을수는 있어!!

//아래는 비교용으로 만드신 내용
let objA = 1;
let objB = "a";
let objC = true;
let objD = undefined;
let objE = null;
let objF = function () {
  console.log("f");
};
function objG() {
  console.log("g");
}
let objH = () => {
  console.log("h");
};

function funcA() {
  console.log("a");
}
funcA();

(function () {
  //익명함수
  console.log("anonymous");
})();
// 즉시실행함수

// function () {
//     console.log("anonymous");
// }
//이 형식은 아예 사용할수가 없는 함수
// 어떻게 호출할건지에 대해 문제가 생겨서 오류가 뜬다

//위에는 이론적

// ㅇ아래는 사용법!!!!!!!!!!
// 가져다 쓰는 개념들

const students = ["강수빈", "임태훈"];

console.log(students[0]);
students.push("양원철");
// .push --> 목록에 뒤에서부터 추가를 한다는 뜻
console.log(students);
console.log(students.pop());
// 뒤에서부터 빼는
// pop의 특징으로 자기가 뺀 값을 리턴해준다???
//매개변수를 안받아
console.log(students);

students.push("양원철");
students.push("이선균");
students.push("김호현");
students.push("황현준");
students.push("김보람");
students.push("이은재");
students.push("정승교");
students.push("박상현");
students.push("전상민");
students.push("김지훈");
console.log(students);
console.log(students.indexOf("이은재"));
// 몇번째 아이템인지 알려준다 --->7
console.log(students.indexOf("정경훈"));
// 찾았을때 없으면 -1라고뜬다...
// index는 0부터 세는데 없으면 반대로 -로 가는거야

console.log(
  students.find((item) => {
    // return true;
    return item == "이선균";
  })
);
// find는 매개변수에 함수형식으로 적어주어야한다.
// 트루가 나오는걸 찾는다
// true면 강수빈이 나오고
// 참이나올때까지 아이템을 찾는거야

console.log(
  students.findIndex((item) => {
    // return true;
    return item == "이선균";
  })
);
// findIndex는 그함수가 참을 줄때 트루가 리턴할때 그 아이템이 몇번째인지 알려준다.

//
//

students.forEach((item) => {
  console.log(item);
});
// 배열내에 있는 아이템을 전부다 콘솔에 찍어 ..전부 반복(한번 사용한다. 훑는다)
//item을 매개변수로 사용하고
// 하나씩 뽑아내는,,, 아이템을 하나씩 전부 함수를 써서 사용함
//forEach는 break는 안먹혀,,,무조건 시작했으면 끝까지 실행함(애초에 멈출수가없어)
// 교수님은 item 이나 v 라고 적기도함 value
//반환값이 없어서 그냥 포이치를 적으면 undefinend나와

//1. 가장많이 쓰는
students.forEach((v) => {
  console.log(v);
});

//2.
students.forEach(function (item) {
  console.log(item);
});

//3.
function forForEach(item) {
  console.log(item);
}
students.forEach(forForEach);
// 일반함수로 만들고 콜백함수로... 그래서 이렇게는 안써
// 위에꺼와 같은 형식!!!!!!

//
//

console.log(
  students.map((v) => {
    console.log(v);
    return v + " 학생";
  })
);
// 기존의 배열을 수정해서 새로운 배열을 만들어준다.
// 한번씩 실행하면서 콜백함수가...쌓아놔...?
// map은 반환을 한다!!!!!!!

// students.map((v) => {
//   console.log(v);
//   return v + " 학생";
// });
// 굳이 쓰지않는...

//로직적으로 forEach는 결과값이없어 애초에 return값이 없어
// map을 쓴걸지 생각해야해...

//점심이후

// 배열의 사용법에 대한것(여기까지 기본적으로 알아야하는)
// 원본배열은 바뀌지않아 ,, 다시 배열을 ..
//근데 원본 훼손하는 sort, reverse,

console.log(students.join(" / "));
// 합쳐준다!!  문자로 바꿔주면서 매개변수로 그사이에 넣을것을 넣어준다. 띄어쓰기까지
console.log(students.toString());
// 문자로 바꿔준다. ,를 찍어서 나와

console.log(students.slice(1, 4));
// 01234 순으로 숫자를 지정해서 그부분을 잘라서 보여준다
// 1번아이템부터 4번아이템전에 끝난다(인덱스적으로 봤을때)
console.log(students.slice(1, -1));
// 뒤에서부터 갯수를 세서 앞에서1 뒤에서 1 자른것

// console.log(students.sort());
// 정렬- 이름순으로 정렬됨--->문자열,배열에 있어서 이렇게 나온다는 보장은없음!!
// 배열안에 배열을 넣으면 비교할수없어
//문자열은 유니코드 순서대로 비교해서
// 알파벳은 확실함
console.log(
  students.sort((a, b) => {
    return b > a;
  })
);
console.log(students);

//
console.log(
  [8, 13, 5, 3, 9, 0, 1, 2500, 100, 101, 7, 13].sort((a, b) => {
    return a - b;
    // return b - a;
    //숫자에 대한 비교가 가능해
    //하지만 문자열은 - 로 비교안돼 student
  })
);

console.log([8, 13, 5, 3, 9, 0, 1, 2500, 100, 101, 7, 13].sort());
// 첫번째자리가 같으면 다음숫자를 ......???
// [0, 1, 100, 101, 13, 13, 2500, 3, 5, 7, 8, 9]

console.log(students.reverse());
//reverse는 원본은 바꿔!!!!!!!!!(sort도 원본 훼손함)

students.push("fff");
console.log(students);
students.pop();
console.log(students);

students.unshift("강수빈");
//앞에서 추가되는
console.log(students);

students.shift();
//앞에서 빼는?????????
console.log(students);

//활용해보기
