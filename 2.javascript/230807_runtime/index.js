// const 제네시스 = setTimeout(() => {
//   console.log("제네시스 go");
//   const 소나타 = setTimeout(() => {
//     console.log("소나타 go");
//     const 아반떼 = setTimeout(() => {
//       console.log("아반떼 go");
//       console.log("끝");
//     }, 3000);
//   }, 2000);
// }, 1000);

const 아반떼 = () => {
  console.log("아반떼 go");
};
const 소나타 = () => {
  console.log("소나타 go");
};
const 제네시스 = () => {
  console.log("제네시스 go");
};

setTimeout(() => {
  제네시스();
  setTimeout(() => {
    소나타();
    setTimeout(() => {
      아반떼();
      console.log("끝");
    }, 3000);
  }, 2000);
}, 1000);
