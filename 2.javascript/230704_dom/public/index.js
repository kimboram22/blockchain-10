console.log(document.getElementById("list").children);
console.log(document.getElementById("list").firstElementChild);
// 유사배열--- 배열처럼 생겼지만 배열이아님
// htmlcollection 이건 html의 객체가아니야(키와값으로 나눈게 아니니까)
// 자식들을 찾아 하나씩 입력해줘야해

const listChildren = document.getElementById("list").children;
//프롬퍼티로 칠드런을 가져올수있다

for (let i = 0; i < listChildren.length; ++i) {
  //   listChildren[i].style = "border :1px solid black";
  //   listChildren[i].style.padding = "1rem " + i * 1 + "rem";
  // i가 반복할때마다 1씩 증가. 패딩이 1rem이 생기는
  //   listChildren[i].className = "item-border";
  //기존의 클래스이름이 날라가고 위에 이름으로 바뀜
  //   listChildren[i].className += " item-border";
  //이렇게 입력해야 적용이된다 string이라 글자그대로 가져와서 까다로워 띄어쓰기도 해야하
  listChildren[i].classList.add("item-border");
  console.log(listChildren[i].classList.contains("item-border"));
  // 포함하고 있는지 true, false로 알려줌---contains메서드를 보여주기위한
  // 함수사용 --- 함수명(필요한 매개변수)
  listChildren[i].classList.remove("item-border");
  console.log(listChildren[i].classList.contains("item-border"));
  // classList는 객체로 사용됨! 그래서 클래스를 추가하고 제거도 가능함
  // 엘레먼트의 안에 classList가 있는거야 (객체안에 객체) ---------다시 확인
  listChildren[i].onclick = function () {
    // if (listChildren[i].classList.contains("item-border")) {
    //   listChildren[i].classList.remove("item-border");
    // } else {
    //   listChildren[i].classList.add("item-border");
    // }
    listChildren[i].classList.toggle("item-border");
    // 토글이 껐다켰다로 add remove를 한번에 해결
  };
}
// 여태까지 부모에서 자식을 찾았고
console.log(listChildren[0].parentElement);
console.log(listChildren[1].parentElement);
// 이거는 자식에서 부모를 찾는거

console.log(document.getElementsByClassName("item-1"));

console.log(document.getElementById("list").getElementsByClassName("item-2"));

console.log(document.querySelector("#list .item-1"));
// console.log(document.querySelectorAll("#list"));

// css에서 적듯이 적을수있다  div를 다찾아 많은 양을 다..
// querySelctorAll도 있고 다 확인하게된다 있는지없는지
// get~~ id만확인하는게 효율적...교수님은 잘안쓰신다고함

console.log([]);
// 배열의 프로토타입 확인차 작성함

//

//점심먹고~~~ 같은내용인 함수를 빼는 작업
const studentList = document.getElementById("students");
function addStudentfunc(value) {
  //위에 벨류는 전달
  // 이함수는 for문을 돌고 클릭을했을때 돌아
  const tempElem = document.createElement("li");
  tempElem.innerHTML = value;
  tempElem.onclick = function () {
    // addStudentfunc(value);
    //value값은 같지만 함수를 가져다 쓸때 전달받은 값을 준다는 뜻
    //호출해서...
    // 가져온값을 눌러도 다시 그값이 밑에 뜨는거야!!!!!!!!!!!!(함수를 가져다 쓰므로써)
    tempElem.outerHTML = "";
    // 추가한걸 누르면 삭제될거야
    // 기존의 값도 누르면 삭제되고, 추가한 값도 누르면 삭제돼
  };
  studentList.append(tempElem);
}

const students = ["강수빈", "임태훈", "양원철"];
// const studentList = document.getElementById("students");
for (let i = 0; i < students.length; i++) {
  addStudentfunc(students[i]);
  //     점심먹고 새로 추가한내용----함수를 따로 매개변수로 하고 호출.....
  //   studentList.innerHTML += '<li class="item-1">' + students[i] + "</li>";
  // 쌍따음표를 넣고싶으니까 역슬래시 \를 "뒤에 넣어주면 ' 문자로 인식해-- 그냥은 변수로 인식해----다시 확인하기
  //   studentList.innerHTML += "<li>" + students[i] + "</li>";

  //   const tempElem = document.createElement("li");
  // createElement 엘리먼트를 추가할수있어
  //   tempElem.innerHTML = students[i];
  //   tempElem.id = "testing"+i;
  //   studentList.append(tempElem);
  //appen갖다붙인다는 의미---뒤에서 추가하는 것
  //   studentList.prepend(tempElem);
  // 위에서 부터 추가하는 게시판적용할때. 최신순 거꾸로 뜨는거지
}
// 엘리먼트를 추가하는 방법으로 유동적으로 데이터를 입력할수있는
// for문 밖에서 변수를 주고 for문에서 가져다 쓰는게 메모리 내부적으로 효과적

const button = document.getElementById("add-student");
const addStudent = document.getElementById("name");
// const addStudent = document.getElementsByTagName("input");
// ?????????? 엘리멘트 객체를 가져와야하는데 s 가 붙어서 ...
// id는 get element 하나
// class는 get elements 이름이 같은걸 다 가져와야하니까
button.onclick = function () {
  // 클릭했을때 실행해달라는 뜻
  //   console.log(addStudent.value);
  //   addStudent.value = "";
  // value 프롬퍼티가 바뀌는거야 ---사용자가 입력한 값을 받아온거야
  //   const tempElem = document.createElement("li");
  //   tempElem.innerHTML = addStudent.value;
  //   tempElem.onclick = function () {
  //     // tempElem.outerHTML = "";
  //     //입력해서 학생추가하고 입력된 내용을 누르면 사라져
  //   };
  //   studentList.append(tempElem);

  //점심먹기전 내용 이해못함 강의다시 듣기
  addStudentfunc(addStudent.value);
};
// 다시 수업듣고 확인하기----이해하기..
// 웹페이지에서 입력해둬도 새로고침하면 다 사라져, 기존것을 다시 돌리기때문에 -- 저장해두지 않았으니까 이게 백엔드의 역할-- 데이터베이스로 켜져있어서..

//함수는 만들어놓고 가져다 쓰고싶을때 실행할수있는
//    호출했을때 함수안에 있는 코드가 실행되는

//아래부터는 점심먹고 나서 내용-----
