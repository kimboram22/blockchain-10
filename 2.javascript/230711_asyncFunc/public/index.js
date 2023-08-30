function pleaseCallback(tempLog) {
  tempLog("안녕");
  //콜백함수를 호출한것
}
pleaseCallback(console.log);
// 콜백함수를 매개변수로 넣고 함수를 사용하는방법
// 콜백함수를 받는 함수 -> 고차함수
// 고차함수 2가지 조건?? 하나는 위에꺼
// 두번째; 함수를 리턴했을때 나온게 함수일때면 고차함수 ---> 거의 없어..
// 둘중에 하나라도 함수를 쓴다면 고차함수

pleaseCallback((temp) => {
  console.log(temp);
});
// forEach, array findIndex, fliter 등등 고차함수인거야 적을때 사용했어
// 콜백함수를 전달받는게 고차함수
// 매개변수를 받는게 콜백함수

// 함수자체를 반환하는 (리턴하는)
function higherFunc() {
  return console.log;
}
console.log(higherFunc());
higherFunc()("고차함수");
console.log(`higherFunc() == console.log : ${higherFunc() == console.log}`);
// 로그메서드가 이걸받아????
// higherFunc을 호출()하면 그 리턴값이 콘솔로그메서드이다!!!!!
//그래서 higherFunc()('여길 콘솔로그처럼 쓰는거임')

function sum(a, b) {
  return a + b;
}
const tempValue = sum(2, 60); //62, number
console.log(tempValue);

function higherFunc1() {
  return sum;
}

const tempFunc = higherFunc1();
console.log(tempFunc == sum);

// console.log(
//   [45, 1, 5, 6, 16, 7, 23, 6, 67, 87, 32, 5, 67].sort((a, b) => {
//     return a - b;
//   })
// );

console.log(
  [5, 79, 46, 36, 1, 3, 9, 78].sort((a, b) => {
    return a - b;
  })
);

//   배열 sort도 고차함수 (화살표함수를 넣어주어서)
// 익명함수를 써서....a,b 사용한 콜백함수도 익명함수

// 함수를 리턴을 받았는데 함수다 -> 고차함수
// 9:45분내용
// 둘다 해당하지않는 sum 일차함수

//익명함수 이름이없다 -- 표현식이라던가, 화살표함수들을 통칭해서 익명 어나미머스,
// 전체적으로 하나로 묶고

(function () {
  //원하는 내용을 넣는다
  // 익명함수
})();
//즉시실행함수.. 잘안쓰는...
// 어디에 저장되는지 .. 힙에있다가 이름이없어서 바로 삭제될거야

const tempFunc1 = () => {
  // 즉시실행함수와 같은거지만 이름이 있어서 어딘가에 저장이될거야
  // ()=>{} 이건 표현식이야
  // 이건 변수에 들어간거라서 익명함수라고 볼순없엉
  //개념자체를 외운다아아아아
};
tempFunc1();
//

// 재귀함수
// function Func2() {
//   Func2();
//   // 자기 자신을 호출한다. 다시실행한다 -> 스택이 계속 쌓여서 스택 터져
// }
// 재귀함수는 끊어주지않으면 계속 호출해서 오류가난다

function Func2(num) {
  console.log(num);
  if (!num) return 0;
  // 넘버를 부정 -> 10이면 false --> 0이 나올때까지 --> 0이면 true이니까 그때까지 자기자신을 리턴하고 끝내??
  // 리턴으로 0이면 끝내라는 말이야
  Func2(num - 1);
}
Func2(10);
//10시수업내용

//피보나치수열...?
function fibonacci(idx) {}
// [1,1,2,3,5,8,13,21,34]
// fibonacci(7)  => 21이 나와야하는거

// 1+1 2
// 2+3 5
// 5+8 13
// 하노이의 탑????????

// for (let i = 0; i < 10; ++i) console.log(i);
// 한줄로라면 { } 없어도 처리해

//
// const interval = setInterval(() => {
//   console.log("반복 실행");
// }, 1000);

