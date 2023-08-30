## Callback

아반떼 3초
소나타 2초
제네시스 1초

6초가 궁극적인목표 -> 시간의 흐름상 동기

```js
const 아반떼 = () => {
  // 아반떼 함수를 호출하면,
  // 3초뒤에 아반떼 go 출력
  setTimeout(() => {
    console.log("아반떼 go");
    console.log("경기 끝");
  }, 3000);
};
const 소나타 = () => {
  setTimeout(() => {
    console.log("소나타 go");
    아반떼();
  }, 2000);
};
const 제네시스 = () => {
  setTimeout(() => {
    console.log("제네시스 go");
    소나타();
  }, 1000);
};

제네시스();
```

위 코드는 제네시스를 호출하면 무조건 소나타도 실행되는
근데 확장성이 낮아?

제네시스를 호출했을때 소나타를 가변적으로 사용할수있는지에 대해 생각한다면 확장성이 늘어나!!!!
함수를 값으로 받아서..가변적으로 사용!! -> 콜백

함수값을 던져서

```js
const 아반떼 = () => {
  setTimeout(() => {
    console.log("아반떼 go");
    console.log("경기 끝");
  }, 3000);
};
const 소나타 = () => {
  setTimeout(() => {
    console.log("소나타 go");
  }, 2000);
};
const 제네시스 = (callback) => {
  setTimeout(() => {
    console.log("제네시스 go");
    callback();
  }, 1000);
};

// 제네시스(() => {
//   console.log("hello world!");
// });

제네시스(소나타);
// 소나타라는 함수값을 넣은

제네시스(() => {
  소나타(아반떼);
});
// 이렇게 쓰는 이유는 소나타에 인자값을 줄수가있게됨!!!!!!!
// 그래서 소나타안에 아반떼 함수값을 넣을수있음!!!!!!
```

인자값을 넘겨주고 싶을때!
값만넘기고 인자값 컨트롤을 못하기때문에? 9:46

```js
const a = (num) => {
  console.log("hello world", num);
};

const b = () => {
  a(1);
};
b();
```

왜 굳이 b를 만들었는지를 생각해보기
-> 인자값을 넘겨주고싶거나, 함수를 결과로 값으로 넘겨주고싶을때 사용함!!!!

예를들면

```js
btn.addEventListner("click", b);
```

btn을 눌렀을때 b를 호출하는

```js
btn.addEventListner("click", () => {
  a(1);
});
```

그래서 결과!!!!!!

```js
const 아반떼 = (callback) => {
  setTimeout(() => {
    console.log("아반떼 go");
    callback();
  }, 3000);
};

const 소나타 = (callback) => {
  setTimeout(() => {
    console.log("소나타 go");
    callback();
  }, 2000);
};

const 제네시스 = (callback) => {
  setTimeout(() => {
    console.log("제네시스 go");
    callback();
  }, 1000);
};

제네시스(() => {
  소나타(() => {
    아반떼(() => {
      console.log("경기 끝");
    });
  });
});
// 9:50
// 콜백의 모양이 이렇게 생긴건
// 순서를 바꿔도 9:54 -> 이게 확장성!
```

자동차가 100대면 코드가 100개....

그래서 친화적으로 쓸수있게 나온게 프로미스객체

```js
const 아반떼 = (callback) => {
  console.log("아반떼 시작");
  setTimeout(() => {
    console.log("아반떼 도착");
    callback();
  }, 3000);
};

const 소나타 = (callback) => {
  console.log("소나타 시작");
  setTimeout(() => {
    console.log("소나타 도착");
    callback();
  }, 2000);
};

const 제네시스 = (callback) => {
  console.log("제네시스 시작");

  setTimeout(() => {
    console.log("제네시스 도착");
    callback();
  }, 1000);
};

아반떼(() => {
  소나타(() => {
    제네시스(() => {
      console.log("끝");
    });
  });
});
// 9:50
// 콜백의 모양이 이렇게 생긴건
// 순서를 바꿔도 9:54 -> 이게 확장성!
```

## 프로미스 객체

목적: 콜백지옥 형태의 코드를 극복하는것이 목표

프로미스에 대한 문법

```js
new Promise();
// 데이터타입이 객체야

const pr = new Promise((resolve, reject) => {
  // pr은 객체
  // 생성자함수의 딱하나 callback 함수값을받아
  // 인자값으로 resolve, reject -> 둘다 함수값을 넣어주게됨!
  // 리턴이 존재하지않아
  //
  //   resolve("아반떼");
  //   reject("아반떼")
});
console.log(pr);

// pending
// fulfilled
// rejected

/* 
{
    state : "pending | fulfilled | rejected "
    // 3가지중 꼭 하나가 들어가!!
    result: " undefined | 아반떼 | 아반떼"
    //   resolve("아반떼") ===== fulfilled
    //   reject("아반떼") ===== rejected
    // 초기에는 pending상태!
    // 그래서 리턴이 필요가없어 pr의 내용에따라 객체 모양을 바꿔주기 때문에
}
*/
```

