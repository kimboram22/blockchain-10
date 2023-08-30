//로컬스토리지를 저장하거나 가져오거나 리셋하거나 기능들을 모아두는 클래스
import {
  INITIAL_STORAGE,
  STORAGE_NAME,
  INITIAL_ID,
  INCREMENT_STEP,
} from "./constants.js";

class Storage {
  name;
  storage;

  constructor(StorageName = STORAGE_NAME) {
    // 매개변수에 상수를 넣은이유는 localstorage에서 undefined가 떠서 터지지 않게하기위해서
    this.name = StorageName; // 'board' : string
    this.storage = localStorage.getItem(this.name); // string(한번이라도 실행하면) | null(실행한적없을때)
  }

  get() {
    // storage.get(); // getter함수를 만들어(명칭)
    if (!this.storage) return INITIAL_STORAGE;
    return JSON.parse(this.storage); // json을 써서 객체로 받아와
  }

  set(item) {
    // dataRow의 객체
    const storage = this.get(); // 데이터타입: 객체
    const serialize = JSON.stringify([...storage, item]);
    localStorage.setItem(this.name, serialize);
  }

  delete(id) {
    const storage = this.get();
    const newStorage = storage.filter((row) => row.id !== parseInt(id));
    const serialize = JSON.stringify(newStorage);
    localStorage.setItem(this.name, serialize);
  }

  // 마지막 아이템 가져오기
  getLatestItem() {
    const latestRow = this.get().pop();
    // []비어있다면 null값이 나올거야
    return latestRow;
  }

  getById(id) {
    return this.get().find((row) => row.id === parseInt(id));
  }

  incrementId() {
    // 2가지케이스가 있는데 10:25 1,초기값설정하기
    const row = this.getLatestItem();
    if (!row) return INITIAL_ID;
    return row.id + INCREMENT_STEP;
  }

  clear() {
    localStorage.setItem(this.name, "[]");
  }
}

export default Storage;

/*
{
    const storage = new Storage();
    
    name:'board',
    storage:'null | [어떤스트링이 들어올지몰라] ',
    get(),
    set(),
    clear()
}
*/

/*
storage.name // board
storage.storage // null 또는  [어떠한 스트링]

stroage.get() //object

storage. 12:09;
*/
