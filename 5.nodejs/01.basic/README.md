# NodeJS

## 목표

- 웹서버를 만들수있는 사람
- 데이터베이스를 이해할수있는 사람
- 네트워크를 어느정도 이해되는 사람
  한달동안 배울거야

## NodeJS 정의

> 내 컴퓨터에 있는 자원을 사용하기위해서, 메모리,하드? (우리 내부적 )

- 이벤트 기반
- 논블로킹 I/O

## 내 컴퓨터 자원을 사용하기 위해 ( = 파일조작이 가능한가)

`import` 처리 과정
어떻게 가져오는지 -> 통신으로 가져와
왜 통신?? 내컴퓨터에서 로컬로 작업하는데, 굳이 통신인거는 브라우저 런타임은 `파일을 읽고쓰는 능력이없어`, 파일 입출력 못해 (당연히안돼)
근데 nodejs는 파일입출력이있어

## NoddJS 파일입출력이 가능 ( -> 서버도 만들수있다)

- 네트워크 관련된건 파일입출력이된다.
- 내컴퓨터를 조작할수있게 도와주는 런타임이고 그걸쓰는 언어가 자바스크립트이고 9:40

## Process

## 런타임

전역객체가 달라!! `winodw` , `global`

브라우저는 전역객체가 window, this하면 전역객체가 나와!
nodejs는 전역객체가 global
-> localtion.herf 이건 노드js에서 안먹혀!!!!

## NodeJS 내장 기능

- this (global)
- Module 모듈
- process
- os
- path
- url , querystring
- fs

## 실습 Hello world!

`repl`
R : Read (읽고)
E : Evaluate (평가하고)
P : Print (출력하고)
L : Loop (반복하고)

node라고 터미널에 입력하면 코드를 쓸수있다

개발자 도구같아
consloe.log void함수라서 undefined가 나와 리턴값이없으니까

node 나갈때는 컨트롤c를 두번눌러

## 파일로 실행하기

001.js 파일 만들고 넘어감

```js
const blockX = 10;
blockX;
```

```sh
node
# 리눅스에 노드js를 설치하면 node라는 명령어가 설치되었고 실행되는거야 옵션들이잇어

ls
cd nodesjs
ls
node 001.js
node 001
# 확장자명 생략가능
```

node 001 파일을
이미 읽고 평가하고 실행되고 끝난거래
001에 콘솔찍으면 10이나오는데
안찍어도 노드가 실행되고있는거야, 내부적으로

노드에서도 console, settimout, setinterval js스펙에관한건 그대로있어

텍스트파일(001)을 실행해주는게
node 001

## 모듈

작업할때 한파일을 열어서 작업하지 않으니까 모듈이 필요해,

001.js
002.js
003.js
이 있을때 전체 실행해달라고할때

```sh
node 001.js
node 002.js
node 003.js
```

node는 하나의 프로그램이야
그안에 프로세스 3개를 만든거야
콘솔찍어서 실행해서 사라진거고, 프로그램이 종료된거야
프로세스간의 공유가안돼

하나의 프로세스안에서 2번도 3번도 실행해서 결과물을 가져와야하는게 모듈을 배우는이유!!

내가 실행한 파일만 실행된다! ---중요!

- 모듈을 사용해야하는 이유

JS모듈
JS ES6 2015
NodeJS 2012~2013 -> commonjs 모듈 시스템이 있어
달라아아아아
모듈시스템이 2개야!

노드js 공식문서가 잘되어있다고하심
https://nodejs.org/dist/latest-v18.x/docs/api/modules.html
commonjs

**002.js**

```js
const a = 10;
export default a;
```

**001.js**

```js
// import a from "./002.js";
const a = require("./002.js");
const blockX = 10;

console.log(blockX + a);
```

001.js만 실행하면 프로세스 하나실행, 그전에 import로 002를 평가를하고 a를 내보내서 가져올수있어 10:39
내부적으로 파일을 읽고쓴거야 ES6문법으로 적은거고

NodeJS commonjs는
**002.js**

