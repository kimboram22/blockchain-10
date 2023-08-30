import { getParams } from "../lib/utils.js";
import Storage from "../lib/storage.js";

try {
  // view
  // 데이터관리
  const storage = new Storage();

  const { id } = getParams();
  const row = storage.getById(id);

  // 화면관리
  const title = document.querySelector("#title");
  const writer = document.querySelector("#writer");
  const content = document.querySelector("#content");

  title.innerHTML = row.title;
  writer.innerHTML = row.writer;
  content.innerHTML = row.content;

  // delete

  const btn = document.querySelector("#deleteBtn");
  btn.addEventListener("click", () => {
    console.log(id);
    storage.delete(id);
    location.href = "./list.html";
  });
} catch (e) {
  console.log(e.message);
  location.href = "./list.html";
}
