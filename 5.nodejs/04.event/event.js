class Event {
  observers = [];

  constructor() {}

  on(eventName, callback) {
    const obj = {
      //  [eventName]: callback
      key: eventName,
      value: callback,
    };
    this.observers.push(obj);
  }

  emit(eventName, obj) {
    // let observer;
    //
    // for (let i = 0; i < this.observers.length; i++) {
    //   if (this.observers[i].key === eventName) {
    //     observer = this.observers[i];
    //   }
    // }

    const observer = this.observers.find((v) => v.key === eventName);
    // console.log(observer); // {}
    // console.log(observer.value);
    observer.value(obj);
  }
}

const ev = new Event();

ev.on("click", (a) => {
  console.log(a);
  console.log("hello world");
});

ev.emit("click", { name: "boram" });

// console.log(ev.observers);
