function Student(name, age, hobby) {
  this.name = name;
  this.age = age;
  this.hobby = [];
  //취미를 배열로 넣어주었으니까(여러개일경우)

  if (typeof hobby == "object") {
    //배열자체가 hobby다
    this.hobby = hobby;
  } else {
    this.hobby.push(hobby);
    //하나이면 스트링이면 hobby에 넣어달라
  }
}
const students = [
  new Student("강수빈", 26, ["애니 감상", "달리기", "팔굽혀펴기"]),
  new Student("임태훈", 28, "영화 감상"),
  new Student("양원철", 28, "골프"),
  new Student("이선균", 30, "맛집 탐방"),
  new Student("김호현", 26, ["국내 여행", "세계 투어", "자전거 타기"]),
  new Student("황현준", 28, "드라이브"),
  new Student("김보람", 30, "일기 쓰기"),
  new Student("이은재", 24, "독서"),
  new Student("정승교", 24, "자전거 타기"),
  new Student("박상현", 30, "농구"),
  new Student("전상민", 32, ["분석", null]),
  new Student("김지훈", 26, "유튜브 보기"),
  // 배열안에 있는 아이템들
];

console.log(students[11]);
console.log(new Student("김지훈", 26, "유튜브 보기"));
console.log(students.indexOf(new Student("김지훈", 26, "유튜브 보기")));
// 힙의 다른위치라서 없는걸 찾으라고해서 -1  (주소가다르니까) 저장하고있는 힙이 달라

console.log(
  students.find((item) => {
    // return item.name == "정승교";
    // 프롬퍼티를 비교하는 방식으로 찾아가는 내부까지 접근해서!
    // 배열안에 객체가있을때 배열에있는 아이템을 찾고싶을때는
    // 정승교라는 스트링이냐를 찾는거
    return item.hobby.indexOf("자전거 타기") > -1;
    // 이걸 그냥 찍으면 강수빈학생이나와 없어서 -1 인데 0이 아니기때문에 true > -1을 해줘야 0이상이 나왔을때 찾아주는
    //무조건 0번째 순서로 찾으니까. 찾은 하나만나와! 맨위에걸로!! 찾은것을 바로 return해준다
    // -1은 true
  })
);
// 객체 자체를 가져온다!!!!!!

console.log(
  students.filter((item) => {
    // return item.age > 25;
    // 여러개를 뽑아낼수있어 (find와 달라 순서대로인거중 가장 위에있는거 하나를 가져외) true인것을 모두 보여준다!!!
    return item.hobby.indexOf("자전거 타기") > -1 && item.age > 25;
    // 자전거타기를 김호현학생해 추가하고--- 콘솔찍으면 2명나오고
    //    추가해서 위에 find에서는 정승교 학생대신 김호현이 나올거야 (위에 있어서)
    // && 를 추가해서 자전거타기 하면서 25살이상인지 찾으면 김호현
  })
  // 필터는 무궁무진하게 사용가능하다
);
