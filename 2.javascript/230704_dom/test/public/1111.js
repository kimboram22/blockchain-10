const studentList = document.getElementById("students");
function addStudentfunc(value) {
  const tempElem = document.createElement("li");
  tempElem.innerHTML = value;
  tempElem.onclick = function () {
    // addStudentfunc(value);
    tempElem.outerHTML = "";
  };
  studentList.append(tempElem);
}

const students = ["강수빈", "임태훈", "양원철"];
// const studentList = document.getElementById("students");
for (let i = 0; i < students.length; i++) {
  addStudentfunc(students[i]);
  //   studentList.innerHTML += '<li class="item-1">' + students[i] + "</li>";
  // 쌍따음표를 넣고싶으니까 역슬래시 \를 "뒤에 넣어주면 ' 문자로 인식해--
  //   studentList.innerHTML += "<li>" + students[i] + "</li>";
  //   const tempElem = document.createElement("li");
  //   tempElem.innerHTML = students[i];
  //   tempElem.id = "testing"+i;
}

const button = document.getElementById("add-student");
const addStudent = document.getElementById("name");

button.onclick = function () {
  console.log(addStudent.value);
  //   addStudent.value = "";
  //   const tempElem = document.createElement("li");
  //   tempElem.innerHTML = addStudent.value;
  //   tempElem.onclick = function () {
  //     // tempElem.outerHTML = "";
  //   };
  //   studentList.append(tempElem);
  addStudentfunc(addStudent.value);
};
