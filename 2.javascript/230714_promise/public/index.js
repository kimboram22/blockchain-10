//promise  비동기를 만들어주는 ...? 프로토타입???

// setTimeout(() => {
//   console.log("a");
//   setTimeout(() => {
//     console.log("b");
//     setTimeout(() => {
//       console.log("c");
//       setTimeout(() => {
//         console.log("d");
//         setTimeout(() => {
//           console.log("e");
//         }, 5000);
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);
// 위와 같은 코드를 콜백 지옥이라고한다.
// 이러면 보기도 힘들고 그래서 나온게 비동기!

//콜백함수.. forEach,map...

//promise 클래스

function notCallbackHell(msg, time) {
  //msg 메세지
  // promise를 리턴해??그냥외워
  // 할일을 적어주는거야
  return new Promise((resolve, reject) => {
    // if (msg == "b") reject("b is error");
    //에러가 나면 catch로 잡아준다고??9:53
    try {
      setTimeout(() => {
        //   console.log(msg);
        resolve(msg);
        // 정상적으로 완료되었다는 뜻 리턴이아닌 리졸브로 넘겨서
      }, time);
      // 백엔드에서 오류나 문제가생기거나 받을수없으면 정상적으로 끝난다는 100%보장이 없어
      // -> 비동기 통신의 문제로 확인작업필요 resolve, reject
      // reject(msg);
      //정상적으로 끝나지않았음을 알려줌-에러발생
    } catch (err) {
      reject(err);
    } finally {
      console.log("통신완료");
    }
  });
}
//리졸브는 완료되었다고 인식
// 리젝트는 에러났다고 인식

// notCallbackHell("a", 1000)
//   .then((data) => {
//     // then이란 콜백함수를 넣었어
//     //result에는 resolve의...결과
//     // 보통 result매개변수명에 data를 많이쓴다
//     console.log(data);
//     return notCallbackHell("b", 2000);
//   })
//   .then((data) => {
//     console.log(data);
//     return notCallbackHell("c", 3000);
//   })
//   .then((data) => {
//     console.log(data);
//     // return notCallbackHell("c", 3000);
//   })
//   .catch((err) => {
//     console.log(err);
//     //에러...
//   })
//   .finally(() => {
//     console.log("끝났어");
//     // 에러가 나도 실행이된다
//   });
// console.log("체크중");
//52~74까지는 통신관련해서 테스트확인으로 많이쓰게될것들!!!!!!

// 이거도 길다! 다른방법으로 훨씬더 짧게 보기편하게 적어
//비동기의 약자 async
async function waitFunc() {
  // 비동기함수를 동기처럼 기다리게해서 사용하고있어  -> await(리조를 리턴해줘)
  // then은 쓸필요없음!!!!
  // promise를 이용해서!
  try {
    let temp = await notCallbackHell("a", 1000);
    console.log(temp);
    temp = await notCallbackHell("b", 2000);
    console.log(temp);
    temp = await notCallbackHell("c", 3000);
    console.log(temp);
  } catch (err) {
    //에러가나면 catch로 넘어오는거야
    console.log(err);
  }
}
waitFunc().then(() => {
  console.log("끝났어");
});
console.log("끝났어");

//다루게될 통신

// HTTP 통신 비정상은 아니지만 정상이라고 인증은 안받은 페이지
// HTTPS 통신(보안이들어가있음-은행) 정상적이라고 인증받은페이지
// 통신 방법, 과정, 규약 ->크게본것

// RESTFUL API
// 방식, 사용방법 ->세세하게보면
//GET, POST, PUT, PATCH, DELETE, OPTIONS ...
//가장 많이쓰는건 GET, POST

// GET ->>> 단순 데이터 요청...항상 지금까지 사용해왔어 ???
//     form을 쓸때 다 GET방식쓴거야 주소창에 나와

// POST ->>> 데이터를 숨겨서 요청...
//   주소안보이고 사용자가 몰라?

//PUT || PATCH ->>> 데이터 수정 요청.. 숨겨서 보내긴해
//   싹바꿔달라 || 일부분만 바꿔달라

// DELETE ->>>  데이터 삭제 요청....GET방식과 같아 주소창에 뜨는
// OPTIONS 수정해도 되는 사람인지 옵션에 ....거의 건드릴일이없는것..

//SOCKET통신 , TCP통신 , IP통신
// SOCKET은 규약 HTTP의 상위에있는것으로 서로간의 주고받음에 제약이 없어 하지만 항상 연결이되어있어야한다!
// 마음대로 보낼수있어(응답요청) -> 그게 TCP!!!!
// SOCKET통신이 2번 일어나는게 HTTP통신인거야

//HTTP통신은 백엔드에 요청보냈을때 무조건 응답이 와야해 -> 프론트가 요청하지않는상황에서는 응답없어
// HTTP는 SOCKET통신을 하나씩보내고 끝나

//
//
//브라우저상에 저장하는??? 크롬에서 저장하면 파이어폭스에서 못봐
// Cookie, Session
// cookie는 브라우저에서 저장하는 데이터
// 세션은 서버에서 저장하는 데이터
//    둘다 스트링이다 (단순 문자열)-> 이미지같은 큰데이터는 저장하지않아
//쿠키 -> 브라우저 저장, 로그인 저장(유지가 가능해), 취약해... 누구든지 보고 가져가서 해석할수있기때문
//세션 -> 로그인저장(개인정보) , 백엔드를 통하는
//  백엔드에 로그인요청을 보냈을때 백엔드가 랜덤 키를 프론트에 보내서 프론트가 그걸 쿠키에 넣고 암호로 세션에 저장?
// 캐시 -> 임시데이터, 브라우저에서 알아서 처리하는 데이터

document.cookie = "adad=fffff";

// 스토리지 -> 프론트에서 저장하고싶을때 사용하라고????? 쿠키말고
localStorage.setItem("name", ["abcd", "eee"]);
console.log(localStorage.getItem("name"));
localStorage.clear(); // 모든것을 지워?

//이걸로 이제 게시판해볼수있음 글적고 로그인하는걸...

var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();
