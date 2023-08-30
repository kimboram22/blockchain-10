#재귀함수 Stack Overflow

```js
function Func2(num) {
  console.log(num);
  if (!num) return 0;
  Func2(num - 1);
}
```

- Func2(10);
  - num=10;
  -
