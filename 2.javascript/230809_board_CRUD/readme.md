# Board

- CRUD (부가적)
- 브라우저 역할 (최종목적)
- 로컬스토리지를 활용

- TODO List는 CRUD를 한 화면에서 다 처리를한다.

빡센내용!!!!!

`모듈`
`Class`
`로컬스토리지`
`아주 짤막한 네트워크`
-> 브라우저가 처리해주는것!

## 짤막한 네트워크

(주소창, 화면)

- url는 요청과 응답(데이터 통신)
  편지를 보내는사람 (리퀘스트)-요청
  편지를 받는사람 (응답)
  -> html을 라이브서버로 열었던것도 내가 편지를 보낸것과 같아
- 파일을 보내는게 아니라 텍스트 전체를 보내 -> 브라우저가 그걸 읽는것
  텍스트를 객체화하고 그걸 렌더링...9:35
- 프로세스끼리는 공유가안돼 -> 카톡에보낸게 텔레그램에 뜨지않으니까
- 브라우저의 주소창은 중요해, 편지를 대신써주는거니까
- html img도 결국 주소입력해 (css, js도 요청과 응답)

### 브라우저의 역할

1. 요청을 쉽게해주는 도구
2. 요청을 한다음 응답한것 쉽게볼수있다
3. 브라우저는 우체부아저씨인데 편지배달해서 읽기쉽게끔 해준다!

## 로컬스토리지

데이터가 어디에 저장되는지 -> 브라우저에 저장
메모장에 텍스트 저장하는것과 같아 ----> 파일형태로 저장되어있어
f12에서 애플리케이션을 누르면 저장용량 - 로컬스토리지 속 키(파일)와 값(텍스트)으로 나타나 -> 그래서 오로지 string으로 저장! (배열,객체이런거없어!)
내컴퓨터에만 저장되는거야(텍스트로만)

## Class

- 객체지향 사고를 해서 만들수있는 사람이 쓰는

## 모듈

- js의역사까지 가야하지만,
- 교수님의 공부하는 방법들을 공유해주신다고하심
- 학습방법 중요해(효율적으로)

- Javascript Module 는 처음부터 없었어
- ES6부터 사용(2015)

\*\*

html은 다운을받고 코드를 읽어내려가
그러다 script를 만나면 js를 다운받고 - 실행해
그러고 html 렌더링되는

script를 head안에 넣으면 (위에올려둔다면)
html 다운받고 코드읽으면서 js다운을받고 -실행해 평가하고
그리고 다시 html 을읽어서 div를 찾을때 null이떠
-> `DOMContentLoaded` 라는 이벤트를 사용하면
렌더하던중에 스크립트를 다운받고 실행하는데 이벤트를 등록시켜놓고
백그라운드에 들어가있다가 이벤트가 발동됐을때(브라우저 로드가 끝났을때) 콜백함수가 실행돼
-> 그래서 index2.js파일이 있어도 로드가 끝나야 실행해서 늦게 콘솔창에떠
-> 이벤트가 백그라운드에 들어가있으니까!

온라인 강의는 거의 클론코딩 (개념없이 따라쓰기식 -> 머릿속에 남지않아)

### 모던 스크립트 (모듈 검색)

학습방법

- 일단 한번 훑어보고
- 모르는 키워드를 찾아보는걸로

- 모듈은 스코프가 분리되는 11:02

- 모듈을 가져올때 : index2 ---> import
- 모듈을 만들때 : index ---> export

  - n개를 만들수있다
  - 하나면 할때는 export default (딱 하나 지정하는데 내보낼것으로 객체로해도 가능해)
    - 이래서 export 문법이나온거야 (구조분해할당으로 그래서 hello만 꺼내 사용한것!!!!!)

- 지연실행

  - defer라는 속성 : html읽고 js를 다운받고 실행을 멈춰, html렌더를 진행하고 끝나면 js를 실행해
  - DOMContentLoaded와 같아!!!!!!!!

- `<script defer type="text/javascript" src="./public/js/index3.js">` 모듈과 같아

#####

```html
<head>
  <script type="module" src="./public/js/index.js"></script>
  <script type="text/javascript">
    const div = document.querySelector("div");
    console.log(div); // null , 모듈보다 먼저찍혀 바로실행되니까
  </script>
  <script type="module" src="./public/js/index2.js"></script>
  <script defer type="text/javascript" src="./public/js/index3.js">
    const div = document.querySelector("div");
    console.log(div); // null , 아래도 내려둬도 모듈보다 먼저찍혀
  </script>
</head>
<body>
  <div></div>
</body>
```

2023-08-10

## CRUD

