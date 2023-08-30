import BoardRow from "../lib/boardRow.js";
import Storage from "../lib/storage.js";

const storage = new Storage();

const form = document.querySelector("#writeform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e);
  //   console.log(e.target.title.value);
  // form에 감싸서 name의 값만 가져올수있어

  const title = e.target.title.value;
  const writer = e.target.writer.value;
  const content = e.target.content.value;

  // const {
  //   title: { value: title },
  //   writer: { value: writer },
  //   content: { value: content },
  // } = e.target;
  // 구조분해할당 destructuring

  // 마지막 아이템 id + 1
  const id = storage.incrementId();

  const dataRow = {
    id: id,
    title: title,
    writer: writer,
    content: content,
  };

  const boardRow = new BoardRow(dataRow);

  storage.set(boardRow);

  console.log("submit!");

  location.href = `/board/view.html?id=${id}`;
});
