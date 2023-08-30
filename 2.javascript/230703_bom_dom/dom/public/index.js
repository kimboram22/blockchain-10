// DOM, Document(HTML) Object Model(저장된 데이터)
// MVC

console.log(document);
console.dir(document.head);
console.dir(document.body);
// 처음 구조화된 객체 .을 사용해
// 기본적으로 가지고있는 key로 브라우저가 알아서 해주는 ????

console.log(document.body.innerHTML);
// html의 내용 엘리먼트까지 다 나오는
console.log(document.body.innerText);
// body에 적힌 내용 엘리먼트없이 나오는

document.body.innerHTML += "<div>추가중</div>";
document.body.innerHTML = "<div>위에 추가</div>" + document.body.innerHTML;
// string 이기때문에 +=을 넣어 추가해준거야 그냥 대입하면 사라짐

//dom은 내가 작성하는 html을 수정할수있다!!

document.getElementById("root").innerHTML += "<div>추가중</div>";

console.log(document.getElementById("root").innerHTML);
// root의 내부를 찾음
//   태그안에있는 내부에있는 내용

console.log(document.getElementById("root").outerHTML);
// 엘리먼트에 관한 문서를 전부 string출력 , 잘못수정하면 부모가 날라가, 근데 딱히 사용할일없음
//   여는태그에서 닫는태그까지 전부

document.getElementById("root").style.border = "1px solid black";
// 무조건 string으로 입력해야한다
// f12에서 클래스옆에 style이 그대로 적혀있다면 js에서 입력한것! 그대로 떠버려
