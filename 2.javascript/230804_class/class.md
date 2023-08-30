# Class

## 분류 (Classification) - 철학

예시1) 새

- 비둘기
- 참새

예시2) 의자

- 공통된 속성이 존재했다

다리가 있다.
앉을수 있다.
등받이가 있다.
-> 추상적

```js
class 의자 {
    다리가 있다.
    앉을수 있다.
    등받이가 있다.
    //추상
}

const chair = new 의자();
//인스턴스화, 실체화한다
```

- 아이유는 실체, 연예인은 추상
  -> 개발자는 추상과 실체에 고민해야해

- class는 추상을 만들고 실체를 만드는것!
- 객체지향은 속성을 뽑을수있는 생각하는 사고가 중요해!

```js
class 게시판 {
  번호;
  주제;
  내용;
  작성자;
  등록일;
  조회수;
}

const 게시글 = new 게시판("1", "주제", "내용", "작성자", "등록일", "조회수");
```

new라는 인스턴스가 생성됐을때!
-> 인스턴스화

```js
const job = {
  job: "senior developer",
  career: "10",
  ageGroup: {
    group: 30,
    person: {
      name: "ingoo",
      id: "web7722",
    },
  },
};
// 직업이라는 사람의 정보

// 클래스는 코드만 저장되는것

function Job(_job) {
  // this = {}
  this.job;
  console.log(_job);
  // return this 9:58
}
const job = new job("senior");

//위와 아래가 같아

class Job {
  job;
  //쓸거라고 미리 지정해둔거야

  constructor(_job, _career) {
    // 생성자 : 실체화할때사용할 함수, 9:56 딱한번실행되는 함수
    // this = {}
    console.log(_job);
    // return this
  }
}

const job = new Job("senior");
const job2 = new Job();
// 새로운 객체를 만든거야 job, job2는 달라 false
```

클래스는 속성만 미리 지정해놓고 인스턴스를.. 9:49
데이터를 뽑기위해서는 참조타입을 다 끊어주어야하는데 어렵고 데이터가 많으면 불편
근데, class로 인스턴스로 편하게?