// const timeout = setTimeout(() => {
//   //시간초과설정
//   console.log("기다렸다가 실행");
//   clearInterval(interval);
// }, 10000);
// //1000이면 1초뒤에 실행되는 거야

// clearTimeout(timeout);
// clearInterval(interval);
// set친구들을 멈춰주는거야

for (let i = 0; i < 10; ++i) console.log(i);

//js runtime 설명 10:49

// function funcA() {
//   setTimeout(() => {
//     console.log("A");
//     funcB();
//   }, 1000);
// }

// function funcB() {
//   setTimeout(() => {
//     console.log("B");
//     funcC();
//   }, 1000);
// }
// function funcC() {
//   setTimeout(() => {
//     console.log("C");
//     funcA();
//   }, 1000);
// }
// funcA();

//

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((item) => {
  console.log(item);
});
// stack에 2개가 아니라 최대 스택으로 4개가 쌓이는거야
// forEach도 호출하고
//   익명함수내에서 item==1
//   console.log
//   -> 최소 3중첩  -> 함수내애서 함수를 호출했을때
// forEach는 함수를 호출해
// for while은 함수를 호출하지않아...
// 11:30분수업내용

// for (let i = 0; i < 10; ++i) {
//   setTimeout(() => {
//     console.log(`test1-${i}`);
//     //1초를 기다렸다가 한번에 다나온거야
//     // for문은 그냥 실행되는거야 (for문은 콜스택에 쌓이지않아)
//     // 콜백함수로 10개가 쌓여있다가 1초뒤에 콜백큐에서 나온거야 -> 비동기
//   }, 1000 * (i + 1));
//   // 이렇게 적으면 1초에 하나씩 하나씩
// }

// setTimeout(() => {
//   for (let i = 0; i < 10; ++i) {
//     console.log(`test2-${i}`);
//   }
// }, 1000);

// let tempIdx = 0;
// const tempInterval = setInterval(() => {
//   if (tempIdx > 9) clearInterval(tempInterval);
//   console.log(`test3-${tempIdx++}`);
// }, 1000);
// test3-10 까지 나와 --> 콜백큐에 넣어놔서  >8을 해야했던

// let tempIdx = 0;
// const tempInterval = setInterval(() => {
//   console.log(`test3-${tempIdx++}`);
//   if (tempIdx > 9) clearInterval(tempInterval);
// }, 1000);
// test3-9 까지나와@!!

//

// function timeoutFunc(num) {
//   if (num > 9) return;
//   //10이상이면 멈춰라
//   // {}없으면 그 한줄만 실행해준다. 바로 밑에 내려가있는거랑..
//   //    한줄로 적는 형식을 인라인형식(코드--삼항연산자)이라고 한다
//   setTimeout(() => {
//     console.log(num);
//     timeoutFunc(num + 1);
//   }, 1000);
// }
// timeoutFunc(0);

// 다른 방식
// function timeoutFunc(num) {
//   if (num < 10)
//     setTimeout(() => {
//       console.log(num);
//       timeoutFunc(num + 1);
//     }, 1000);
//   console.log("확인");
//   // 확인이 먼저찍히고 숫자들이 1초뒤에 찍혀
// }
// timeoutFunc(0);

//

let a = 0;
if (a < 1) console.log(a);
else if (a < 2) console.log(a - 1);
// a가 1일때... 2가 1보다 작으니까 1-1 0이나와  ->if문 말고 else if
else if (a < 3) console.log(a - 2);
else if (a < 4) console.log(a - 3);
else if (a < 5) console.log(a);
console.log(a + 10);
//12시3분수업내용

// if (a < 1) console.log(a);
// else {
//    if (a < 2) console.log(a - 1);
// else {
//     if (a < 3) console.log(a - 2);
// else{
//     if (a < 4) console.log(a - 3);
// else {
//     if (a < 5) console.log(a);
//}
// console.log(a + 10);}
//   이거 뭔소린지 모르겠어ㅠㅠㅠㅠㅠㅠㅠㅠ
