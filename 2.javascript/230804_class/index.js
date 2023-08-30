console.log("hello world");

class Job {
  job;
  career;
  // 멤버변수
  // 프로토타입 키값이 들어감

  constructor(_job, _career) {
    // 생성자 함수
    // this ={}
    this.job = _job;
    this.career = _career;
    // return this
  }

  //메서드는 생성자함수 밖에서 선언
  move() {
    console.log("hello world!");
    // 리턴값이 없는것으로 void
  }
}

const job = new Job("senior", "10");
console.log(job);
// job.move();

console.log(console.log("hello world!"));

// function move() {
//   // return undefined
//   return 10;
// }
// console.log(move);
// const a = move();
// console.log(a);

//method

// const job = new Job("senior", "10");
// // senior, 10 이라는 인자값을 넣고 매개변수 선언을 해주어햐
// console.log(job);

// const job2 = new Job("1", "2");
// console.log(job2);

// console.log(job === job2);

// const job3 = {
//   job: "senior developer",
//   career: "10",
//   ageGroup: {
//     group: 30,
//     person: {
//       name: "ingoo",
//       id: "web7722",
//     },
//   },
//   move: function () {
//     console.log("hello world!");
//   },
// };

// console.log(job3);
// console.log(job3.move);

// job3.move();
