# 내장모듈 Buffer

- NodeJS
  - global
    - 내장객체
      - console.log
      - process
      - \_\_dirname
      - \_\_filenamd
      - Buffer
  - 내장모듈
    - fs
    - path

a.js 를 실행했을떄 런타임이 돌떄 global이 들어가? 9:32

## 바이너리 (2진법?)

컴퓨터가 0,1 로만 구성되어있기 때문에

`bit` : 0,1
`byte` : 0000 0000 1비트가 8개를 1바이트
가짓수 표현(데이터표현?? 몇개를 저장할수있는지?)

1 bit 데이터는 2가지 저장할수있다. 0하고 1
1 byte 256가지 저장 (2^8)

1 byte = 8 bit

`12` 이라는 숫자를 컴퓨터가 어떻게 저장할까? -> `1100`

0001 = 1
0010 = 2
0011 = 3
0100 = 4
0101 = 5
0110 = 6
0111 = 7
1000 = 8
1001 = 9
1010 = 10
1011 = 11
1100 = 12

캐릭터셋 문자집합
https://nuli.navercorp.com/community/article/1079940

a -> 97 `01100001`
A -> 65 `01000001`
O -> 79 `01001111`

```js
"A".charCodeAt(0); // 65
"a".charCodeAt(0); // 97
```

# 진수

컴퓨터공학에서 사용하는 2진수와 16진수 그리고 인간이 쓰는 10진수가 어떤식으로 프로그래밍의 이용되는지 알아보기

10진수는 인간의 손가락이 10개라서...

비트를 4개로 늘려서
0000 0000 8개중 4개를 하나로 묶어서 니블 Nibble

4bit 0000~1111 16가지수 0~15의 데이터를 표현한다. 2^4 = 16
0,1, ...,9 까지는 아라비아
10부터는 알파벳을 넣었어 10(a) 11(b) 12(c) 13(d) 14(e) 15(f)
이렇게 16진수!
바이트를 읽기쉽게하기위해서 만들어짐

`01100001`
a -> 97(10진수) => 01100001 (2진수) => 61 (16진수)

0110 0001
6 1 => 16진수로 표현

그래서~~~

buffer 데이터를 16진수로 담는것
왜 buffer를 사용하는지
이미지 컴퓨터가 저장함
바이너리 16진수로 적어서
base64
16진수로 데이터 가짓수를 줄일수가 있어

2진수는 8자리
16진수는 2자리니까

## Buffer

버퍼는 일정크기로 모아두는 데이터
`버퍼링`

```js
const buffer = Buffer.from("");
```

10:38 ???????
4bit = 16진수

버퍼의 사이즈는 바이트를 의미한다.
buffer.length = byte

```js
const buffer = Buffer.from("문자열");
console.log(buffer.length);
//  <Buffer eb ac b8 ec 9e 90 ec 97 b4>
//  9
```

002.js 다시 확인해보기

```js
concat;
alloc;
```

이건 001.js

```js
const alloc = Buffer.alloc(5);
console.log(alloc);
// 5 byte 로 00 00 00 00 00
```

이미지 1Gb 일때 5Mb를 보내??

데이터긴 md파일 test.md준비
buffer쪼개기

003.js
스트림은 데이터를 받는 흐름???
버퍼 - 버퍼링 잘라져있는걸 읽는거???
스트림 - 스트리밍 실시간으로???

```js
readStream.on();
// addeventlister와 같아

readStream.on("data", (buffer) => {
  console.log(buffer);
});
```

콜백에 넣은 인자 buffer대신에 chunk라고 넣기도함

```JS
const data = [];
readStream.on("data", (buffer) => {
  data.push(buffer);
  console.log(buffer);
});

readStream.on("end", () => {
  console.log(data);
  console.log("다 읽었습니다!");
});
```

004.js

```js
// fs.writeFile
// fs.createWriteSteam

const fs = require("fs");
const writeStream = fs.createWriteStream("./README2.md");

writeStream.on("finish", () => {
  console.log(end);
});

writeStream.write("#파일만들기");
writeStream.write("## 중분류");
writeStream.write("### 만들어보기");
writeStream.write("<br />");
writeStream.write("Hello world~?");
writeStream.end();
```

end()가 실행됐을때 finish라는 이벤트가... 11:09
addEventListner 구조와 같아

질문이들어와서 다시 003.js 설명시간
11:26부터

on 이라는 메서드가 백그라운드에 들어가는거야
on이 buffer라는 인자를 읽어서 실행해준거야 16바이트씩 잘라서

005 006 을 같이!!!
005에 함수를 만들어서
006에서 실행

```js
class Fs {
  readFile(path, callback) {
    // console.log("hello world!");
    const readStream = fs.createReadStream(path, { highWaterMark: 8 });
    const data = [];
    readStream.on("data", (buffer) => {
      data.push(buffer);
      console.log("buffer 읽는중...");
    });

    readStream.on("end", () => {
      callback(null, Buffer.concat(data));
    });
    readStream.on("error", (error) => {
      callback(error, null);
    });
  }
}

module.exports = new Fs();
```

이걸 주입해줬다고한다.
readFile에서 err와 dat를 주입했다 11:48
on이벤트에 data end error는 이미 구현되어있는거 가변값이아냐 11:51

https://github.com/ingoo-blockchain/lecture/tree/main/Nodejs/fileSystem/source

..

04.event
js 기본..

```js
myEvent.addListener("event1", () => {
  console.log("event1");
});
```

```js
class Event {
  observers = [];

  constructor() {}

  on(eventName, callback) {
    const obj = { [eventName]: callback };
    console.log(obj);
    //  { click: [Function (anonymous)] }
  }
}

const ev = new Event();
// console.log(ev);
ev.on("click", () => {});
```

```js
let observer;
for (let i = 0; i < this.observers.length; i++) {
  if (this.observers[i].key === eventName) {
    observer = this.observers[i];
  }
}

// const observer = this.observers.find((v) => {
//   return v.key === eventName;
// });
```

```js
class Event {
  observers = [];

  constructor() {}

  on(eventName, callback) {
    const obj = {
      //  [eventName]: callback
      key: eventName,
      value: callback,
    };
    this.observers.push(obj);
  }

  emit(eventName) {
    // let observer;
    //
    // for (let i = 0; i < this.observers.length; i++) {
    //   if (this.observers[i].key === eventName) {
    //     observer = this.observers[i];
    //   }
    // }

    const observer = this.observers.find((v) => v.key === eventName);
    // console.log(observer); // {}
    // console.log(observer.value);
    observer.value();
  }
}

const ev = new Event();

ev.on("click", () => {
  console.log("hello world");
});

ev.emit("click");

// console.log(ev.observers);
```
