class Borad {
  id;
  title;
  content;
  writer;
  created_at;
  hit;

  constructor(_id, _title, _content, _writer) {
    this.id = _id;
    this.title = _title;
    this.content = _content;
    this.writer = _writer;
    this.created_at = "2023-08-04";
    this.hit = 0;
  }
}

const row1 = new Borad(1, "hello world!", "내용입니다1", "boram");
const row2 = new Borad(2, "hello world!", "내용입니다2", "boram");
const row3 = new Borad(3, "hello world!", "내용입니다3", "boram");
const row4 = new Borad(4, "hello world!", "내용입니다4", "boram");
const row5 = new Borad(5, "hello world!", "내용입니다5", "boram");

const list = [row1, row2, row3, row4, row5];

function template(item) {
  return `
    <tr>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.content}</td>
        <td>${item.writer}</td>
        <td>${item.hit}</td>
    </tr>

    `;
}

function tableRows() {
  let html = "";
  for (let i = 0; i < list.length; i++) {
    html += template(list[i]);
  }
  return html;
}

function render(html) {
  // 출력만해주는 리턴 void
  const tbody = document.querySelector("tbody");
  tbody.innerHTML += html;
}

function init() {
  const html = tableRows();
  render(html);
}

init();
// 데이터를 묶어주고 init을 호출

//

// const tbody = document.querySelector("tbody");
// for (let i = 0; i < list.length; i++) {
//   //   console.log(list[i]); // 객체가 나와
//   const html = template(list[i]); //string
//   tbody.innerHTML += html;
// }

//query query query query 볃교 quey
// tbody.innerHTML = template();

//

// 1. 게시글을 만들어주는 클래스를 만든다.

// 2. 게시글을 모아둘수있는 배열을 만든다.

// 3. html이라는 변수를 어떻게 tbody.innerHTML 넣