```js
const a = 10;
module.exports = a;
```

**001.js**

```js
const a = require("./002.js");
const blockX = 10;

console.log(blockX + a);
```

module.exports = 10+5;
라고 입력해도 15라고 나올거야
평가를하니까!!!

### commonjs keyword

- module.exports
- require(파일이름)

꺼림직한건 저건 global 내장객체로 module, require이있어

## `global`이라는 객체

```js
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 50.35470000002533,
      nodeStart: 1.6211000001057982,
      v8Start: 3.775499999523163,
      bootstrapComplete: 27.741100000217557,
      environment: 10.384499999694526,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1692928259736.035
  },
  fetch: [AsyncFunction: fetch]
}
```

10:57 this 얘기...
글로벌이랑..this바인딩... 정확한스펙아님 교수님추측

```js
const a = 10;
console.log(a);
module.exports = {};
```

module.exports는 객체야

```js
module.exports; // {}
module.exports === exports; // true

// module.exports.a = 10;
exports.a = 10;

const a = require("./005.js");
console.log(a); // {a: 10}

const { a } = require("./005.js");
console.log(a); // 10
```

```js
// 005.js
const sum1 = (a, b) => {
  return a + b;
};

const sum10 = (a) => {
  return a + 10;
};

// 간단하게 적으면
const sum1 = (a, b) => a + b;
const sum10 = (a) => a + 10;

// 2개의 함수 내보내기?

module.exports = {
  sum1: sum1,
  sum10: sum10,
};

module.exports = { sum1, sum10 };

//결국 이렇게 적을수도있다!
exports.sum1 = (a, b) => a + b;
exports.sum10 = (a) => a + 10;

//006.js
const a = require("./005"); // {}

console.log(a); //{a:10, sum1:function, sum10:function}

const b = a.sum10(10);
console.log(b);
```

결국 js기초!!!!!!

이번에는 객체에 함수값을 넣는

```js
// 007.js
// module.exports = (a, b) => {
//   return a + b;
// };

module.exports = (a, b) => a + b;

//008.js
const a = require("./007");

const b = a(1, 2);
console.log(b); // 3
```

모듈은 디폴트로 {} 빈객체가 나온다.
009.js
010.js

```js
//009.js
const b = 10;

//010.js
const a = require("./009");
console.log(a);
// 실수로 009에 모듈을 안적으면 {} 빈객체가 나온다.
```

## 순환참조

11:40내용

**a.js**

```js
const b = require("./b.js");
console.log(b);
module.exports = { name: "guniee" };
```

**b.js**

```js
const a = require("./a.js");
console.log(a);
module.exports = { name: "guniee" };
```

원래라면 말이안되는 코드(무한루프)라서 에러가나야하는데
이걸 nodejs가 도와준다.
한번 실행한 결과물을 캐싱해두었다가(메모리에 저장해두었다가) 보여준다!
보여주긴하지만 피해야하는 방법중에하나!
어디서 이슈가 생길지모르니까, 이렇게 쓰지말라고 보여주신 내용

### process

process객체는 컴퓨터에 대한 정보가 담겨있다. (version)
pid

- 콜스택이 비어져있으면 프로세스가 끝나는거야
- 셋인터벌로 콜스택을 비우지않으면

```js
setInterval(() => {
  console.log("실행되나?", process.pid);
}, 1000);
```

1초마다 계속 찍혀

끄는 방법으로는

## 리눅스에서 작업관리자 보기

```sh
ps -ef

ps -ef | grep node

sudo kill -9 [pid입력]
# 프로세스 끄는것

node process.js &
# 다시 실행시키는 방법
```

ps process를 말함

## foreground

리눅스전용 용어

- 내가 보고있을때만 실행하겠다는것

## background

- 내가 안보고있을떄도 실행하라는것

돌고는 있지만 콘솔로그가없다면 눈에 안보이는데
컨틀롤c를 눌러도 안나가져
그럴때 강제로 kill을해야해

아파치도 돌고있지만 눈에 안보여