- storage.js가 가장 중요해 (설명)

  - 스토리지 객체를 만들어줄 class를 만든거 설명
    - name 속성은 storage key값
    - stroage속성은 value값을 넣어주려고
    - 어떻게 사용할거야라는게 필요한게 class라서 헷갈릴수있지만 숙달이되어야하는 사항!
    - 3가지의 메서드를 만들었음
      - 속성의 데이터를 바꾸거나 9:26
      - get은 스토리지 내용을 보기 편하게 만들어준것
      - set은 스토리지 특정내용을 바꾸거나 변경할때 사용
      - clear는 스토리지 내용 바꿀때 사용
      - 특히 get을 호출할때 null 이면 true로 바뀌게끔
        -> 로컬스토리지에 값이 없을 경우에 [] 빈배열 반환하게하려고 9:27
      - 상수로 쓴 이유는 글을 읽듯이 코드를 가독성있게 하기위해서 [] 라고 쓸수있지만 코드화해주는거야 (다른사람이 읽었을때 ... 포커싱..)
      - json.parse는 꺼내서 쓰려고 (데이터 변환작업이 필요해서 9:31) -> 반복적인행동을 한번만하는거지 메서드를 사용하면
      - serialize(item){
        return JSON.parse(item)
        } 으로 JSON을 감싸줄수있어
      - 매서드 인자값에 3개이상 넣지 않는걸로하기!!!!!!
    - 9:34 객체는 하나? {} 안에 순서 상관없고
    - 메서드의 매개변수는 순서 중요해
    - 같은 성격끼리 묶어 객체로 만들어주는게 가독성에 좋아
  - 상수로 만들어서 가독성 9:37
  - a.set()을 호출하면 set()안의 코드를 하나씩읽고 실행해
    - a로부터의 this get이있는지를 찾고 get()을 하나씩 읽고 실행
    - 스토리지에 있는 [] 그걸 ...스프레드 연산자로 풀어서 깊은복사로 데이터를 새로 만들어 그게 item에 넣어주고 스트링작업을 하는거야 serialize를 스토리지의 키값으로 바꿔끼는거야 9:46

- boardRow.js

  - 생성자 함수에 row는 9:54 매개변수 1
  - 객체를 만들기위해서 객체를 생성하고 그객체를 만들기위해 객체를 생성하고 객체를 반환받고...그게 객체지향...
    - write.js에서 dataRow 가 그런것!

- write.js

  - id에는 고유한 키값을 줘야해 게시글마다
  - 총 4개가 있다면, 각각의 이름을 정해줘야하는데 그걸 1,2,3,4 넘버링으로 부여해줘야해 (배열 인덱스보다는 )
    - 키값은 키값그대로 고유하게
    - 3의 게시글을 삭제하더라도 그냥 id=3이 없어지는거고
    - 게시판목록에 넘버리ㅇ은 연산으로 -1씩하는걸로
  - 전략세우기

    - [] 배열안에 {id 1}, {id 2} ...
    - 1번게시글에 id=1, 2번게시글에 id=2...이런식으로
    - 마지막 아이템 id +1 - 마지막 아이템이 삭제되었을때 다시 그번호가 남는 이슈는 발생
    - 로컬스토리지에 마지막에있는 내용을 가져온다면!!?

    ```js
    // const a =[1,6,3,5,7,9,3,4,12]

    // 이배열중에 맨마지막에 있는 요소를 꺼내는 방법

    // const b = [...a].pop()

    // const serch.....10:08
    // const c= a[a.length-1]
    ```

10:27

- storage.js

```js
  // 마지막 아이템 가져오기
  getLatestItem() {
    const latestRow = this.get().pop();
    // []비어있다면 null값이 나올거야
    return latestRow;
  }

  incrementId() {
    // 2가지케이스가 있는데 10:25 1,초기값설정하기
    const row = this.getLatestItem();
    if (!row) return 1;
    return row.id + 1;
  }

```

- 1 대신 상수사용
- write에 마지막 아이템 +1

10:46

- view페이지부터 id값을 받아서 처리를한다

11:29

```js
const arr = [1, 2, 3];

const rst = []; // acc=[]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    rst.push(arr[i]);
  }
}
// 스코프가 이모양 11:45
// reduce
const aa = arr.reduce((acc, value) => {
  if (value % 2 === 0) acc.push(value);
  return acc;
}, []);
```

11:45

- reduce => type이 배열일 필요가없어!
  - 배열에서 객체로 변환할때 많이사용 (type을 변경할때),
  - 인자값 두번째자리에 어떤것을 넣어도 상관없어

11:54

- [] 대괄호 표기법

```js
const result = queryString.reduce((acc, param) => {
  console.log(param);
  const [key, value] = param.split("=");
  acc[key] = value;
  return acc;
}, {});

let acc = {};
for (let i = 0; i < queryString.length; i++) {
  const [key, value] = queryString[i].split("=");
  acc[key] = value;
}
console.log(acc);
console.log(result);
```

