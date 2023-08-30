// const boardValue = [{
//     uid:1,
//     title:"제목입니다.",
//     writer:"작성자",
//     createdAt: "2023-08-23",
//     hit: 0},
//     {
//     uid:1,
//     title:"제목입니다.",
//     writer:"작성자",
//     createdAt: "2023-08-23",
//     hit: 0},
//     {
//     uid:1,
//     title:"제목입니다.",
//     writer:"작성자",
//     createdAt: "2023-08-23",
//     hit: 0},
// ]

// localStorage.setItem("board",JSON.stringify(boardValue))
const board = localStorage.getItem("board")
  ? JSON.parse(localStorage.getItem("board"))
  : [];
const list_tbody = document.querySelector("tbody");

for (let i = 0; i < board.length; i++) {
  const list_tableRow = () => `
    <tr>
        <td>${board[i].uid}</td>
        <td>${board[i].title}</td>
        <td>${board[i].writer}</td>
        <td>${board[i].createdAt}</td>
        <td>${board[i].hit}</td>
    </tr>
    `;
  list_tbody.innerHTML += list_tableRow();
}
