# Map함수만들기

```js
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];
```

name 속성만 따로 작업해서
`['반팔티', '긴팔티', '핸드폰케이스', '후드티', '바지']`

```js
const names = [];
for (const a of products) {
  name.push(a.name);
}
console.log(names);
```

근데 문제가 가격만 뽑아보라고 바꼈을때
name이였던걸 price로 다시 짜야하는데
이걸 이름만바꿔서 뽑아오게하기

```js
const prices = [];
for (const a of products) {
  name.push(a.prices);
}
console.log(prices);
```

map함수로 이용하기

```js
const map = (callback, arr) => {
  const result = [];
  for (const a of arr) {
    result.push(callback(a));
  }
  return result;
};

map((v) => v.name, products);
//  ['반팔티', '긴팔티', '핸드폰케이스', '후드티', '바지']
map((v) => v.price, products);
//  [15000, 20000, 15000, 30000, 25000]
```
