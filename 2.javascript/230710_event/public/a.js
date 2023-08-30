// document.getElementById("btn").onclick = function (e) {
//   // click event
//   console.log("클릭함");
//   console.log(e);
// };

// console.log(`${1 + 2 + 3 + 4}`);

// const tempFruit = {
//   name: "사과",
//   color: "red",
// };

// console.log(
//   `이 과일의 이름은 ${tempFruit.name}이고 색깔은 ${tempFruit.color}이다.`
// );

//

// document.getElementById("btn-box").addEventListener("mouseover", (e) => {
//   console.log("마우스가 올라갔을때");
// });

// document.getElementById("btn-box").addEventListener("mouseout", (e) => {
//   console.log("마우스 나감");
// });

// document.getElementById("btn-box").addEventListener("mouseenter", (e) => {
//   console.log("mouse enter");
// });

// document.getElementById("btn-box").addEventListener("mouseleave", (e) => {
//   console.log("mouse leave");
// });

const tempClick = (e) => {
  const tempElem = document.createElement("div");
  tempElem.onload = function () {
    console.log("테스트 추가완료");
  };
  tempElem.innerHTML = "testing";
  e.target.append(tempElem);
  // 이미지를 넣었을때 사용함...교수님 점심시간에 추가해서 보여주심!

  // 다시확인해보기 나 안나와...교수님파일 비교해보기
};
// tempClick();

document.getElementById("btn").onclick = tempClick;
