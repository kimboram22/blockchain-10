const str = "adcDeFgHIJklMn";
// string도 배열이다!!!! 뭉쳐있어서 배열과 똑같이 쓰지만 하나야!!!

console.log(!!" ");
// true 띄어쓰기도 유니코드에있어서 있다고 생각함

console.log(str.indexOf("cD")); //2부터 시작해서 2 앞에서 몇번째인지만 알려주는
console.log(str.length); //길이 14
console.log(str.slice(2, 4)); //cD --- 원본을 훼손하지않아
console.log(str.split("F")); //분해하다? F를 잘라서 두개로 나눠줘???
console.log(str.split("")); // 전부 하나씩 다 분해해 잘라버림---이미 슬라이스로 하나씩 자른다는게 들어가있는것임
// 문자열(하나를) 배열로 하나의 문자를 가진....14개가있다고 보면된다 ???
console.log(str.split(" "));
console.log(str.replace("Fg", " ")); //바뀐다.. 특정문자를 바꿔주는!! find의 개념
console.log(str.replaceAll("Fg", " ")); //filter의 개념??

const char = "'a'";
//다른언어에서의 " " 따음포 쌍따음표....?---db때 알게될내용...

console.log(str.toLowerCase());
console.log(str.toUpperCase());

const eee = "iamboram";
console.log(eee.split(" "));
console.log(eee.split(""));
const introduce = "i am jkh";
// introduce.toUpperCase();
// console.log(introduce);
const temp = introduce.split(" ");
console.log(introduce.split(""));
console.log(temp);
// console.log(
//   temp[0].toUpperCase() + " " + temp[1] + " " + temp[2].toUpperCase()
// );

// console.log(
//   introduce
//     .split(" ")
//     .map((item, index) => {
//       // if (index % 2 == 0) return item.toUpperCase();
//       // return item;
//       return index % 2 ? item : item.toUpperCase();
//     })
//     .join(" ")
// );
//여기까지 문자열관련

//

console.log(typeof new Date());
//object
console.log(new Date());
//현재시간이나온다
// UTC표기법

setTimeout(() => {
  console.log(new Date());
}, 10000);
// 10초뒤에 데이트가 찍힌다!!!!

console.log(new Date().getDate()); //날짜를 보여줌
console.log(new Date().getDay()); //요일를 보여줌 - 금요일이라서 5 .. 일요일은 0 토요일 6까지 표기
console.log(new Date().getHours());
console.log(new Date().getTimezoneOffset());
console.log(new Date().toISOString());
//그리니치 영국쪽 시간 (기준 GMT)
console.log(Date.now());
// 1688694024004 그리니치 표준시 MS 0.001초
//     컴퓨터의 모든시간이 GMT로 나와
console.log(new Date(1688694024004));

const langs = {
  ko: "안녕",
  en: "Hi",
  jp: "gonichiwa",
  ch: "nihao",
};
let selcetLang = "ko";
console.log(langs[selcetLang]);
// // 아주 유용한 방법!!!!!!!!!!!
console.log(new Date().getFullYear());
console.log(new Date().valueOf());
console.log(new Date().toJSON());

console.log(
  new Date().getFullYear() +
    "-" +
    (new Date().getMonth() + 1) +
    "-" +
    new Date().getDate() +
    " " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes()
);

console.log(new Date().setDate(7));

//여기까지 시간관련

//
console.log(Math.random());
//0~1 사이의 무작위 숫자가 나온ㄷ,
console.log(Math.abs(-9));
//절대값 absolute
console.log(Math.max(1, 120, -7, 0.6, 0));
// 최대값
console.log(Math.min(1, 120, -7, 0.6, 0));
// 최소값

console.log(Math.pow(3, 2));
// 3의 2승 --제곱 **과 같음
console.log(Math.pow(2, 10));
// 1024

console.log(Math.round(3.14));
//3
console.log(Math.round(3.54));
//4 round는 반올림
console.log(parseInt(3.54));
// parse 데이터를 바꾸는?? 글자를 숫자로, 숫자를 글자로 , Int는 정수????
// HTML로는 문자를 구조화해서 객체로...  C++을 js로 바꾼다를 파싱한다라고
console.log(Math.round(Math.PI));
console.log(Math.sqrt(8));
//제곱근...루트...
console.log(0.9999999999999999);
console.log(0.99999999999999999);
// 1이라고 뜬다... 컴퓨터는 소수점에 약해!!! 소수점 계산에 오류가 발생할수도있다
// 다른건 true false로 나누고 0과 1인데 소수점에만 약해
console.log(Math.random() * 3);
console.log(Math.random() * 3);
console.log(Math.random() * 3);
console.log(Math.random() * 3);
console.log(Math.random() * 3);
console.log(Math.random() * 3);

//

console.log([...[1, 2, 3, 4, 5], ...[1, 2, 3, 4, 5]]);
//...을주면 배열을 풀어줘?? 여러개로??
//저건 10개가 되는거야
// 변수에 대입할수없어
// 배열하나로 묶여있고 객체도 마찬가지
//   근데 이걸 ...을붙이면 다 풀어헤치는 포장지를 뜯어버린!!!
// ... 스프레드 연산자

console.log([...["가", "나", "다"], ...["라", "마"]]);

const aa = { a: 1, c: 4 };
const bb = { b: 2, d: 15, c: "632" };

console.log({ ...aa, ...bb });
// 키값으 갚으면  덮어!!!!

// 구조분해할당
const { a, c } = aa;
console.log(a);
console.log(c);
// aa의 키값을 가져올수있어 객체를 구조분해 프롬퍼티이름을 가져올수

// const itemArr = document.getElementsByClassName("item");
// for (let i = 0; i < itemArr.length; ++i) {
//   console.log(itemArr[i]);
// }
// 이렇게 찾아오는 아이템컬렉션 하나하나 출력

[...document.getElementsByClassName("item")].forEach((item) => {
  console.log(item);
});
//이렇게 활용이 가능하다!!! ... 스프레드 연산자 es6
// 이름이 없으니까 가져올떄 이름을 넣을수있어

const [item1, item2, item3, ...items] = [
  // item3에서 끊고 items는 나머지를 넣는
  ...document.getElementsByClassName("item"),
];
console.log(item1);
console.log(item2);
console.log(item3);
console.log(items);
// 8개 아이템중에 1,2,3은 따로 나머지 5개는 item에 묶여
// 가져올때 묶어줄수있어 ... 여러개를 컨트롤할수있어
// ...스프레드연산자는 그냥 이걸 외워
