# 내장모듈

`내장객체`는 기본적으로 우리가 꼭 사용해야만하는 변수들
` 내장모듈``require ` `module.export`

왜 굳이? 가져오는이유
(다 떄려박지않고)
다 사용하지않는것까지 X
필요한것만 가져와서 사용하기위해서

`fs` 이게 중요
`path` 쓰는것만 사용한다고함
`buffer` 이건 블록체인때 사용, 개념이 중요하고
`os` 굳이x

공식문서에서 보면서 공부하기!

file system `fs`
비동기처리를위해 promise사용

수업을하고나면 배운내용을 프로미스객체로 바꿔보는게 좋아

오늘 하는 코드는 나중에 http 서버 구현할때 사용될 코드가있다!!!
`http` 이라는 내장모듈이있는데
교수님은 구현을 직접하실거라고함 `tcp`로!

## 1. 파일읽기

001.js
fs 안에 {} 메서드들이 적혀있어
공식문서보면서 확인해볼수있어
소유권도있고, rm 리눅스에서 사용했던 단어들도 보임

### readFile 사용해보기

nodeJS는 싱글스레드이기 때문에 파일관련 작업은 백그라운드에서 처리한다.
그래서 001 파일 콘솔이
-> hello world /끝! / fs속 나올거야

```js
const fs = require("fs");
// console.log(fs); //{}

// 1경로 2옵션 3callback  (옵션은 생략가능)
console.log("hello world");
fs.readFile("./README.md", (err, data) => {
  //   console.log("err:", err);
  if (err) throw err;
  console.log(data.toString());
});

console.log("끝!");
```

`"./README.md"`
절대경로를 사용하는 이유

002.js

```js
console.log(__dirname);
//  /mnt/c/Users/KGA_29/Desktop/blockchain10/nodejs
console.log(__filename);
//  /mnt/c/Users/KGA_29/Desktop/blockchain10/nodejs/002.js
```

001파일에서 002 주소복사
path를 사용하기

```js
const path = require("path");
console.log(path); // {} join이라는 메서드를 가장많이 사용
```

003.js

```js
const fs = require("fs");
const path = require("path");

const FILE_NAME = "README.md";
const file = path.join(__dirname, FILE_NAME);
console.log(file);

fs.readFile(file, (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```

002.js에서

```js
console.log(path.sep);
//   / 가 나온다
```

## 2. 파일만들기 (쓰기)

```js
const fs = require("fs");
fs.writeFile(filename, file에 들어갈내용, 성공여부에대한 콜백);
```

### readFile 사용하는 이유

- 변수를 저장하는 행위가 메모리에 저장
  - 브라우저의 경우 로컬스토리지 파일을 사용한거야

vi var 만들고 root라고 적어서 저장해두고
var라는 텍스트파일을 root라는 데이터 가져와보기
005.js

```js
const fs = require("fs");
const path = require("path");

const FILE_NAME = "var";
const filepath = path.join(__dirname, FILE_NAME);

fs.readFile(filepath, (err, data) => {
  if (err) throw err;
  const result = data.toString();
  console.log(result);
});
```

```
{
    host=127.0.0.1
    port=3306
    user=root
    password=root
}
```

var파일안에서 데이터로 `스트링 조작`하기!!!!!
{ host: '127.0.0.1', port: '3306', user: 'root', password: 'root' }

```js
fs.readFile(filepath, (err, data) => {
  if (err) throw err;
  const result = data
    .toString()
    .split("\n")
    .filter((v) => v)
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      //   console.log(v);
      console.log(v[0], v[1]);

      const [key, value] = v;
      acc[key] = value;
      return acc;
    }, {});
  console.log(result);

  console.log(result.host);
  console.log(result.port);
  console.log(result.user);

  //  [ 'host=127.0.0.1', 'port=3306', 'user=root', 'password=root' ]
  //  [['host'm '127.0.0.1], ['port', '3306'], ...]

  /*
  {
    host:'127.0.0.1,
    port:3306,
    user:'root',
    password:'root'
  }
  */
});
```

## 3. process

정말많이 사용하는 키값으로 `env`

왜 NodeJS를 사용하는가?
-> 내컴퓨터를 조작하기 위함

`OS` 에 `시스템 환경변수` 라는 변수가 존재한다.

- 윈도우 : 시스템 환경변수 , 사진첨부
- Linux & mac : export
  11:34 006과 export 내용이 같은데 env는 객체로 담아져있다

시스템 환경변수 설정하기

```sh

export TEST_PORT=3000

# export 확인하기
export | grep TEST_PORT
```

이내용이 006 을 찍었을때도 나타나

텍스트파일을 parse하고 11:40
노드는 쉽게 내용을 처리할수있구나 라고 인지해야해

\*\* 여기서 문제점! ( 프로젝트 마다 시스템 환경변수가 겹칠수있어)
내피씨에는 여러가지 프로젝트가 있을수도있어서
프로젝트마다 포트를 나눠주는 외부 모듈이있다 env

# 외장모듈

`dotenv`

apt-get install apche 한것처럼
apt pm 패키지 매니저처럼
노드에도 pm이 존재하
node package manager `NPM`

```sh
npm install [모듈명]
npm init
npm install -g npm@9.8.1

npm install dotenv
```

npm init를 하면 package.json 이 생성됨
dotenv 설치하고나면 node_modules 디렉토리 생성됨 그안에 dotenv 코드가 다 들어있다.
.env파일을 만들어서 TEST_ID=web7722 저장!
006.js파일에

```js
require("dotenv").config();
console.log(process.env.TEST_ID);
```

.env는 개발용으로 작성한다? 11:56
배포할때도 사용하기도한다.
매커니즘은 `시스템 환경변수`!

오늘 내용 2~3페이지 분량....

정리하기

1. readFile() 이걸 promise로 바꿔보기
2. 스트링 조작하기
   name=ingoo&id=web7722&page=10
   배열메서드만 써서 {}객체로 만들기
3. http
   GET /hello HTTP/1.1
   Content-type: applicatino/json

Hello world!
dfdffd
dfdfdf

method: GET
path : /hello
version : HTTP/1.1
Content-type: applicatino/json
body: 'Hello world!
dfdffd
dfdfdf'

gitignore안에
node_moudles랑 package.json이랑 .env 파일 넣어주기
