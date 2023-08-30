console.log(location.search.split("=")[1]);

const splitStr = "/,/,/,";

const numbers = localStorage.getItem("numbers")?.split(splitStr) || [];
const titles = localStorage.getItem("titles")?.split(splitStr) || [];
const users = localStorage.getItem("users")?.split(splitStr) || [];
const texts = localStorage.getItem("texts")?.split(splitStr) || [];
const createdAts = localStorage.getItem("createdAts")?.split(splitStr) || [];
const views = localStorage.getItem("views")?.split(splitStr) || [];
const likes = localStorage.getItem("likes")?.split(splitStr) || [];
const comments = JSON.parse(localStorage.getItem("comments"));

const idx = location.search.split("=")[1];
console.log(numbers[idx]);
console.log(titles[idx]);
console.log(users[idx]);
console.log(createdAts[idx]);
console.log(views[idx]);
console.log(likes[idx]);
console.log(comments[idx]);

document.getElementsByTagName("title")[0].innerHTML = titles[idx];

document.getElementById("title").innerHTML = titles[idx];
document.getElementById("user").innerHTML = users[idx];
document.getElementById("text").innerText = texts[idx];
// innerHTML로 적으면 br 엔터가 적용되지 않아서 ineerText가 적어
// 내부적인 내용만 출력 innerText
document.getElementById("title").innerHTML = titles[idx];
document.getElementById("created-at").innerHTML = new Date(
  +createdAts[idx]
).toLocaleString();

views[idx] = +views[idx] + 1;
localStorage.setItem("views", views.join(splitStr));
document.getElementById("views").innerHTML = `조회수 : ${views[idx]}`;

document.getElementById("likes").innerHTML = `좋아요 : ${likes[idx]}`;
document.getElementById("likes").onclick = () => {
  likes[idx] = +likes[idx] + 1;
  localStorage.setItem("likes", likes.join(splitStr));
  document.getElementById("likes").innerHTML = `좋아요 : ${likes[idx]}`;
};

console.log({ a: 1 });
console.log({ a: 1 }.toString());
console.log(JSON.stringify({ a: 1 }));
console.log(typeof JSON.stringify({ a: 1 }));
// 객체 배열 등을 스트링화 -> 값에대해서는 타입을 선별하게끔 넣어준다 1 이라고
// 키를 스트링으로 넣어주면 jSON 그냥 넣으면 객체??????????
//{"a":"1"}
// json을 이용해서 임시데이터를 저장할수도있다1!!!! 서버가없어도???
// 자동화 되어있어???? 원시데이터만 주고받을수있어 true false는 1 0으로
console.log(JSON.parse(JSON.stringify({ a: 1 })));
// 다시 객체로 되돌아갔어 10:52

const commentsElem = document.getElementById("list");
function setComments() {
  commentsElem.innerHTML = "";
  comments[idx].forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.comment} - ${item.user}`;
    commentsElem.append(li);
  });
}
setComments();

document.getElementById("add-comment").onclick = () => {
  comments[idx].push({
    user: document.getElementById("comment-user").value,
    comment: document.getElementById("comment").value,
  });
  localStorage.setItem("comments", JSON.stringify(comments));
  location.reload();
};