\*\* 성공, 실패
내가 코드로서 데이터를 보냈을때 1-5는 성공 6-9는 실패라고 정해놓고!
그래서 교수님은 성공에 대한 부분 알려주신다고함 resolve 먼저!
실패는 통신까지 배우고나서해도 무방하다고하심!

```js
const pr = new Promise((resolve, reject) => {
  resolve("아반떼 go");
  //   reject("아반떼")
});
console.log(pr);

// fulfilled에 아반떼 go
// 아반떼go라는 텍스트만은 뽑아낼수없어 백그라운드에 있는거라

pr.then(() => {
  console.log(result);
});
```

```js
const pr = new Promise((resolve, reject) => {
  resolve("아반떼 go");
});
console.dir(pr);

// method들이 있어! 프로토타입에 담겨있는것

/*

{
    // method
    catch ----> reject일때 실행되는 함수가 호출
    finally
    then ----> fulfilled일때만 실행되는 함수가 호출
*/
```

```js
const pr = new Promise((resolve, reject) => {
  resolve("아반떼 go");
});
pr.then((result) => {
  // 매개변수로 아무거나 주어도되고
  console.log(result);
});
```

```js
const pr = {
  then: (callback) => {
    callback("1111");
  },
};
pr.then((a) => {
  console.log(a);
});
// 1111
```

```js
const pr = new Promise((resolve, reject) => {
  reject("아반떼 go");
});
pr.then((result) => {
  console.log(result);
});

// reject에 then은 호출이 안됌
```

```js
const pr = new Promise((resolve, reject) => {
  reject("아반떼 go");
});
pr.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

// catch를 적어야 호출이됨!!
```

```js
const 아반떼 = new Promise((resolve, reject) => {});
console.log(아반떼);
// Promise { state : pending, result : undefined}
```

3초뒤에 호출시키고 아반떼 go를 출력

```js
const 아반떼 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("아반떼 go");
  }, 3000);
});

아반떼.then((result) => {
  console.log(result);
});

// 3초가 지났을때 풀필드가 되어 리졸트가 아반떼 go 가 되는거야
// 셋타임아웃으로 값만 바꿔준거야
// then으로 풀필드가 되었을떄 호출시켜달라는 것 11:26
```

프로미스가 함수로 콜스택에 들어가고
익명함수가 실행된다는것으로 내부 함수가 실행되 (리졸브, 리젝트)

내가 원할떄 3초에 걸려서사용하고 싶을떄

```js
const 아반떼 = ()=>{
   return const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("아반떼 go");
  }, 3000);
});
}
아반떼.then((result) => {
  console.log(result);
});
```

```js

const 아반떼 = ()=>
   return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("아반떼 go");
  }, 3000);
});

아반떼.then((result) => {
  console.log(result);
});


console.log(아반떼) // 함수값
아반떼().then((result)=>{
    console.log(result)
})
```

```js
const arrow = (num) => {};
const arrow = (num) => {};
const arrow = num=> {retrun num}
const arrow = num => num


const arr=[1,2,3]
arr.forEach((v)=>{
    console.log(v)
})
arr.forEach(v=>{console.log(v)})
arr.forEach(v=>console.log(v))
arr.forEach(console.log)
```

```js
const 아반떼 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("아반떼 go");
    }, 3000);
  });

아반떼().then((result) => {
  console.log(result);
});
```

### 프로미스 체이닝

promise then에 의해서
3초끝나고 2초하고 2초끝나면 1초하는???? 11:41
프로미스 객체 여러개가 필요해

```js
const 아반떼 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("아반떼 go");
    }, 3000);
  });

const 소나타 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("소나타 go");
    }, 2000);
  });

const 제네시스 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("제네시스 go");
    }, 1000);
  });

// let a;
아반떼()
  .then((result) => {
    console.log(result);
    // a = result;
    return 소나타();
  })
  .then((result) => {
    console.log(result);
    return 제네시스();
  })
  .then((result) => {
    console.log(result);
    console.log("끝");
  });
// console.log(a);
```

// 콜백과 비슷하지만 매개변수 callback이 없는것다는거 말고는 똑같
// 프로미스에서는 매개변수 필요없어 -> 장점!
// 백그라운드를 조작할수있어서

```js
const 아반떼 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("아반떼 go");
    }, 3000);
  });

const 소나타 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("소나타 go");
    }, 2000);
  });

const 제네시스 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("제네시스 go");
    }, 1000);
  });

let a;
아반떼()
  .then((result) => {
    console.log(result);
    a = result;
    return 소나타();
  })
  .then((result) => {
    console.log(result);
    return 제네시스();
  })
  .then((result) => {
    console.log(result);
    console.log("끝");
  });
console.log(a);

// undefined가 떠

// 아반떼().then... 이거는 백그라운드야!!!!
// 중간에 let넣어도 소용없음 바로 콘솔로그가 스택에 가버려
```

```js
const Car = (name, time) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${name} go`);
    }, 1000);
  });
};

