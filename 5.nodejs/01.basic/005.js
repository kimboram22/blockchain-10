module.exports; // {}
module.exports === exports; // true

// module.exports.a = 10;
exports.a = 10;

// const sum1 = (a, b) => {
//   return a + b;
// };

// const sum10 = (a) => {
//   return a + 10;
// };

// 간단하게 적으면
// const sum1 = (a, b) => a + b;
// const sum10 = (a) => a + 10;

// 2개의 함수 내보내기?

// module.exports = {
//   sum1: sum1,
//   sum10: sum10,
// };

// module.exports = { sum1, sum10 };

//결국 이렇게 적을수도있다!
exports.sum1 = (a, b) => a + b;
exports.sum10 = (a) => a + 10;
