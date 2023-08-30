document.getElementById("btn").onclick = function (e) {
  // click event
  console.log("클릭함");
  console.log(e);
};

window.onload = function () {
  console.log("페이지 로딩완료");
  // 웹페이지자체가 로딩이 되었는지
};

//   document.getElementById("btn").onplay
//onplay 영상이나 비디오 실행하는 . 객체라고 인식해서 추가는 가능해 하지만 무의미한 코드

// 지금까지 써왔던.. onload onclik
// 웹API에 넣어놨다가 쓰는

//

//이벤트가 들리면 실행시켜주는 addEventListener()

// 첫번째 매개변수는 이벤트이름을 적어주고--click
// 두번째 매개변수로 콜백함수를 넣어주고
//addEe   배열을 추가한다고 인식하기
// 해당콜백함수가 한번더실행한다고  위에꺼까지 다 불러와
//addEventListener를 쓸건지 대입연산자를 쓸건지 생각해야해

document.getElementById("btn").addEventListener("click", (e) => {
  console.log(e.target);
});
// div가 나와
document.getElementById("btn").addEventListener("click", (e) => {
  console.log(e.target.innerHTML);
});
// 버튼확인이라는 내용이 나와
// target 녹화다시보기!!!

// document.getElementById("btn").addEventListener("load", (e) => {
//   console.log("btn 로딩완료");
// });
// btn은 <div> </btn>으로 이미 로딩끝남

document.getElementById("btn").addEventListener("mouseover", (e) => {
  console.log("버튼 위 마우스");
});

const tempClick = (e) => {
  const tempElem = document.createElement("div");
  tempElem.onload = function () {
    console.log("테스트 추가완료");
  };
  tempElem.innerHTML = "testing";
  e.target.append(tempElem);
  // 이미지를 넣었을때 사용함...교수님 점심시간에 추가해서 보여주심!

  // 다시확인해보기 나 안나와...교수님파일 비교해보기 --이것만 따로 보니까 testing나와!!!
};
// tempClick();

document.getElementById("btn").onclick = tempClick;

document.getElementById("btn").onclick = (e) => {};
// 이렇게 적어놓고 시작하기도해!!!!
// 이벤트라서 e

// for()문에서 i index의 개념이라서

// [].forEach((v,i,a)=>{})
// value, index, array 라고 적는사람도있고 실무에선 잘안써

document.getElementById("count").addEventListener("click", (e) => {
  console.log(e);
  if (e.ctrlKey) {
    e.target.innerHTML = +e.target.innerHTML - 1;
  } else {
    e.target.innerHTML = +e.target.innerHTML + 1;
  }
  // 그냥클릭하면 숫자가 늘어나고
  // 컨트롤키를 누르고 눌렀을때는 카운트 마이너스
});

// 드래그
window.addEventListener("pointerdown", (e) => {
  console.log(e.pageX);
  console.log(e.pageY);
});

window.addEventListener("pointerup", (e) => {
  console.log(e.pageX);
  console.log(e.pageY);
});

// touch의 특징-- 여러개가 될수가있다 터치는 두개이상이 될수있기때문
window.addEventListener("touchstart", (e) => {
  console.log(e);
  console.log(e.pageX);
  console.log(e.pageY);
});

window.addEventListener("touchend", (e) => {
  console.log(e.pageX);
  console.log(e.pageY);
});

//
//window사이즈 변환
window.onresize = function (e) {
  document.getElementById("width").innerHTML = e.target.innerWidth + "px";
  document.getElementById("height").innerHTML = e.target.innerHeight + "px";
  // 사이즈가 바뀔때마다 아이디를 찾기때문에 버벅거릴수있음
  //   반응형할때라던지,
  if (+e.target.innerWidth / +e.target.innerHeight > 1) {
    // 가로세로 비율은 보는거야
    // 가로모드인지 세로모드인지
    // 랜드스케이프모드 포트레이트모드
    //css상은 뷰포트
  }
};

console.log("b" + "a" + +"a" + "a");
//baNaNa
// "a" 스트링인데 + +를 써서 형변환? 타입을 바꿔주면
//NaN은 숫자이지만

// window.onkeydown = function (e) {
//   console.log(e);
//   // 키보드에 입력했을때
//   // code, 입력한 그자체 a
//   // keycode, 아스키코드의 65 a
// };

//

// document.getElementById("test-form").onsubmit = () => {
//   alert("데이터 보냈어");
//   // 창으로 떠 --> 페이지 외적 팝업
//   // 페이지 내적이면 모달이고 alert은 팝업!!
//   // 입력한내용이 주소창에 떠버려
// };