- reduce, for 둘이 같은거야

12:09

```js
getById(id) {
    // 1
    const storage = this.get();
    let result;

    for (let i = 0; i < storage.length; i++) {
      if (storage[i].id === id) {
        result = storage[i];
      }
    }

    //2
    return this.get().find((row)=>row.id === parseInt(id))
  }

```

1과 2는 같아

점심먹고나서

- 코드는 많이 치지않았지만 어려울거야
- write, view js파일 중요해!!!

230811

- list.js

```js
import Storage from "../lib/storage.js"; // 데이터타입 : class

const storage = new Storage();
const list = storage.get(); // 스트링들이 객체형태로 list에 []로 나올거야

// [{id:'', title:""}]

// [`<tr><td></td><td></td></tr>`] map함수사용으로 바꿔

const components = list
  .map((row) => {
    // map retun 타입은 배열?9:59
    return `
    <tr>
        <td>${row.id}</td>
        <td>${row.title}</td>
        <td>${row.writer}</td>
        <td>${row.created_at}</td>
        <td>${row.hit}</td>
    </tr>
    `;
  })
  .join("");

const tbody = document.querySelector("tbody");
tbody.innerHTML = components;

// ['1','2','3']  =>123
// const a = ['1','2','3'].join('|') => '1|2|3'
// const a = ['1','2','3'].join('') => '123'
// ['<span>1</span>', '<span>2</span>']
// => <span>1</span><span>2</span>

//`
// <tr>
//     <td></td>
//     <td>강제로 만들기</td>
//     <td>강제로 만들기</td>
//     <td>강제로 만들기</td>
//     <td>강제로 만들기</td>
// </tr>
// `;
```

가장 귀찮은게 list페이지

- 검색
- 페이지 네이션
- 정렬

crud에서 수정페이지는 직접해봐야해

- view랑 write를 합치면 수정

삭제까지교수님과같이 (delete)

- view페이지에서 삭제하기를 눌렀을때 해당 id가 콘솔에 찍히기하기
  - 10:32

```js
const btn = document.querySelector("#deleteBtn");
btn.addEventListener("click", () => {
  console.log(id);
});

// [1,2,3]  2 삭제 -> [1,3]
// [1,2,3]  3 삭제 -> [1,2]
```

- 삭제 전략 : 로컬스토리 클래스안에서 삭제하는 매서드를 구현
  storage.js

```js
delete(id) {
  // 로컬스토리지 [] 배열을 모두 탐색해서 로컬스토리지 모든 id랑 내가 매개변수로 받은 id같은것이 있는지 확인
  // 있다면 로컬스토리지 변경

  // [1,2,3] -> 1 [2,3]  -> filter사용
  const storage = this.get().filter((row) => row.id !== id);
  console.log(storage);
}

//밑에 view에서 보면 결국 id : string인거고
//row.id 는 스트링인가??? 10:50
// type이 혼동 10:53
//  잘짜도 발생할수있는 이슈라는것


getById(id) {
  return this.get().find((row) => row.id === parseInt(id));
}
// 그래서이걸 이렇게 넣으신거래
// parseInt를 넣어주!!!!

```

- 비교연산자
  === == 타입까지

view.js

```js
const { id } = getParams();
const row = storage.getById(id);

// 스트링 잘라서 가져온 결과물
// id는 결국 스트링
```

```js

[{id: 1, title: "테스트1", content: "내용내용", writer: "김보람", created_at: "2023-08-09", hit: 0},…],
0
:
{id: 1, title: "테스트1", content: "내용내용", writer: "김보람", created_at: "2023-08-09", hit: 0},
1
:
{id: 2, title: "테스트2", content: "아이디로 2가 나온지 확인", writer: "ㅇㅇ", created_at: "2023-08-09", hit: 0},
2
:
{id: 3, title: "테스트333", content: "3333333", writer: "ㅇㅇ", created_at: "2023-08-09", hit: 0},

```

그래서!!!!!!!!

```js

delete(id) {
  // 1.로컬스토리지 [] 배열을 모두 탐색해서 로컬스토리지 모든 id랑 내가 매개변수로 받은 id같은것이 있는지 확인
  // 2. 있다면 로컬스토리지 변경


  //1.
  // [1,2,3] -> 1 [2,3]  -> filter사용
  const storage = this.get();
  console.log(storage);
  const newStorage = storage.filter((row) => row.id !== parseInt(id));
  console.log(newStorage);

  //2.
  const serialize = JSON.stringify(newStorage);
  localStorage.setItem(this.name, serialize);
  let a= 10
  a=9
  // 뺀거지만 10에서 9로 변경된거야!!!!
  // 다시 변경된걸로 저장해야해
}
```

그리고 뷰에서 삭제하면 리스트로돌아가게하면 삭제끝!
