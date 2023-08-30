document.getElementById("test").onclick = function test() {
  let num1 = 2;
  let num2 = 2;
  while (num1 < 10) {
    num2 = 2;
    while (num2 < 10) {
      console.log(num1 + " * " + num2 + " = " + num1 * num2++);
    }
    num1 += 1;
  }

  //

  //for 반복문
  //구구단
  for (let a = 2; a < 10; ++a) {
    //1변수를 넣고; 2조건을넣고; 3중괄호안에 코드들이 끝나고나서 진행할 코드를입력
    console.log(a); // 2 3 4...9 까지 나와
    for (let b = 1; b < 10; b++) {
      console.log(a + " * " + b + " = " + a * b);
    }
  }

  //함수 f(x)=y
  function sum(num1, num2) {
    console.log(num1 + "랑" + num2 + "랑 더해줄거야");
    return num1 + num2;
    console.log("이미 끝나서 안나와");
  }

  //function 함수명(매개변수){코드}

  sum(132, 512);
  //132+512 > num1+ num2
  // 함수의 값도 마음대로 사용할수있어
  console.log(sum(32, 512 - 200));

  //만들어두고 가져다 쓴다! sum을 만들고 console.log의 log처럼 출력하는거야
  //function 예약어
  // 함수안에 변수는 바깥의 변수와는 달라!!!!
  //함수의 이름 (sum,log) 내가 지어서 적어주는거야
  //이름다음에 ()소괄호에 필요한걸 적어주기-외부에서 받아와야하는 정보를 입력(변수명) -num1 num2
  // {}안에는 하고싶은것을 적어두는
  // return : 밖으로 내볼낼것을 적어두는거고 끝났다는 뜻!!!
  // return에 넣은내용은 함수대신에 들어왔다고 인식하기

  function asdf() {
    return asdf();
    //재귀함수로 자기를 계속 가져다 쓰니까 무한->함수는 스택이 쌓여...
  }
  // asdf();

  console.log(sum(sum(1, 2), sum(3, sum(4, 5))));
  // console.log(sum(3, sum(3, 9)));
  // console.log(sum(3, 12));
  // console.log(15);

  function echoStudent(name, age, job) {
    console.log(
      "학생의 이름은 " +
        name +
        "이고 나이는 " +
        age +
        ", 현재 직업은" +
        job +
        "입니다"
    );
  }
  echoStudent("양원철", 29, "학생");
  // 학생의 이름은 양원철이고 나이는 29, 현재 직업은 학생입니다

  const students = [
    {
      name: "강수빈",
      age: 26,
      job: "학생",
      hobby: ["애니감상", "달리기", "팔굽혀펴기"],
    },
    {
      name: "임태훈",
      age: 29,
      job: "학생",
      specialty: [],
    },
  ];

  for (let i = 0; i < students.length; i++) {
    echoStudent(students[i].name, students[i].job, students[i].job);
  }
  //  학생의 이름은 강수빈이고 나이는 학생, 현재 직업은학생입니다
  //  학생의 이름은 임태훈이고 나이는 학생, 현재 직업은학생입니다
  //반복문으로 두개를 다 뽑아올수있어
  // length를 적은건 길이를 센거야 (배열)...2번재 학생을 가져오기위해서

  echoStudent(students[0].name, students[0].job, students[0].job);
  // 학생의 이름은 강수빈이고 나이는 학생, 현재 직업은학생입니다

  console.log(1, 2);
  console.log(1 + 2);
  console.log("abc" + "eee");
  console.log("abc", "eee");
};
