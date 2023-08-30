const fruits = ["apple", "banana"];

console.log(fruits[0]);
fruits.push("peach");
console.log(fruits);
console.log(fruits.pop());
fruits.push("peach");
fruits.push("melon");
fruits.push("strawberry");
console.log(fruits);

console.log(fruits.indexOf("melon"));
console.log(fruits.indexOf("grape"));

console.log(
  fruits.find((item) => {
    // return true;
    return item == "melon";
  })
);

console.log(
  fruits.findIndex((item) => {
    // return true;
    return item == "melon";
  })
);

fruits.forEach((v) => {
  console.log(v);
});

console.log(
  fruits.map((v) => {
    console.log(v);
    return v + " juice";
  })
);

console.log(fruits.join(" / "));
console.log(fruits.toString());
console.log(fruits.slice(1, 3));
console.log(fruits.slice(1, -1));

fruits.push("mango");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("orange");
console.log(fruits);
fruits.shift();
console.log(fruits);

fruits.push("mango");
fruits.push("orange");
fruits.push("grape");
console.log(fruits);

console.log(fruits.sort());
console.log(fruits.reverse());
