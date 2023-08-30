//  h1이 움직이는거
// setInterval(() => {
//   [...document.getElementsByClassName("anim")].forEach((elem) => {
//     elem.classList.toggle("off");
//   });
// }, 2000);

// 스크롤을 활용해서 css에서 만든 anim off 를 시간차를 두고 스크롤내릴때 하나씩
const animElems = [...document.getElementsByClassName("anim")];

let aniTime = 0;
function startAnim() {
  animElems.forEach((elem) => {
    if (elem.getBoundingClientRect().top < innerHeight) {
      if (elem.classList.contains("off"))
        setTimeout(() => {
          elem.classList.remove("off");
        }, 1000 * aniTime++);
    } else {
      elem.classList.add("off");
    }
  });
}

startAnim();
document.addEventListener("scroll", (e) => {
  //   console.log(window.scrollY);
  //   animElems.forEach((elem) => {
  //     if (elem.getBoundingClientRect().top < innerHeight) {
  //       setTimeout(() => {
  //         elem.classList.remove("off");
  //       }, 1000 * aniTime);
  //     } else {
  //       elem.classList.add("off");
  //     }
  //   });
  setTimeout(() => {
    aniTime = 0;
  }, 250);
  //휠에대해서 스크롤이 움직이는 시간이 0.25초라고 나온다고함
  startAnim();
});

// 구조분해할당 스프레드연산자 ...
// const [temp, temp2, ...temp3] = [1, 2, 3, 45, 56];
// console.log(temp);
// console.log(temp2);
// console.log(temp3);

// let a = 1;
// let b;
// let c;
// c = b = a = 3;
// console.log(a);
// console.log(c);
// // 왼쪽으로 읽고 스택이 쌓인다.

// const { aa } = { aa: 4213 };
// console.log(aa);
//객체는 키와 값이 있으니까 값만 가져오고싶을때 이름을..
