# 런타임

- 목적은 전문용어를 안쓰고 설명
- 눈으로 볼수있는게 아니기 떄문에
- 추상적으로는 납득이 안되서 외우기도 힘들기때문

`런타임` : 실행

- 코드를 실행해주는 아이
- 컴퓨터는 0,1로
  - 메모리
  - CPU

메모리 ==> 데이터 저장
CPU ==> 연산

```js
const a = 3;
const b = 2;
a + b;
```

code가(runtime)돌아가는 환경이 2가지 : 하나는 브라우저, 하나는 Node.js

- 왜?? 용도가 달라!
  - 링크이동, dom, 브라우저
  - 브라우저에서 js는 한계적이야 (해킹?)
  - 브라우저 안에 js runtime이 포함되어있어
  - 노드js는 브라우저에서 안되는것을 포함 (파일을 열수있어-> js로 내 컴퓨터를 조작하고싶을때 사용)
  - 브라우저를 조작하고싶은지, 내 컴퓨터를 조작하고 싶은지 용도가 달라
  - 노드는 그래서 '통신'을 구현 (소켓통신을 한다던지)
  - input output (파일조작이 가능해서 웹서버를 만들수있고 그걸로 통신 구현)

우리의 목적은 코드 실행에 그림을 그릴수있는지
-> 실체적인 코드를 보고 추상적이게 그림을 그릴수 있는 수준
(메모리 그림으로 그려주신것처럼 이해하기가 쉬워지니까)

런타임의 추상적인 느낌을 알아가는 과정
Call Stack

```js
const a = 10;

function fn() {
  console.log(c);
  let c = 10;
}
let b = fn();
const c = 10;
console.log(a + b);
fn();
```

1. 평가가 먼저 일어나 -> 선언을 먼저읽어(함수,변수)
   const a, function fn, let b를 평가해
2. 평가 된 후에 실행이되는거야 -> console.log(c)가 실행되지않아서 터져, fn()이 호출되기전이라서
3. const a 를 한번더 적으면, 두번째 const때문에 터져 -> 변수 선언(평가가 먼저 일어나, 함수보다)

## 호이스팅

```js
function fn() {
  console.log(a);
  let a = 10;
}
fn();

function fn() {
  console.log(a);
}
fn();

// 위 두개의 에러 문구 차이를 설명할수 있어야해

function fn() {
  // let a
  console.log(a);
  // 선언할수없는 존? 에러가 뜨게 만들어둔거야
  // TDZ (Temporal Dead Zone)
  let a = 10;
  // a = 10;

  //이렇게 적었다는거야
}
fn();
// console.log(a);
// const a = 10;
```

선언전에 .log를 실행하냐고 에러가 뜸
평가자체가 a를 적재해놓고
호이스팅은 선언문이 ...10:01
변수의 선언부분(평가)을 먼저 알아야해서 -> js 특징

## 실행

```js
const x = "x";
function c() {
  const y = "y";
  console.log("c", y);
}

function a() {
  const x = "xx";
  console.log("a", x);
  function b() {
    const z = "z";
    console.log("b", x);
    c();
  }
  b();
}
a();
c();
```

null undefined 의 차이

## 이벤트 루프

- 목적 : `비동기` 코드를 이해하기 위한 개념/ 그림 도식화
  - 프로세스, 스레드 (cs지식 컴퓨터 용어)

* 익스플로러, 크롬(브라우저)를 예제로 설명

- 작업관리자에서 작업을 끝내는게 프로세스
- 프로그램 : 그림판, 엑셀, 등등

  - 1개의 프로세스가 열리면 고유한 프로세스 아이디 실행되는데 이게 콜스택하나와 같다고 보면 된다!!!

- 프로그램 하나에 여라가지 동작을 동시에 처리하기 위해서는 스레드가 필요
  - 스레드 하나가 콜스택 하나라고 인식하고
  - 스레드가 3면 하나하나 따로 콜스택을 쌓을수가있는것!
    - 따로따로 명령을 내릴수가있어 이게 비동기
