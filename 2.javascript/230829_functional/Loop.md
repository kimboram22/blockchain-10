## 배열 메서드

# Loop

ES5 vs ES6 비교

```js
const list = [1, 2, 3];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
```

ES6 for..of

```js
const list = [1, 2, 3];
for (const a of list) {
  console.log(a);
}
```

set, map 구조체

```js
const set = new Set([1, 2, 3]);
```

set은 돌아가는 로직이 다르다!!
