import Storage from "../lib/storage.js"; // 데이터타입 : class

const storage = new Storage();
const list = storage.get(); // 스트링들이 객체형태로 list에 []로 나올거야

const creatRow = (row) => `
<tr>
    <td>${row.id}</td>
    <td><a href="./view.html?id=${row.id}">${row.title}</a></td>
    <td>${row.writer}</td>
    <td>${row.created_at}</td>
    <td>${row.hit}</td>
</tr>
`;

const components = list.map(creatRow);

const tbody = document.querySelector("tbody");
tbody.innerHTML = components.join("");
