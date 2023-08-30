// const temp = {
//   num: 0,
//   title: "제목",
//   user: "김보람",
//   text: "지금은 안보이는 내용",
//   createdAt: Date.now(),
//   views: 0,
//   likes: 0,
//   comments: [],
// };

// const temps = [
//   {
//     num: 0,
//     title: "제목1",
//     user: "김보람",
//     text: "지금은 안보이는 내용",
//     createdAt: Date.now(),
//     views: 0,
//     likes: 0,
//     comments: [],
//   },
//   {
//     num: 0,
//     title: "제목2",
//     user: "김보람",
//     text: "지금은 안보이는 내용",
//     createdAt: Date.now(),
//     views: 0,
//     likes: 0,
//     comments: [],
//   },
//   {
//     num: 3,
//     title: "제목6",
//     user: "김보람",
//     text: "지금은 안보이는 내용",
//     createdAt: Date.now(),
//     views: 0,
//     likes: 0,
//     comments: [],
//   },
// ];

const splitStr = "/,/,/,";

// localStorage.setItem("list", temps);
// console.log(localStorage.getItem("list"));
// 객체형태는 문자열로 저장할수없다 object라고 나와
// localStorage.clear();
// localStorage.setItem("numbers", [1, 2].join(splitStr));
// localStorage.setItem("titles", ["확인중", "확인중"].join(splitStr));
// localStorage.setItem("users", ["김보람", "확인중"].join(splitStr));
// localStorage.setItem("texts", ["내용 확인중"].join(splitStr));
// localStorage.setItem("createdAts", [Date.now(), Date.now()].join(splitStr));
// localStorage.setItem("views", [0, 0].join(splitStr));
// localStorage.setItem("likes", [0, 0].join(splitStr));
// localStorage.setItem("comments", [[], []].join(splitStr));
// console.log(localStorage.getItem("list"));
//브라우저마다 따로 저장되고있어 로컬스토리지

// const numbers = localStorage.getItem("numbers");
// const titles = localStorage.getItem("titles");
// const users = localStorage.getItem("users");
// // const texts = localStorage.getItem("texts");
// const createdAts = localStorage.getItem("createdAts");
// const views = localStorage.getItem("views");
// const likes = localStorage.getItem("likes");
// // const comments = localStorage.getItem("comments");

// console.log(localStorage.getItem("numbers"));

const list = {
  numbers: localStorage.getItem("numbers")?.split(splitStr) || [],
  titles: localStorage.getItem("titles")?.split(splitStr) || [],
  users: localStorage.getItem("users")?.split(splitStr) || [],
  createdAts: localStorage.getItem("createdAts")?.split(splitStr) || [],
  views: localStorage.getItem("views")?.split(splitStr) || [],
  likes: localStorage.getItem("likes")?.split(splitStr) || [],
  // setItem 에서 키와 값을 배열이 아니라 string으로 받기때문에 잘라주기위해 split을 적어줌
  // split에 , 아니라 제목에 ,들어갈수도있어서 splitStr으로 /,/,/, 으로 해주기
};
console.log(list);
const listElem = document.getElementById("list");

// const thList = ["num", "title", "user", "createdAt", "views", "likes"];
// 헤드의 내용을 묶어두고 for문으로

// for (let j = 0; j < temps.length; ++j) {
//   const tr = document.createElement("tr");
//   for (let i = 0; i < thList.length; ++i) {
//     const td = document.createElement("td");
//     tr.append(td);
//     td.innerHTML = temps[j][thList[i]];
//   }
//   listElem.append(tr);
// }

// temps.forEach((item) => {
//   const tr = document.createElement("tr");
//   thList.forEach((th) => {
//     const td = document.createElement("td");
//     tr.append(td);
//     td.innerHTML = item[th];
//   });
//   listElem.append(tr);
// });
// 기존코드 주석처리하고 스토리지로 다시

const thList = ["numbers", "titles", "users", "createdAts", "views", "likes"];

for (let i = 0; i < list.numbers.length; ++i) {
  const tr = document.createElement("tr");
  thList.forEach((item) => {
    const td = document.createElement("td");

    if (item == "createdAts")
      td.innerHTML = new Date(+list[item][i]).toLocaleString();
    else if (item == "titles") {
      // title을 눌렀을때 게시글이 보이게 하려고 (board페이지로 넘어가 a태그로 묶어준거야)
      const aElem = document.createElement("a");
      aElem.innerHTML = list[item][i];
      aElem.href = `./board/?idx=${i}`;
      td.classList.add("title");
      td.append(aElem);
    } else td.innerHTML = list[item][i];
    tr.append(td);
  });
  listElem.append(tr);
}
