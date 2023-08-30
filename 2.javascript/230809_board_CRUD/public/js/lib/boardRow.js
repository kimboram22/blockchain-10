class BoardRow {
  id;
  title;
  content;
  writer;
  created_at;
  hit;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.content = row.content;
    this.writer = row.writer;
    this.created_at = "2023-08-09";
    //날짜는 내장객체로 직접해보는걸로 그냥 오늘은 고정시켜둠
    this.hit = 0;
  }
}

/*
row{
    id:1,
    title:"adfd",
    content:"dfdfdfdfdd"
    writer:"sdf"
}
*/

export default BoardRow;
// 로컬스토리지에 저장하기위해서
// value값으로 완벽하게 만들기위해서 write에 import 2:33
