function fruitFunc(value) {
  const tempElem = document.createElement("li");
  tempElem.innerHTML = value;
  fruitsList.append(tempElem);
}

const fruits = ["apple", "banana", "melon"];
console.log(fruits);

const fruitsList = document.getElementById("fruits");
const button = document.getElementById("add-fruit");
const addFruit = document.getElementById("name");

for (let i = 0; i < fruits.length; i++) {
  fruitFunc(fruits[i]);
}

button.onclick = function () {
  //li을 만들고 append를 해야해
  //   const tempElem = document.createElement("li");
  //   addFruit.value = "";
  //   tempElem.innerHTML = fruits[i];
  //   fruitsList.append(tempElem);
  fruitFunc(addFruit.value);
};
