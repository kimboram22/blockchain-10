# this가 어려운 이유

function의 역할이 너무 많기 때문

```js
function foo(){}

const foo = function(){}


둘의 차이는 호이스팅이 일어나는지의 차이!!!
```

## 선언식과 표현식

```js
foo();
function foo() {
  console.log("hello");
}
이건되지만;

foo();
const foo = function () {};
이건안돼;
```

##함수를 사용하는 3가지 방법

- 일반 함수로 사용
- 생성자 함수로 사용
- 객체 메서드 할당

### 일반 함수로 사용

```js
function foo(a, b) {
  console.log(this);
  // window객체가 나올거야
  return [a, b];
}
const a = foo(1, 2);
console.log(a);
//[1,2]
```

### 생성자 함수로 사용하는 경우

```js
// 함수앞에 new 가 있다면 밑에가 생략되어있다고 보며됌
function foo() {
  // this={}
  console.log(this);
  // return this
}
const a = new foo();
// 생성자 함수 new로 객체를 생성
```

#### 생성자 함수로 사용하는 경우의 케이스

```js
function foo() {
  //   const a = {};
  this.id = "web7722";
  //   return a;
}
const a = new foo();
console.log(a);
// this 동적할당이 되어
// new로 생성자 함수
```

## 객체 메서드 할당

```js
function foo(a, b) {
  console.log(this);
  // {method:f}
}

const bar = {
  method: foo,
  //10:40분수업내용
};

bar.method(1, 2);
```

## this 바인딩

function 에서만 this 바인딩이 일어나

ES6이후로 해결

1. 함수선언식을 안쓰게 됩니다. -> 화살표함수로 ES6 문법에 생김
2. 생성자 함수를 안쓰게 됩니다. -> class 문법으로 사용
3. 객체 메서드 할당을 안쓰게 됩니다. -> 객체 메서드 ???

// 프로토타입의 언어...10:44

### this 바인딩이 무엇인지??

- bind
- call
- apply

```js
function foo(a, b) {
    // this={id='web7722}
  console.log(this);
  // window객체 나와
}
foo(1, 2);

const bar = foo.bind({id:'web7722'});
// bind는 리턴값이 있어
/*
function(){
    this={id:"web7722"}
    console.log(this)
}
*/
bar()

this가 변해 -> 안쓰는게 나아

화살표함수를 사용하게 되면!!
한번 선언된 this가 바뀌지 않는다는 것
(this 바인딩이 일어나지않는다라고)

고차함수.. 리턴값이 함수가 나오니까

```

### ES6 일반함수로 사용해보는 경험

```js
const foo = (a, b) => {
  console.log(this);
  return [a, b];
};
// foo();
//window객체 나오고

const c = new foo();
// 생성자 함수로는 안나와
// 목적에 맞게 함수 선언하고 싶으면 에로우함수를 사용해야함
```

ES6가 arrow function 만든이유는
단순히 함수를 선언하고 싶을때 사용을 하라는 뜻

this 바인딩이라는 기능자체가 없어!
