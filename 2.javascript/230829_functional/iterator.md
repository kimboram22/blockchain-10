# iterator

```js
{
    value:"",
    done:"",
}
```

```js
arr[Symbol.iterator];
const iterator = arr[Symbol.iterator](); // {}
iterator;
console.dir(iterator);
iterator.next();
```

const iterator = arr[Symbol.iterator]() // {}
{ next : }
이터러블

## 이터러블 만들기

```js
const iterable = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: "",
          done: "",
        };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
```

### 실습 1~3반복하기 구현해보기

```js
const iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        const done = i === 4;
        const value = done ? undefined : i++;
        return {
          value: value,
          done: done,
        };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

const iterator = iterable[Symbol.iterator]();
console.log(iterator);

for (const a of iterator) console.log(a);

const a = [1, 2];
console.log(...a);
// 1 2
// 스프레드 연산자도 iterator 를 가지고있다
```