// document.getElementById("test-form").onsubmit = (e) => {
//   //submit은 요청을 보내는 방법으로 주소를 옮기는것
//   e.preventDefault();
//         적은것을 먼저 실행하고 기본메서드를 실행하라는..
//   // 데이터를 안보내는거야
//   //기본적으로 작동하는 메서드를 막아준다  --> form에서 많이 사용함
//   // --->  로그인이라면 아이디 비번이 맞는값이여야 이동시키기!!  통신을통해서 이동시키는게 맞기때문
//   //네이버는 form이아니고 비동기식...? --> 노드js에서하는내용...
//   console.log("데이터 안보냈어");
//   // 페이지 이동자체를 막은거야..
// };

// 다른방법

console.log(document.forms["test-form"]);
// id로 찾고 가져온다
// console.log(document.forms.test-form); <<안돼 -를 빼기로인식

document.forms["test-form"].onsubmit = (e) => {
  e.preventDefault();
  console.log("데이터 입력완료");
  //form자체에
};

document.forms["test-form"].getElementsByTagName("button")[0].onsubmit = (
  e
) => {
  e.preventDefault();
  console.log("버튼 서브밋?");
  //form자체에
};

// 점심이후
// 교수님 점심시간때 온로드로 이미지 넣어보여주셨음!!

//input

document.getElementById("name").onfocus = function (e) {
  console.log("포커싱");
  // 커서가 들어왔을때
};

document.getElementById("name").onblur = function (e) {
  console.log("밖으로 나갔어");
};

document.getElementById("name").onchange = function (e) {
  console.log(e.target.value);
  // 포커싱되었다가 value를 입력하고 블러(외부로 나갔을때) 값이 바뀌었을때! onchange
  // 회원가입할때 아이디 입력할때 길이가 짧다던지, 중복됐다던지 알려주는!!
  //   document.getElementById("name-alert").innerHTML = e.target.value;
};

// document.forms["test-form"]["name"].oninput = function (e) {
//   console.log(e.target.value);
//   // 적은 내용 value가 다 console에 나와
//   // form 안에 input name을 찾은거야
//   // 한글도 나오는데
//   // 조합형 한글  ㄱ ㅏ => 가
//   // 두번찍힐때도 있고 한번찍힐때가 있어.. 이건 조합하는데 컴퓨터의 문제

//   //   네이버에서 검색했을때 추천검색어가 뜨는거!!!
//   //회원가입에서도 쓰고 검색엔진에서도 쓰고
// };

//1. get~~으로 네임을 찾거나
//2.  폼에서 네임을 찾거나

//언제 실행되는지에 따른 이벤트야 ..
//onchange는
// oninput은 변경되면 실행되는
// 1시36분내용

//

// 템플릿 리터널 -> string, html에서의 pre같은 형식
let a = 1;
console.log(`
1 옆에있는 백틱
${1 + 2 + 3 + 4} << 여기에 변수를 입력 가능
// 숫자를 계산해서 보여줘 10이라고
// 자바스크립트 자체를 입력가능해
// {} 안에는 삼항연산자, 함수, 변수 반환값이 있는걸 넣을수있어
${a * 10}
${[1, 2, 3, 4]} >> 자체적으로 toString을 시킨거
${{
  a: 1,
  b: 2,
}} >>> 객체를 넣으면 object object라고 떠 => toString을 통하는데 객체는 저게 끝이야
`);
console.log("1 옆에있는 백틱.\n" + a * 10 + "<< 여기에 변수를 입력 가능\n");
// \n 은 줄바꿈!!!!

const tempStudent = {
  name: "김보람",
  age: 30,
};

document.getElementById("template-literal").innerHTML = tempStudent;
// object Object로 출력ㄷ

document.getElementById(
  "template-literal"
).innerHTML = `이름은 ${tempStudent.name}이고 "나이는 ${tempStudent.age}입니다.`;
// ""이것도 그대로 나와

// eval() ---> 스트링을 자바스크립트로 실행시키는 --->지양하는방법!!!!! 절대사용하지말라는
// eval("console.log('테스트')") ---> 스트링으로 입력한 콘솔을 실행시켜준다

//

// mouseover, mouseenter, mouseout, mouseleave 찾아보기!!!!!!!!!!
document.getElementById("btn-box").addEventListener("mouseover", (e) => {
  console.log("마우스가 올라갔을때");
});

document.getElementById("btn-box").addEventListener("mouseout", (e) => {
  console.log("마우스 나감");
});

document.getElementById("btn-box").addEventListener("mouseenter", (e) => {
  console.log("mouse enter");
});

document.getElementById("btn-box").addEventListener("mouseleave", (e) => {
  console.log("mouse leave");
});
