console.log(1 + 2); //3
console.log(0 - 2); //-2
console.log(3 + "123"); //3123
console.log(10 + true); //11
console.log("" + false); // string으로 false 라고 나옴
console.log(2 ** 3); //2의 3제곱

console.log(3 << 2); //12
//   <<비트 연산자? 3 ->11 2진수  << 왼쪽으로 두번이동해라, 1100 ->12 10진수 ?????
//2진수를 기준으로 연산하는 비트연산자

//비교연산자
console.log(1 < 3); //  1이 3보다 작으니까. true
console.log(1 > 3); // 1이 3보다 크다 거짓
console.log(4 >= 2); //4가 2보다 크거나 작다 true
console.log(4 <= 2); // 거짓
console.log(1 == 1); // 같다는 의미는 == 로 표시

console.log("1" == 1); //true 둘이 같은 값을 가진다고 판단해서 1이라서
console.log("1" == true);
console.log(0 == false);
//true 1 false 0 으로 인식
console.log(1 === true); //false 타입이달라서(타입이 같은지까지 확인함)

console.log(1 != "1"); // 거짓!느낌표는 부정의 표현(다른지를)
console.log(1 !== "1"); //true 3개가되면 단순비교가 아니라 타입까지 비교하게됨!!!!!!!
console.log(!true); //true를 반대로해서 false가 나옴

console.log(true && false); // 교집합에 속하는지, 둘다 true인지 확인 -> false
console.log(true && !false); // true

console.log(true || false); // or 을 뜻함, 둘중에 하나라도 트루인지 -> true

console.log(true && "안녕하세요"); //안녕하세요 나와... &&에서는 앞에 true를 주면 실행이되는... 리액트에서 사용될....
// &&는 앞에 false가 오는이상 뒤에껄 볼필요도 없이 false가 나와 - > || or일때는 가능
console.log(false && "안녕하세요"); //false나와
console.log(false || "안녕하세요"); //안녕하세요 나옴 or에서는

// !느낌표는 부정 !!부정의부정
console.log(!"안녕하세요"); //false  '안녕하세요'가 true라는것
console.log(!!" "); // true string 문자열이 있을떄 참이나 거짓이냐는 비어있으면 거짓 무언가 하나라도 있으면 참
console.log(!!-1); //참 0의외의 숫자는 다 true
console.log(!!{}); // 데이터가 있다고 인식해서 true
console.log(!![]);
console.log(!!null); //false 비어있다고 판단 0
console.log(!!undefined); //false 비어있어 0
console.log(!!"0"); //문자열로 따져서 true

let a = 2;
a += 2; // == a = a + 2; +연산을해서 대입을 하는것
console.log(a); //4
a -= 2; // == a = a - 2;  4-2
console.log(a); //2

console.log(a + 2); //4
console.log(a); //2

a *= 3; // == a = a * 3; 2*3
console.log(a); //6
a /= 3; // == a = a / 3; 6/3
console.log(a); //2
a **= 3; // == a = a ** 3; 2**3
console.log(a); //8 3제곱을한값

b = 2;
console.log(window.b);

c = 0;

console.log(a);
console.log(b);
console.log(c);

a = b = c = 5;
console.log(a);
console.log(b);
console.log(c);
// 전부 5가 나와 따라가서 대입연산자는 덮어씌워지는거야

console.log("-------------------");

console.log(0x10); //0x 라고 입력하면 16진수 x=hex ---16
console.log(0o10); //o=octal oct 0o 8진수 ---8
console.log(0b10); //b=bin, binery 0b 2진수 ---2 ,,,보통은 string으로 입력해
console.log("\u00a0"); //unicode

console.log(++a); //6 ++ 하나(1) 증가가 앞에입력하면-- 위에있다고 인식하기
console.log(a); //6
console.log(a++); //6 하나증가를 뒤에입력하면 -- 뒤에있다 라고 인식하기
console.log(a); //7
console.log(--a); // 6 -- 하나 감소
// a -= 1;
// console.log(a);

console.log(a--);
// console.log(a);
// a -=1;
//라고 이해하기!!!!!!!!!!!!!!

console.log(Symbol("a") == Symbol("a")); //false
//symbol은 다른것과 같을수가 없다! (id라고 생각하면됨,중복은된다..??) 다르다고 인식해서

const aa = Symbol("a");
const bb = Symbol("a");
console.log(aa == bb); //false

const cc = bb;
console.log(bb == cc); //true (같은값을 똑같이 넣었다고 인식하기 같다라는 조건이있을때 cc에 bb를 넣은거라서)
console.log({} == {}); //false 객체는 각각 다르다고 인식해서 f
// 위에까지 비교,대입,연산자들

console.log("------------------");

// 첫번째조건문!!!!!!!!!!!!!

if ("정경훈".length == "교수님".length) {
  console.log("이건 참이야");
}

if (a < 0) {
  console.log("a는 0보다 작다");
} else {
  console.log("a는 0보다 작지않아");
}

if (a > 0) {
  console.log("a는 0보다 크다");
} else {
  console.log("a는 0보다 크지않아");
}

if (a < 0) {
  console.log("a는 0보다 작다");
} else if (a < 10) {
  console.log("a는 10보다 작아");
} else if (a < 100) {
  console.log("a는 100보다 작아");
} else {
  console.log("a는 0보다 작지않아");
}

a = 15;
if (a < 0) {
  a *= -1;
} else if (a < 10) {
  a += 10;
} else if (a < 100) {
  a /= 10;
} else {
}
console.log(a);

//두번재 조건문 switch 여러가지를 한번에 case. break. default ->string으로 조건걸었을때 사용함
a = 1;
switch (a) {
  case 1:
    // case옆에는 값을 입력해서 비교하는
    console.log("a는 1이야");
    break;
  //중괄호 밖으로 나가라는 뜻, 없으면 거짓이여도 그냥 실행되어져
  case 2:
    console.log("a는 2야");
    break;
  default:
    console.log("a는 1도 2도 아니야");
}
console.log("switch 밖이야");

// switch는 밑에꺼까지 다 실행할수있고 case1 하고 default같이는 안돼 break를거니까
// if는 ()안에있는걸 실행

if (a == 1) {
  console.log("a는 1이야");
} else if (a == 2) {
  console.log("a는 2야");
} else {
  console.log("a는 1도 2도 아니야");
}

// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

// if (condition) {
// } else {
// }

console.log("------------------");

//반복문 while 가장간단한 반복문 -코드를입력하면 코드가 반복되는, 반복문안에 반목문

// while (true) {
//   console.log(++a);
// }
// 위에껀 쓰면안돼 무한 반복(무한로딩) 된 상태라서 자바스크립트가 끝나지않아 실행이 다끝나야 보여지는거라

while (a < 100) {
  console.log(a++);
}
while (a < 100) {
  console.log(a);
  a += 1;
}
console.log("------------------");

// console.log("2 * 2 = 4");
// console.log("2 * 3 = 6");
// console.log("2 * 4 = 8");

// let num1 = 2;
// let num2 = 2;
// while (num1 < 10) {
//   num2 = 2;
//   while (num2 < 10) {
//     console.log("2 * " + num1 + "=" + 2 * num1);
//     num2 += 1;
//   }

//   num1 += 1;
// }

// console.log(2 + " * " + 2 + " = " + 4);

//구구단 만들어보기