Car("아반떼", 1000).then();
```

더간단하게

```js
const Car = async (name, time) => {
  return "hi";
};
console.log(Car());
```

async는 프로미스객체를

```js
const Car = async (name, time) => {
  try {
    throw new Error("1");
  } catch (e) {
    return Promise.reject(e.message);
  }
};
console.log(Car());
```

```js
const 아반떼 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("아반떼 go");
    }, 3000);
  });

const 소나타 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("소나타 go");
    }, 2000);
  });

const 제네시스 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("제네시스 go");
    }, 1000);
  });
const Car = async (name, time) => {
  try {
    const a = await 아반떼();
    console.log(a);
    const b = await 소나타();
    console.log(b);
    const c = await 제네시스();
    console.log(c);
  } catch (e) {
    return Promise.reject(e.message);
  }
};
console.log(Car());
```

## Async/Await

콜백 -> 프로미스 -> 어싱크어웨이

- 프로미스는 1이라는 결과값을 스코프가 다르면 넘길수없는 이슈 발생
- 어싱크어웨이는 같은 스코프에 있기때문에 넘겨서 사용할수있음

```js
const Fn = async () => {
  const a = await 아반떼();
  // x
};
Fn();
```

```js
const Fn = async () => {
  //   const a = await 아반떼();
  // x

  result = "hello world";
  return result;
};
const result = Fn();
console.log(result);

// 많이하는 실수 코드
```

```js
const Fn = async () => {
  result = "hello world";
  return result;
};
Fn().then((data) => console.log(data));

// 많이하는 실수 코드
```

```js
// 아반떼, 소나타, 제네시스

아반떼().then(console.log);
소나타().then(console.log);
제네시스().then(console.log);
// 동시에 3개에 넣었기때문에 총 3초에 걸려 나올거야

Promies.all();
// 동시에 던져서 리졸브가 떨어지면 3개가 나와?????
// 인자값이 [프로미스객체]
// all(Promise[])
Promies.all([아반떼(), 소나타(), 제네시스()]);
pr.then((data) => console.log(data));
```

```js
const 아반떼 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("아반떼 go");
    }, 3000);
  });

const 소나타 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("소나타 go");
    }, 2000);
  });

const 제네시스 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("제네시스 go");
    }, 1000);
  });

아반떼().then(console.log);
소나타().then(console.log);
제네시스().then(console.log);

const pr = Promise.all([아반떼(), 소나타(), 제네시스()]);
pr.then((data) => console.log(data));
```

```js
const 아반떼 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("아반떼 go");
    }, 3000);
  });

const 소나타 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("소나타 go");
    }, 2000);
  });

const 제네시스 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("제네시스 go");
    }, 1000);
  });

아반떼().then(console.log);
소나타().then(console.log);
제네시스().then(console.log);

const pr = Promise.all([아반떼(), 소나타(), 제네시스()]);
pr.then((data) => {
  const 아반떼 = data[0];
  const 소나타 = data[1];
  const 제네시스 = data[2];
});

//아니면

const init = async () => {
  const pr = await Promise.all([아반떼(), 소나타(), 제네시스()]);
  console.log(pr);
};
init();
```

```js
const intial = async () => {
  const result = await 아반떼().then((data) => console.log(data));
};

// 말도안되는 코드 어웨이도 비동기 then도 비동기
// 쓸거면 하나면 쓰면돼
// 리졸트값을 갖고오려면 then만 쓰고
// 어웨이는....몰라..확인해!!!!!!!!!!!!!!!!

const intial = async () => {
  아반떼().then((data) => console.log(data));
};
```

```js
const init=()=>{
    await 아반떼()
}
//안돼!!!! await은 async안에서 쓰는거야!!!!!!!


const init= async()=>{
    console.log("1")
    await 아반떼()
    console.log("2")
}
init()
// 멈춰있는것처럼 보여
// 1뜨고 멈춰있다가 2가 떠!
```

지금은 쓸일이 없는 이유

- 여러분이 작업하는 코드중에 비동기를 조작해야할 코드가 하나도 없음 (setTimeout, setInterval 말곤없어)
- 네트워크 (통신을 배우면 사용해 => 데이터가 언제 도착할지 모르지만, 도착하면 실행하라고 설정할때)

콜백으로 함수사용할때
then이 매개변수를 주입했다.
addEventListner 에도 콜백에 e

```js
const callback = (event) => {
  console.log(event);
  // event 를 주입했다고함!
};
document.addEventListner("load", callback);

const arr = [1, 2, 3];
arr.forEach((item) => {});
arr.forEach((v) => {});
// 매개변수로 뭘적어도 상관없는겨
```

```js
const arr = [1, 2, 3];
// 배열의 요소를 삭제하고 싶을때
// 배열의 모든 내용을 변경하고싶을때

// filter  ---> true false에 true일때 꺼내오는????
// map

const newArr = arr.filter((value) => {
  if (value % 2 === 0) return true;
});

const arr2 = arr.filter((value) => value % 2 === 0);

const arr3 = arr.map((value) => {
  return value * 2;
});
```
