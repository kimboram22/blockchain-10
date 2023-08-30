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
