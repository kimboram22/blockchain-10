# Symbol

ES6에서 추가된 `원시타입`

```js
console.dir(Symbol);
// 내용중에 iterator

const arr = [1, 2, 3];
arr[Symbol.iterator];
```

```js
arr[Symbol.iterator] = null;
for (const i of arr) {
  console.log(i);
}

arr.forEach((v) => console.log(v));
```
