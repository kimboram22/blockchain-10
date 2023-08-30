function sum(isIncrease, isDecrease, num1, num2) {
  if (isIncrease) {
    return num1 + num2;
  } else if (isDecrease) {
    return num1 - num2;
  }
}
console.log(sum(true, false, 4, 10));

let a = 111;
function sum1(num1, num2) {
  let sumValue = num1 + num2;
  console.log(a);
  return sumValue;
}
console.log(sum1(sum1(1, 2), sum1(3, sum1(4, 5))));

//

function tempFunc() {
  let name1 = "이선균";
  console.log("??");
}
tempFunc();
// console.log(name1);

function funcA() {
  // 함수 선언식
  return "a";
}

console.log(funcA);
console.log(funcA());
//  함수에 ()가 없으면 함수 그자체를 보여줌
// 함수를 실행하려면 () 소괄호가 필요해

//보통 함수는 어떤 객체를

const funcB = function () {
  //함수 표현식
  return "b";
};

console.log(funcB());
//this 사용할때

//

// const funcArrow = () => {}; 구조
//화살표 함수(에로우함수)
const funcArrow = (num1, num2) => {
  return num1 + num2;
};

let input;
function inputDate() {
  input = prompt("입력해라");
  console.log(input);
}