- 동기는 싱글스레드! 명령은 하나밖에 못해
- 빨래하고 정리하고 편의점가서 우유를 사오라는 명령

  - 동기는 빨래를 1시간동안 기다려
  - 비동기는 1번스레드에 빨래를 하고, 2번스레드에 편의점을 가는거야

- 익스플로러는 브라우저 전체가 다꺼져 (탭하나하나를 스레드로 보고)
  - 여러 스레드가 있어도 총괄하는것은 프로세스인데
  - 프로세스가 망가졌을경우 전체가 다 꺼져
- 크롬의 경우 탭하나에 응답없음이라고 뜨고, 그 탭하나만 지울수있어

  - 탭 하나하나를 프로세스로 처리함
  - 작업관리자를 보면 크롬은 엄청 많이 떠!

- 스레드 장점 :스레드끼리 변수 공용이 가능해 (데이터 공유가 가능, 메모리에있는것을 가져올수있는지)

  - 프로세스는 공유안돼

- js는 단일(싱글)스레드, 컨트롤할수있는 스레드는 하나뿐이라서
  - 하지만 실질적으로는 하나 더 있어
  - 그게 web API !!!
  - 공부할때 콜스택그림과 webAPI 2개의 그림을 그릴수있어야해!!!!!

```js
function a() {
  a();
}
a();
// a가 계속 쌓여 터져 -> 스택오브플로우
```

이벤트 루프 필요한 이유

비동기 : 1을 찍고 1뒤에 2를 찍고 1초까 끝나면 3을 찍고싶을때
`1`
1초뒤 `2`
`3`

```js
// 내장객체
function init(window) {
  console.log("hello world!");
}
init({ setTimeout: () => {} });

console.log(1);
//?
const a = () => {};
window.setTimeout(a, 1000);
window.setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);

// 1
// 3
// 2

function show(fn) {
  fn();
  console.log(3);
}
console.log(1);
window.setTimeout(() => {
  console.log(2);
}, 1000);

show(() => {
  console.log(4);
});

console.log(1);
window.setTimeout(() => {
  console.log(2);
  console.log(3);
}, 1000);

// 1
// 1초뒤에 2
// 3

console.log(1);
window.setTimeout(() => {
  console.log(2);
  window.setTimeout(() => {
    console.log(3);
  }, 2000);
}, 1000);

console.log(1);
window.setTimeout(() => {
  console.log(2);
  window.setTimeout(() => {
    console.log(3);
    window.setTimeout(() => {
      console.log(4);
    }, 4000);
  }, 2000);
}, 1000);
// 콜백헬이 일어나...그래서 프로미스가 나온것!!
// 근데 프로미스도 지저분해져서 어싱크어웨이가 나온?????
// 이벤트루프를 이해하면 다가능해 납득먼저
```

window객체는 콜스택에서 뭐할때 실행돼??11:28

내장객체는 window안에 다 있어
setTimeout도 window가 생략되어있는것!!!

콜백을 사용하는 이유는 함수값을 던져서 처리하기위함
지정하기위해서 11:47
콜스택은 컨트롤할수있지만 백그라운드는 안돼

1. `실행`에 대한 문제 (콘솔순서와 그림까지)

```js
function inner() {
  console.log(3, this);
  const outer = () => {
    console.log(2, this);
    const hello = () => {
      console.log(4, this);
    };
    hello();
  };
  outer();
  return () => {
    console.log(1, this);
  };
}
const fn = inner.call({ name: "ingoo" });
fn();
```

2. 문제 콜백 예습 (1번문제의 이해가 됐을경우)

```js
const 아반떼 = () => {}
const 소나타 = () => {}
const 제네시스 = () => {}

자동차경주
1초 뒤에 제네시스 go
2초 뒤에 소나타 go
3초 뒤에 아반떼 go
아반떼가 go가 되었으면 마지막에 끝이라는 출력도 나오게하기

3초 뒤에 제네시스 go
2초 뒤에 아반떼 go
1초 뒤에 소나타 go
소나타 go 되면 마지막에 끝이라는 출력도 나오게하기
```
